<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 v-if="showResult">
        <v-card-title>
          <span class="title">Asignación de recolectores a lotes de café</span>
        </v-card-title>
        <v-container>
          <show-assignment v-bind:recolectores="result"/>
        </v-container>
      </v-flex>

      <v-flex xs12 v-if="showError">
        <v-container>
          <v-alert :value="true" color="error" icon="warning" outline>{{ message }}</v-alert>
        </v-container>
      </v-flex>
      <v-flex v-if="waiting">
        <v-progress-circular :size="70" :width="7" color="purple" indeterminate></v-progress-circular>
        <h1>Esto puede tomar unos minutos</h1>
      </v-flex>
      <v-flex xs12 v-if="!(showResult || waiting)">
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">Información de lotes</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 2" step="2">Información de recolectores</v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-5">
                <v-form>
                  <v-container>
                    <h2>Información de lotes</h2>
                    <div v-for="lote in lotes" :key="'lote'+lote.id">
                      <v-layout
                        :column="$vuetify.breakpoint.mdAndDown"
                        :row="!$vuetify.breakpoint.mdAndDown"
                      >
                        <v-flex xs12 md4>
                          <v-text-field
                            label="Kg de café"
                            v-model="lote.kg"
                            v-validate.initi="'numeric|required'"
                            data-vv-as="Kg de café"
                            :name="'lote'+lote.id"
                            :error-messages="errors.collect('lote'+lote.id)"
                            required
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md4>
                          <v-radio-group
                            label="Pendiente de inclinación"
                            v-validate="'required'"
                            :name="'pendiente'+lote.id"
                            data-vv-as="Pendiente"
                            v-model="lote.pendiente"
                            :error-messages="errors.collect('pendiente'+lote.id)"
                          >
                            <v-radio label="mayor al 200%" :value="2"></v-radio>
                            <v-radio label="101% - 200%" :value="1"></v-radio>
                            <v-radio label="20% - 100%" :value="0"></v-radio>
                          </v-radio-group>
                        </v-flex>

                        <v-flex xs12 md3 v-if="lote.id != 0">
                          <v-btn color="error" v-on:click.native="() => deleteLote(lote.id)">
                            <v-icon>delete</v-icon>
                          </v-btn>
                        </v-flex>
                      </v-layout>
                    </div>
                    <v-layout>
                      <v-flex xs12 md3>
                        <v-btn color="warning" v-on:click.native="addLote">
                          Añadir Lote
                          <v-icon dark right>add</v-icon>
                        </v-btn>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-form>
              </v-card>

              <v-btn color="primary" @click="e1 = 2">Siguiente</v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mb-5">
                <v-form>
                  <v-container>
                    <h2>Información de recolectores</h2>
                    <div v-for="recolector in recolectores" :key="'recolector'+recolector.id">
                      <v-layout row wrap>
                        <v-flex xs12 md3>
                          <v-text-field
                            v-validate="'numeric|required'"
                            label="Numero de recolectores"
                            :name="`recolectores${recolector.id}`"
                            :error-messages="errors.collect(`recolectores${recolector.id}`)"
                            v-model="recolector.num"
                            :disabled="!recolector.group"
                            required
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md4>
                          <v-radio-group
                            label="Rendimiento"
                            v-validate="'required'"
                            :name="`rendimiento${recolector.id}`"
                            data-vv-as="Rendimiento"
                            v-model="recolector.rendimiento"
                            :error-messages="errors.collect(`rendimiento${recolector.id}`)"
                          >
                            <v-radio label="Alto rendimiento" :value="2"></v-radio>
                            <v-radio label="Medio rendimiento" :value="1"></v-radio>
                            <v-radio label="Bajo rendimiento" :value="0"></v-radio>
                          </v-radio-group>
                        </v-flex>

                        <v-flex xs12 md2>
                          <v-switch v-model="recolector.group" label="Grupo"></v-switch>
                        </v-flex>

                        <v-flex xs12 md3 v-if="recolector.id != 0">
                          <v-btn
                            color="error"
                            v-on:click.native="() => deleteRecolector(recolector.id)"
                          >
                            <v-icon>delete</v-icon>
                          </v-btn>
                        </v-flex>
                      </v-layout>
                    </div>
                    <v-layout row wrap>
                      <v-flex xs12 md3>
                        <v-btn color="warning" v-on:click.native="addRecolector">
                          Añadir recolector
                          <v-icon dark right>add</v-icon>
                        </v-btn>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-form>
              </v-card>
              <v-btn color="primary" @click="e1 = 1">Atras</v-btn>
              <v-btn color="success" v-on:click.native="calcular">Calcular</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import ShowAssignment from "../components/ShowAssignment.vue";

export default {
  name: "StaffAssignment",
  components: {
    ShowAssignment
  },
  data() {
    return {
      recolectores: [
        {
          id: 0,
          num: 1,
          rendimiento: "",
          group: false
        }
      ],
      lotes: [
        {
          id: 0,
          kg: "",
          pendiente: ""
        }
      ],
      result: [],
      message: "",
      showError: false,
      showResult: false,
      token: "",
      refreshId: "",
      waiting: false,
      e1: 1
    };
  },
  methods: {
    addRecolector() {
      this.recolectores.push({
        id: this.recolectores[this.recolectores.length - 1].id + 1,
        num: 1,
        rendimiento: "",
        group: false
      });
    },
    deleteRecolector(id) {
      this.recolectores = this.recolectores.filter(item => item.id != id);
    },
    addLote() {
      this.lotes.push({
        id: this.lotes[this.lotes.length - 1].id + 1,
        kg: "",
        pendiente: ""
      });
    },
    deleteLote(id) {
      this.lotes = this.lotes.filter(item => item.id !== id);
    },
    assignValue(value) {
      this.lota = value
      this.showResult = true
    },
    calcular() {
      this.showError = false
      this.$validator.validate().then(valid => {
        if (valid) {
          const rendimientos = [];
          const pendientes = [];
          const kgs = [];

          for (
            let n_recolector = 0;
            n_recolector < this.recolectores.length;
            n_recolector++
          ) {
            const recolector = this.recolectores[n_recolector];

            for (let i = 0; i < recolector.num; i++) {
              rendimientos.push(Number(recolector.rendimiento));
            }
          }

          for (let n_lote = 0; n_lote < this.lotes.length; n_lote++) {
            const lote = this.lotes[n_lote];
            pendientes.push(lote.pendiente);
            kgs.push(lote.kg);
          }

          this.waiting = true
          eel.scheduler(rendimientos, pendientes, kgs)(res => {
            this.waiting = false
            this.result = res
            this.showResult = true
          })
          

          
        } else {
          this.e1 = 1;
        }
      });
    },
    
    /*checkScheduleStatus() {
      this.axios
        .get(`http://gaia.manizales.unal.edu.co:3200/v1/schedule/${this.token}`)
        .then(res => {
          if (res.data.status == "SUCCESS") {
            clearInterval(this.refreshId);
            if (res.data.schedule) {
              this.result = res.data.schedule;
              this.showResult = true;
            } else {
              this.message = res.data.message;
              this.showError = true;
            }
            this.waiting = false;
          }
        });
    }*/
  }
};
</script>

<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card color="white">
          <v-card-title>
            <span class="title">Ingrese la información de los lotes</span>
          </v-card-title>
          <v-container>
            <v-form>
              <div v-for="lote in lotes" :key="lote.num">
                <v-layout
                  :column="$vuetify.breakpoint.mdAndDown"
                  :row="!$vuetify.breakpoint.mdAndDown"
                >
                  <v-flex xs12 md4>
                    <v-text-field
                      label="Cafe maduro promedio"
                      v-model="lotes[lotes.indexOf(lote)]['coffeeAverage']"
                      v-validate.initi="'numeric|required'"
                      data-vv-as="Cafe maduro promedio"
                      :name="'lote'+lote.num"
                      :error-messages="errors.collect('lote'+lote.num)"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-radio-group
                      label="Pendiente de inclinación"
                      v-validate="'required'"
                      :name="'pendiente'+lote.num"
                      data-vv-as="Pendiente"
                      v-model="lotes[lotes.indexOf(lote)]['pendiente']"
                      :error-messages="errors.collect('pendiente'+lote.num)"
                    >
                      <v-radio label="mayor al 200%" :value="2"></v-radio>
                      <v-radio label="101% - 200%" :value="1"></v-radio>
                      <v-radio label="20% - 100%" :value="0"></v-radio>
                    </v-radio-group>
                  </v-flex>
                  <v-flex x1 class="pt-3">
                    <v-btn
                      v-if="lote.num != 0"
                      color="error"
                      v-on:click.native="() => removeLote(lote.num)"
                    >
                      <v-icon dark>delete</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </div>
              <v-layout
                :column="$vuetify.breakpoint.mdAndDown"
                :row="!$vuetify.breakpoint.mdAndDown"
              >
                <v-flex xs12 md4>
                  <v-btn color="warning" v-on:click.native="addLote">
                    Añadir lote
                    <v-icon dark right>add</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-layout
                :column="$vuetify.breakpoint.mdAndDown"
                :row="!$vuetify.breakpoint.mdAndDown"
              >
                <v-flex xs12 md4>
                  <v-text-field
                      label="% Disminución de horas laborales de acuerdo al clima"
                      v-model="weatherAverageLoss"
                      v-validate.initi="'numeric|required'"
                      data-vv-as="% Disminución de horas laborales de acuerdo al clima"
                      name="weatherAverageLoss"
                      :error-messages="errors.collect('weatherAverageLoss')"
                      required
                    ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout
                :column="$vuetify.breakpoint.mdAndDown"
                :row="!$vuetify.breakpoint.mdAndDown"
              >
                <v-flex xs12 md12>
                  <v-btn color="success" v-on:click.native="calculate">Calcular</v-btn>
                  <v-btn color="light" v-on:click.native="clean">Limpiar</v-btn>
                </v-flex>
              </v-layout>
            </v-form>
            <v-flex xs12 md4 v-if="showResult">
              <span>{{result}}</span>
            </v-flex>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "StaffCalculate",
  data: () => {
    return {
      lotes: [
        {
          num: 0,
          coffeeAverage: "",
          pendiente: ""
        }
      ],
      result: "",
      weatherAverageLoss: "",
      showResult: false
    };
  },
  methods: {
    addLote() {
      this.showResult = false;
      this.result = "";
      this.lotes.push({
        num: this.lotes[this.lotes.length - 1]["num"] + 1,
        coffeeAverage: "",
        pendiente: ""
      });
    },
    removeLote(num) {
      this.showResult = false;
      this.result = "";
      this.lotes = this.lotes.filter(item => item.num != num);
    },
    clean() {
      this.lotes = [
        {
          num: 0,
          coffeeAverage: "",
          pendiente: ""
        }
      ];
      this.coffeeAverage = "";
      this.showResult = false;
      this.result = "";
    },
    calculate() {
      let quantity = 0;
      let increaseForSlope = [3.4, 0.0, -2.25];
      this.$validator.validate().then(valid => {
        if (valid) {
          this.lotes.forEach(lote => {
            quantity +=
              Number(lote.coffeeAverage) /
              (13.67 + increaseForSlope[lote.pendiente]);
          });

          this.result = `Necesita ${Math.round(quantity / (40 * (1 - (this.weatherAverageLoss/100))))} personas`;
          this.showResult = true;
        }
      });
    }
  }
};
</script>

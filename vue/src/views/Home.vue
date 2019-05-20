<template>
  <v-container grid-list-md text-xs-center>
    <v-layout wrap :column="$vuetify.breakpoint.mdAndDown" :row="!$vuetify.breakpoint.mdAndDown">
      <v-flex xs4>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <h3 class="headline">Calcular la cantidad de personal necesario</h3>
              <span>Defina la cantidad de personal necesario para realizar la recolección del café maduro en una finca</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn to="/staffcalculate" flat dark>Empezar</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <h3 class="headline">Calcular el precio del café</h3>
              <span>Defina el precio que se debe pagar por un kilogramo de café recolectado en un lote y el costo de la recolección de café de una semana</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn to="/pricecalculate" flat dark>Empezar</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <h3 class="headline">Asignación de personal</h3>
              <span>Encuentre la asignación óptima de personal para la recolección de café maduro en una finca</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn to="/assignment" flat dark>Empezar</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "home"
};
</script>

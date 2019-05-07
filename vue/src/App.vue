<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>Café</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/" flat>Inicio</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view>
          <hello-world/>
        </router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "app"
};
</script>


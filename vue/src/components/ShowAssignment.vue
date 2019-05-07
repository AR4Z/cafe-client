<template>
  <v-data-table :headers="headers" :items="recolectores" class="elevation-1" :hide-actions="true">
    <template v-slot:items="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-center" v-for="lote in props.item.lotes" :key="lote.name">
          {{ lote.hours }} horas
      </td>
    </template>
  </v-data-table>
</template>
<script>
export default {
  name: "ShowAssignment",
  props: {
    recolectores: Array
  },
  computed: {
      headers () {
          const nameHeaders = [{
            text: 'Recolector / Lotes',
            align: 'center',
            sortable: false,
            value: 'name'
          }]
          for (let n_recolector =0;n_recolector <this.$props.recolectores[0].lotes.length; n_recolector++) {
              nameHeaders.push({text: `Lote ${n_recolector+1}`, sortable:false, name:`lote_${n_recolector+1}`, align: 'center'})
          }
          return nameHeaders;
      }
  }
};
</script>

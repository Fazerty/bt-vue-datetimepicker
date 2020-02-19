<template>
  <b-table
    borderless
    striped
    headless
    :items="decadesTable"
    :fields="cols"
    thead-class="thead-class"
    fixed
    small
  >
    <template v-slot:cell()="data">
      <b-button
        class="btn-xs"
        @click="selectDecade(data.value.decade)"
        :variant="data.value.currentDecade ? 'info' : 'secondary'"
      >{{ data.value.decade }}</b-button>
    </template>
  </b-table>
</template>
<script lang='ts'>
import DecadePicker from './decadePicker';
export default DecadePicker;
</script>


<style scoped lang="scss">
.btn-group-xs > .btn,
.btn-xs {
  padding: 0.4rem 0.25rem;
  font-size: 0.75rem;
  line-height: 0.4;
  border-radius: 0.2rem;
}
</style>
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
    <!-- Have to repeat the same thing for all years !?-->
      <template slot="Col1" slot-scope="data"><b-button class="btn-xs"  @click="selectDecade(data.value.decade)" :variant="data.value.currentDecade ? 'info' : 'secondary'">{{ data.value.decade }}</b-button></template>
      <template slot="Col2" slot-scope="data"><b-button class="btn-xs"  @click="selectDecade(data.value.decade)" :variant="data.value.currentDecade ? 'info' : 'secondary'">{{ data.value.decade }}</b-button></template>
      <template slot="Col3" slot-scope="data"><b-button class="btn-xs"  @click="selectDecade(data.value.decade)" :variant="data.value.currentDecade ? 'info' : 'secondary'">{{ data.value.decade }}</b-button></template>
      <template slot="Col4" slot-scope="data"><b-button class="btn-xs"  @click="selectDecade(data.value.decade)" :variant="data.value.currentDecade ? 'info' : 'secondary'">{{ data.value.decade }}</b-button></template>
      <template slot="Col5" slot-scope="data"><b-button class="btn-xs"  @click="selectDecade(data.value.decade)" :variant="data.value.currentDecade ? 'info' : 'secondary'">{{ data.value.decade }}</b-button></template>
  </b-table>
</template>
<script lang='ts'>
import DecadePicker from './decadePicker';
export default DecadePicker;
</script>


<style scoped lang="scss">
.btn-group-xs > .btn, .btn-xs {
  padding: .4rem .25rem;
  font-size: .750rem;
  line-height: .4;
  border-radius: .2rem;
}
</style>
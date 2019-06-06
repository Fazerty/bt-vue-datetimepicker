<template>
  <b-table
    borderless
    striped
    headless
    :items="centuriesTable"
    :fields="cols"
    thead-class="thead-class"
    fixed
    small
    >
    <!-- Have to repeat the same thing for all centurys !?-->
      <template slot="Col1" slot-scope="data"><b-button class="btn-xs"  @click="selectCentury(data.value.century)" :variant="data.value.currentCentury ? 'info' : 'secondary'">{{ data.value.century }}</b-button></template>
      <template slot="Col2" slot-scope="data"><b-button class="btn-xs"  @click="selectCentury(data.value.century)" :variant="data.value.currentCentury ? 'info' : 'secondary'">{{ data.value.century }}</b-button></template>
      <template slot="Col3" slot-scope="data"><b-button class="btn-xs"  @click="selectCentury(data.value.century)" :variant="data.value.currentCentury ? 'info' : 'secondary'">{{ data.value.century }}</b-button></template>
      <template slot="Col4" slot-scope="data"><b-button class="btn-xs"  @click="selectCentury(data.value.century)" :variant="data.value.currentCentury ? 'info' : 'secondary'">{{ data.value.century }}</b-button></template>
      <template slot="Col5" slot-scope="data"><b-button class="btn-xs"  @click="selectCentury(data.value.century)" :variant="data.value.currentCentury ? 'info' : 'secondary'">{{ data.value.century }}</b-button></template>
  </b-table>
</template>
<script lang='ts'>
import CenturyPicker from './centuryPicker';
export default CenturyPicker;
</script>


<style scoped lang="scss">
.btn-group-xs > .btn, .btn-xs {
  padding: .4rem .25rem;
  font-size: .750rem;
  line-height: .4;
  border-radius: .2rem;
}
</style>
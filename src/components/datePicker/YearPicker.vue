<template>
  <b-table
    borderless
    striped
    headless
    :items="yearsTable"
    :fields="cols"
    thead-class="thead-class"
    fixed
    small
    >
    <!-- Have to repeat the same thing for all years !?-->
      <template slot="Col1" slot-scope="data"><b-button class="btn-xs"  @click="selectYear(data.value.year)" :variant="data.value.currentYear ? 'info' : 'secondary'">{{ data.value.year }}</b-button></template>
      <template slot="Col2" slot-scope="data"><b-button class="btn-xs"  @click="selectYear(data.value.year)" :variant="data.value.currentYear ? 'info' : 'secondary'">{{ data.value.year }}</b-button></template>
      <template slot="Col3" slot-scope="data"><b-button class="btn-xs"  @click="selectYear(data.value.year)" :variant="data.value.currentYear ? 'info' : 'secondary'">{{ data.value.year }}</b-button></template>
      <template slot="Col4" slot-scope="data"><b-button class="btn-xs"  @click="selectYear(data.value.year)" :variant="data.value.currentYear ? 'info' : 'secondary'">{{ data.value.year }}</b-button></template>
      <template slot="Col5" slot-scope="data"><b-button class="btn-xs"  @click="selectYear(data.value.year)" :variant="data.value.currentYear ? 'info' : 'secondary'">{{ data.value.year }}</b-button></template>
  </b-table>
</template>
<script lang='ts'>
import YearPicker from './yearPicker';
export default YearPicker;
</script>


<style scoped lang="scss">
.btn-group-xs > .btn, .btn-xs {
  padding: .4rem .25rem;
  font-size: .750rem;
  line-height: .4;
  border-radius: .2rem;
}
</style>
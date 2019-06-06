<template>
  <b-table
    borderless
    striped
    headless
    :items="monthsTable"
    :fields="cols"
    thead-class="thead-class"
    fixed
    small
    >
    <!-- Have to repeat the same thing for all months !?-->
      <template slot="Col1" slot-scope="data"><b-button small @click="selectMonth(data.value.monthNumber)" :variant="data.value.currentMonth ? 'info' : 'secondary'">{{ data.value.month }}</b-button></template>
      <template slot="Col2" slot-scope="data"><b-button small @click="selectMonth(data.value.monthNumber)" :variant="data.value.currentMonth ? 'info' : 'secondary'">{{ data.value.month }}</b-button></template>
      <template slot="Col3" slot-scope="data"><b-button small @click="selectMonth(data.value.monthNumber)" :variant="data.value.currentMonth ? 'info' : 'secondary'">{{ data.value.month }}</b-button></template>
      <template slot="Col4" slot-scope="data"><b-button small @click="selectMonth(data.value.monthNumber)" :variant="data.value.currentMonth ? 'info' : 'secondary'">{{ data.value.month }}</b-button></template>
  </b-table>
</template>
<script lang='ts'>
import MonthPicker from './monthPicker';
export default MonthPicker;
</script>


<style lang="scss">
.thead-class {visibility: hidden;}
</style>
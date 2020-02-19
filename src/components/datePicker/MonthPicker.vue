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
    <template v-slot:cell()="data">
      <b-button
        small
        @click="selectMonth(data.value.monthNumber)"
        :variant="data.value.currentMonth ? 'info' : 'secondary'"
      >{{ data.value.month }}</b-button>
    </template>
  </b-table>
</template>
<script lang='ts'>
import MonthPicker from './monthPicker';
export default MonthPicker;
</script>


<style lang="scss">
.thead-class {
  visibility: hidden;
}
</style>
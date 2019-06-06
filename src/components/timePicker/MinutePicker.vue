<template>
  <b-table
    borderless
    striped
    headless
    :items="minutesTable"
    :fields="cols"
    thead-class="thead-class"
    fixed
    small
    >
    <!-- Have to repeat the same thing for all minutes !?-->
      <template slot="Col1" slot-scope="data"><b-button small  @click="selectMinute(data.value.minute)" :variant="data.value.currentMinute ? 'info' : 'secondary'">{{ data.value.minute }}</b-button></template>
      <template slot="Col2" slot-scope="data"><b-button small  @click="selectMinute(data.value.minute)" :variant="data.value.currentMinute ? 'info' : 'secondary'">{{ data.value.minute }}</b-button></template>
      <template slot="Col3" slot-scope="data"><b-button small  @click="selectMinute(data.value.minute)" :variant="data.value.currentMinute ? 'info' : 'secondary'">{{ data.value.minute }}</b-button></template>
      <template slot="Col4" slot-scope="data"><b-button small  @click="selectMinute(data.value.minute)" :variant="data.value.currentMinute ? 'info' : 'secondary'">{{ data.value.minute }}</b-button></template>
      <template slot="Col5" slot-scope="data"><b-button small  @click="selectMinute(data.value.minute)" :variant="data.value.currentMinute ? 'info' : 'secondary'">{{ data.value.minute }}</b-button></template>
  </b-table>
</template>
<script lang='ts'>
import MinutePicker from './minutePicker';
export default MinutePicker;
</script>


<style scoped lang="scss">
.btn-group-xs > .btn, .btn-xs {
  padding: .4rem .25rem;
  font-size: .750rem;
  line-height: .4;
  border-radius: .2rem;
}
</style>
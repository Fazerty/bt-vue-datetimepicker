<template>
  <b-table
    borderless
    striped
    headless
    :items="hoursTable"
    :fields="cols"
    thead-class="thead-class"
    fixed
    small
    >
    <!-- Have to repeat the same thing for all Hours !?-->
      <template slot="Col1" slot-scope="data"><b-button small  @click="selectHour(data.value.hour)" :variant="data.value.currentHour ? 'info' : 'secondary'">{{ data.value.hour }}</b-button></template>
      <template slot="Col2" slot-scope="data"><b-button small  @click="selectHour(data.value.hour)" :variant="data.value.currentHour ? 'info' : 'secondary'">{{ data.value.hour }}</b-button></template>
      <template slot="Col3" slot-scope="data"><b-button small  @click="selectHour(data.value.hour)" :variant="data.value.currentHour ? 'info' : 'secondary'">{{ data.value.hour }}</b-button></template>
      <template slot="Col4" slot-scope="data"><b-button small  @click="selectHour(data.value.hour)" :variant="data.value.currentHour ? 'info' : 'secondary'">{{ data.value.hour }}</b-button></template>
  </b-table>
</template>
<script lang='ts'>
import HourPicker from './hourPicker';
export default HourPicker;
</script>


<style scoped lang="scss">
.btn-group-xs > .btn, .btn-xs {
  padding: .4rem .25rem;
  font-size: .750rem;
  line-height: .4;
  border-radius: .2rem;
}
</style>
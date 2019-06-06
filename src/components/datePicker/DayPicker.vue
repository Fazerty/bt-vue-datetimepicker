<template>
  <b-table
    borderless
    striped
    :items="days"
    :fields="weekDays"
    fixed
    small
    >
    <!-- Have to repeat the same thing for all days !?-->
      <template :slot="weekDays[0]" slot-scope="data"><b-button class="btn-xs" @click="selectDay(data.value.date)" :variant="data.value.currentDay ? 'info' : (data.value.currentMonth ? 'outline-primary' : 'light')">{{ data.value.day }}</b-button></template>
      <template :slot="weekDays[1]" slot-scope="data"><b-button class="btn-xs" @click="selectDay(data.value.date)" :variant="data.value.currentDay ? 'info' : (data.value.currentMonth ? 'outline-primary' : 'light')">{{ data.value.day }}</b-button></template>
      <template :slot="weekDays[2]" slot-scope="data"><b-button class="btn-xs" @click="selectDay(data.value.date)" :variant="data.value.currentDay ? 'info' : (data.value.currentMonth ? 'outline-primary' : 'light')">{{ data.value.day }}</b-button></template>
      <template :slot="weekDays[3]" slot-scope="data"><b-button class="btn-xs" @click="selectDay(data.value.date)" :variant="data.value.currentDay ? 'info' : (data.value.currentMonth ? 'outline-primary' : 'light')">{{ data.value.day }}</b-button></template>
      <template :slot="weekDays[4]" slot-scope="data"><b-button class="btn-xs" @click="selectDay(data.value.date)" :variant="data.value.currentDay ? 'info' : (data.value.currentMonth ? 'outline-primary' : 'light')">{{ data.value.day }}</b-button></template>
      <template :slot="weekDays[5]" slot-scope="data"><b-button class="btn-xs" @click="selectDay(data.value.date)" :variant="data.value.currentDay ? 'info' : (data.value.currentMonth ? 'outline-primary' : 'light')">{{ data.value.day }}</b-button></template>
      <template :slot="weekDays[6]" slot-scope="data"><b-button class="btn-xs" @click="selectDay(data.value.date)" :variant="data.value.currentDay ? 'info' : (data.value.currentMonth ? 'outline-primary' : 'light')">{{ data.value.day }}</b-button></template>
  </b-table>
</template>
<script lang='ts'>
import DayPicker from './dayPicker';
export default DayPicker;
</script>


<style scoped lang="scss">
.btn-group-xs > .btn, .btn-xs {
  padding: .4rem .25rem;
  font-size: .750rem;
  line-height: .4;
  border-radius: .2rem;
}


</style>
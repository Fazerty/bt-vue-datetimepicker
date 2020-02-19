<template>
  <b-table borderless striped :items="days" :fields="weekDays" fixed small>
    <template v-slot:cell()="data">
      <b-button
        class="btn-xs"
        @click="selectDay(data.value.date)"
        :variant="data.value.currentDay ? 'info' : data.value.currentMonth ? 'outline-primary' : 'light'"
      >{{ data.value.day }}</b-button>
    </template>
  </b-table>
</template>
<script lang='ts'>
import DayPicker from './dayPicker';
export default DayPicker;
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
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
    <template v-slot:cell()="data">
      <b-button
        small
        @click="selectMinute(data.value.minute)"
        :variant="data.value.currentMinute ? 'info' : 'secondary'"
      >{{ data.value.minute }}</b-button>
    </template>
  </b-table>
</template>
<script lang='ts'>
import MinutePicker from './minutePicker';
export default MinutePicker;
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
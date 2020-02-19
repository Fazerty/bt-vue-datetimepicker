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
    <template v-slot:cell()="data">
      <b-button
        small
        @click="selectHour(data.value.hour)"
        :variant="data.value.currentHour ? 'info' : 'secondary'"
      >{{ data.value.hour }}</b-button>
    </template>
  </b-table>
</template>
<script lang='ts'>
import HourPicker from './hourPicker';
export default HourPicker;
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
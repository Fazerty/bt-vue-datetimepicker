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
    <template v-slot:cell()="data">
      <b-button
        class="btn-xs"
        @click="selectYear(data.value.year)"
        :variant="data.value.currentYear ? 'info' : 'secondary'"
      >{{ data.value.year }}</b-button>
    </template>
  </b-table>
</template>
<script lang='ts'>
import YearPicker from './yearPicker';
export default YearPicker;
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
<template>
  <b-table
    borderless
    striped
    headless
    :items="centuriesTable"
    :fields="cols"
    thead-class="thead-class"
    fixed
    small
  >
    <template v-slot:cell()="data">
      <b-button
        class="btn-xs"
        @click="selectCentury(data.value.century)"
        :variant="data.value.currentCentury ? 'info' : 'secondary'"
      >{{ data.value.century }}</b-button>
    </template>
  </b-table>
</template>
<script lang='ts'>
import CenturyPicker from './centuryPicker';
export default CenturyPicker;
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
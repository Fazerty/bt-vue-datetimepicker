<template>
  <b-container>
    <b-row>
      <b-col cols="2">
        <b-button
          size="sm"
          @click="pickerPrevious()"
          v-b-tooltip.hover
          :title="pickerPreviousButtonTooltip"
        >
          <font-awesome-icon icon="angle-left" variant="primary"/>
        </b-button>
      </b-col>
      <b-col cols="8">
        <b-button
          block
          size="sm"
          variant="outline-primary"
          @click="changePickerMode()"
          v-b-tooltip.hover
          :title="changeButtonTooltip"
        >{{changeButtonTitle}}</b-button>
      </b-col>
      <b-col cols="2">
        <b-button
          size="sm"
          @click="pickerNext()"
          v-b-tooltip.hover
          :title="pickerNextButtonTooltip"
        >
          <font-awesome-icon icon="angle-right" variant="primary"/>
        </b-button>
      </b-col>
    </b-row>
    <b-row align-v="center">
      <DayPicker
        :inputDate="date"
        :date="workDate"
        v-on:setDate="setDate"
        v-if="pickerMode === 'days'"
      ></DayPicker>
      <MonthPicker
        :inputDate="date"
        :date="workDate"
        v-on:setMonth="setMonth"
        v-if="pickerMode === 'months'"
      ></MonthPicker>
      <YearPicker
        :inputDate="date"
        :date="workDate"
        v-on:setYear="setYear"
        v-if="pickerMode === 'years'"
      ></YearPicker>
      <DecadePicker
        :inputDate="date"
        :date="workDate"
        v-on:setDecade="setDecade"
        v-if="pickerMode === 'decades'"
      ></DecadePicker>
      <CenturyPicker
        :inputDate="date"
        :date="workDate"
        v-on:setCentury="setCentury"
        v-if="pickerMode === 'centuries'"
      ></CenturyPicker>
    </b-row>
  </b-container>
</template>
<script lang='ts'>
import DatePicker from './datePicker';
export default DatePicker;
</script>


<style scoped lang="scss">
</style>
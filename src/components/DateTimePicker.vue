<template>
  <b-input-group class="mt-3">
    <b-form-input
    :id="id"
    :value="displayedValue"
    type="text"
    :placeholder="format"
    v-on:input="valueManuallyChanged"
    >
    </b-form-input>
    <b-input-group-append>
      <b-button @click="showDialog = !showDialog">
        <font-awesome-icon icon="calendar" class="menu-icon"/>
      </b-button>
    </b-input-group-append>

    <b-popover
      :class="'popoverDialog'"
      :target="id"
      :placement="placement"
      :triggers="triggers"
      :show.sync="showDialog"
    >
      <b-container class="popoverContent" :data-target="id">
        <b-row v-if="(showDatePicker || !timePickerProp) && datePickerProp">
          <b-col>
            <DatePicker v-on:setDateTime="setDateTime" :date="workValue" :texts="texts"></DatePicker>
          </b-col>
        </b-row>
        <b-row class="text-center" v-if="datePickerProp && showDatePicker && timePickerProp">
          <b-col>
            <b-button
              block
              size="sm"
              v-on:click="toogleDatePicker"
              variant="ligth"
              v-b-tooltip.hover
              :title="pickerTimeButtonTooltip"
            >
              <font-awesome-icon icon="clock" variant="primary"/>
            </b-button>
          </b-col>
        </b-row>

        <b-row class="text-center" v-if="datePickerProp && timePickerProp && !showDatePicker">
          <b-col class="popoverButton">
            <b-button
              block
              v-on:click="toogleDatePicker"
              variant="light"
              size="sm"
              v-b-tooltip.hover
              :title="pickerDateButtonTooltip"
            >
              <font-awesome-icon icon="calendar" variant="primary"/>
            </b-button>
          </b-col>
        </b-row>
        <b-row v-if="(!showDatePicker || !datePickerProp) && timePickerProp">
          <b-col>
            <TimePicker v-on:setDateTime="setDateTime" :time="workValue" :texts="texts" :use24Hours="use24Hours"></TimePicker>
          </b-col>
        </b-row>
      </b-container>
    </b-popover>
  </b-input-group>
</template>

<script lang='ts'>
import DateTimePicker from './dateTimePicker';
export default DateTimePicker;
</script>


<style lang="scss">
// The maximum width of the popover is hard coded by Bootstrap V4 CSS to 276px .
.popoverDialog {
    width: 276px;
}

.popoverContent {
    height: 300px;
}
</style>
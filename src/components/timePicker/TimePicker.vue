<template>
  <b-container fluid align-v="center">
    <div v-if="pickerMode === 'time'">
      <b-row>
        <b-col cols="12">
          <br>
        </b-col>
      </b-row>
      <b-row align-v="center">
        <b-col cols="3">
          <b-button
            size="sm"
            @click="nextHour()"
            variant="outline-info"
            :class="'noborder-button'"
            v-b-tooltip.hover
            :title="nextHourTooltip"
          >
            <font-awesome-icon icon="angle-up"/>
          </b-button>
        </b-col>
        <b-col cols="3"></b-col>
        <b-col cols="3">
          <b-button
            size="sm"
            @click="nextMinute()"
            variant="outline-info"
            :class="'noborder-button'"
            v-b-tooltip.hover
            :title="nextMinuteTooltip"
          >
            <font-awesome-icon icon="angle-up"/>
          </b-button>
        </b-col>
        <b-col cols="3"></b-col>
      </b-row>

      <b-row>
        <b-col cols="9">
          <hr>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="3">
          <b-button
            @click="pickerHours()"
            variant="outline-primary"
            v-b-tooltip.hover
            :title="pickerHourTooltip"
          >{{workHour}}</b-button>
        </b-col>
        <b-col cols="3">:</b-col>
        <b-col cols="3">
          <b-button
            @click="pickerMinutes()"
            variant="outline-primary"
            v-b-tooltip.hover
            :title="pickerMinuteTooltip"
          >{{workMinute}}</b-button>
        </b-col>
        <b-col cols="3" v-if="!use24Hours">
          <b-button
            @click="pickerAMPM()"
            variant="secondary"
            v-b-tooltip.hover
            :title="pickerAMPMTooltip"
          >{{workAMPM}}</b-button>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="9">
          <hr>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="3">
          <b-button
            size="sm"
            @click="previousHour()"
            variant="outline-info"
            :class="'noborder-button'"
            v-b-tooltip.hover
            :title="previousHourTooltip"
          >
            <font-awesome-icon icon="angle-down"/>
          </b-button>
        </b-col>
        <b-col cols="3"></b-col>
        <b-col cols="3">
          <b-button
            size="sm"
            @click="previousMinute()"
            variant="outline-info"
            :class="'noborder-button'"
            v-b-tooltip.hover
            :title="previousMinuteTooltip"
          >
            <font-awesome-icon icon="angle-down"/>
          </b-button>
        </b-col>
        <b-col cols="3"></b-col>
      </b-row>
    </div>
    <HourPicker
      :inputTime="time"
      :time="workTime"
      :use24Hours="use24Hours"
      v-on:setHour="setHour"
      v-if="pickerMode === 'hours'"
    ></HourPicker>
    <MinutePicker
      :inputTime="time"
      :time="workTime"
      v-on:setMinute="setMinute"
      v-if="pickerMode === 'minutes'"
    ></MinutePicker>
  </b-container>
</template>
<script lang='ts'>
import TimePicker from './timePicker';
export default TimePicker;
</script>


<style lang="scss">
.noborder-button {
    border: none;
}
</style>
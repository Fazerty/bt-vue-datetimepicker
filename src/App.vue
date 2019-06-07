<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-card>
          <b-card-header>Date time picker for bootstrap vue</b-card-header>
          <img alt="Vue logo" src="./assets/logo.png">
          <b-card-body>
            <b-form>
              <b-form-group
                label="Enter a date/time"
                description="Click on the calendar icon to open the date/time picker"
              >
                <DateTimePicker :value="value"/>
              </b-form-group>
            </b-form>
          </b-card-body>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DateTimePicker from "./components/DateTimePicker.vue";
import moment, { Moment } from "moment";

@Component({
  components: {
    DateTimePicker
  }
})
export default class App extends Vue {
  private value: Moment = moment();
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

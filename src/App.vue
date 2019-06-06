<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <DateTimePicker :value="value"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DateTimePicker from './components/DateTimePicker.vue';
import moment, { Moment } from 'moment';

@Component({
  components: {
    DateTimePicker,
  },
})
export default class App extends Vue {
  private value: Moment = moment();

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

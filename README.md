# bt-vue-datetimepicker

## Prototype version: don't use for production

A datetime picker component heavily inspired by\
 https://github.com/pingcheng/bootstrap4-datetimepicker/tree/master/src.\
It depends on bootstrap-vue https://github.com/bootstrap-vue/bootstrap-vue
and moment.js https://github.com/moment/moment/

Test it at https://portofolio.upurion.com/datetimepicker

Requirement:

**bootstrap vue:** See installation at https://bootstrap-vue.js.org/docs


## Installation

npm i --save bt-vue-datetimepicker\
npm i --save moment\
npm i --save @fortawesome/fontawesome-svg-core\
npm i --save @fortawesome/free-solid-svg-icons\
npm i --save @fortawesome/vue-fontawesome

The following examples are based on a project configured with [vue-cli](https://github.com/vuejs/vue-cli).

`src/main.js`

```javascript
import Vue from 'vue'
import App from './App'
import './plugins/bootstrap-vue'

/* -------- To add ----- */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faCalendar, faClock, faAngleLeft, faAngleRight, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faCalendar, faClock, faAngleLeft, faAngleRight, faAngleUp, faAngleDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)
/* -----------------------*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```

## Usage

### Recommended

`src/App.vue`

```vue
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <DateTimePicker :value="dateTime"></DateTimePicker>
  </div>
</template>

<script>
import DateTimePicker from 'bt-vue-datetimepicker'
import moment from 'moment'

export default {
  name: 'App',
  components: {
    HelloWorld, DateTimePicker
  },
  data() {
    return {
    dateTime:  new moment("20120520", "YYYYMMDD")
    }
  }
}
</script>
```
### Properties

**value:** moment\
**default:** moment()\
**info:** Value used by the date time picker

  **format:** string\
  **default:** 'DD-MM-YY HH:mm'\
  **info:** Format used to display the date/time in the input field.
  It's used also to parse the value entered in the input field
  See https://momentjs.com/docs/#/parsing/string-format/


  **placement:** string\
  **default:** 'bottom'\
  **info:** Positioning of the date time picker, relative to the target input date field.\
  **allowed values:** 'auto', 'top', 'bottom', 'left', 'right', 'topleft', 'topright',
   'bottomleft', 'bottomright', 'lefttop', 'leftbottom', 'righttop', 'rightbottom'

  **use24Hours:** boolean\
  **info:** In the time picker, if true, uses the 24 hours format, if false, uses the am/pm format\

  **datePicker:** boolean\
  **info:** Defines if the picker use the date picker

  **timePicker:** boolean\
  **info:** Defines if the picker use the time picker
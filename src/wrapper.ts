// Import vue component
import Vue from 'vue';
import DateTimePicker from './components/DateTimePicker.vue';
// import BootstrapVue from 'bootstrap-vue';

// Vue.use(BootstrapVue);

// Declare install function executed by Vue.use()
export function install(Vue: Vue) {
  if ((install as any).installed) { return; }
  (install as any).installed = true;
  (Vue as any).component('bt-vue-datetimepicker', DateTimePicker);
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = (window as any).Vue;
} // else if (typeof global !== 'undefined') { GlobalVue = global.Vue;}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default DateTimePicker;

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

window.$ = require('jquery');
window.JQuery = require('jquery');
require("bootstrap");

new Vue({
  render: h => h(App),
}).$mount('#app');

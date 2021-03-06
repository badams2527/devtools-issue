// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'

import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'

Vue.config.productionTip = false

Vue.use(GridInstaller)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

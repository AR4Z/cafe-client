import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VeeValidate, { Validator } from 'vee-validate';
import es from 'vee-validate/dist/locale/es';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueCurrencyFilter from 'vue-currency-filter'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VeeValidate)
Vue.use(VueCurrencyFilter, {
  symbol: '$',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true
})
Vue.use(VueAxios, axios)
Validator.localize('es', es)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


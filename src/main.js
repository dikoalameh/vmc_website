import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '/public/css/vmc-custom.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faChevronRight,
  faEnvelope,
  faGreaterThan,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add( faPhoneAlt, faEnvelope, faGreaterThan, faChevronRight, faBars )

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

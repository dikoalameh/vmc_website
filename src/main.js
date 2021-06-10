import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '/public/css/vmc-custom.css'
import OwlCarousel from 'v-owl-carousel'
import Vuelidate from 'vuelidate'

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faChevronRight,
  faEnvelope,
  faGreaterThan,
  faHandHoldingHeart,
  faHandshake,
  faPhoneAlt,
  faThumbsUp,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add( faPhoneAlt,
    faEnvelope,
    faGreaterThan,
    faChevronRight,
    faBars,
    faThumbsUp,
    faHandHoldingHeart,
    faHandshake,
    faChevronLeft,
    faFacebookF)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
Vue.component('carousel', OwlCarousel)
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

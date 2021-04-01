import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Page404 from '../views/Page404.vue'
import About from '../views/About';
import TheCompany from '../components/about-us/TheCompany';
import OrganizationalChart from '../components/about-us/OrganizationalChart';
import OurPrincipals from '../components/about-us/OurPrincipals';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/',
    name: 'About',
    component: About,
    children: [
      {
        path: 'company',
        name: 'TheCompany',
        component: TheCompany
      },
      {
        path: 'organization',
        name: 'OrganizationalChart',
        component: OrganizationalChart
      },
      {
        path: 'principal',
        name: 'OurPrincipals',
        component: OurPrincipals
      },
      ]
  },
  {
    path: '*',
    name: 'Page404',
    component: Page404
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

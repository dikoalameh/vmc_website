import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Page404 from '../views/Page404.vue'
import About from '../views/About';
import Contact from '../views/Contact';
import TheCompany from '../components/about-us/TheCompany';
import OrganizationalChart from '../components/about-us/OrganizationalChart';
import OurPrincipals from '../components/about-us/OurPrincipals';
import ContactUs from '../components/contact-us/ContactUs';
import News from '../views/News';
import AllNews from '../components/news/AllNews';
import CarryingAFamilyLegacyTowardGrowthStability from '../components/news/CarryingAFamilyLegacyTowardGrowthStability';
import SeafaringOrganizationUnderProposedOFWDeptPushed from '../components/news/SeafaringOrganizationUnderProposedOFWDeptPushed';
import ModernDayHeroesInTheNewNormal from '../components/news/ModernDayHeroesInTheNewNormal';
import Programs from '../views/Programs';
import CSRActivities from '../components/programs/CSRActivities';
import OfficePrograms from '../components/programs/OfficePrograms';
import Allottees from '../components/programs/Allottees';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/vmc'
  },
  {
    path: '/vmc',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/',
    name: 'About',
    component: About,
    redirect: '/about/company',
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
    path: '/news/',
    name: 'News',
    component: News,
    redirect: '/news/all',
    children: [
      {
        path: 'all',
        name: 'AllNews',
        component: AllNews
      },
      {
        path: '1',
        name: 'CarryingAFamilyLegacyTowardGrowthStability',
        component: CarryingAFamilyLegacyTowardGrowthStability
      },
      {
        path: '2',
        name: 'SeafaringOrganizationUnderProposedOFWDeptPushed',
        component: SeafaringOrganizationUnderProposedOFWDeptPushed
      },
      {
        path: '3',
        name: 'ModernDayHeroesInTheNewNormal',
        component: ModernDayHeroesInTheNewNormal
      },
    ]
  },
  {
    path: '/programs/',
    name: 'Programs',
    component: Programs,
    redirect: '/programs/csr',
    children: [
      {
        path: 'csr',
        name: 'CSRActivities',
        component: CSRActivities
      },
      {
        path: 'office',
        name: 'OfficePrograms',
        component: OfficePrograms
      },
      {
        path: 'allottees',
        name: 'Allottees',
        component: Allottees
      },
    ]
  },
  {
    path: '/contact/',
    name: 'Contact',
    component: Contact,
    redirect: '/contact/us',
    children: [
      {
        path: 'us',
        name: 'ContactUs',
        component: ContactUs
      },
    ]
  },
  {
    path: '/*',
    name: 'Page404',
    component: Page404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

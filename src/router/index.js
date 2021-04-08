import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About';
// import News from '../views/News';
// import Programs from '../views/Programs';
// import Crew from '../views/Crew';
// import Schedules from '../views/Schedules';
// import Career from '../views/Career';
// import Contact from '../views/Contact';
// import Page404 from '../views/Page404.vue'
import TheCompany from '../components/about-us/TheCompany';
import OrganizationalChart from '../components/about-us/OrganizationalChart';
import OurPrincipals from '../components/about-us/OurPrincipals';
import ContactUs from '../components/contact-us/ContactUs';
import AllNews from '../components/news/AllNews';
import CarryingAFamilyLegacyTowardGrowthStability from '../components/news/CarryingAFamilyLegacyTowardGrowthStability';
import SeafaringOrganizationUnderProposedOFWDeptPushed from '../components/news/SeafaringOrganizationUnderProposedOFWDeptPushed';
import ModernDayHeroesInTheNewNormal from '../components/news/ModernDayHeroesInTheNewNormal';
import CSRActivities from '../components/programs/CSRActivities';
import OfficePrograms from '../components/programs/OfficePrograms';
import Allottees from '../components/programs/Allottees';
import KlineMESPProgram from '../components/crew/KlineMESPProgram';
import KlineMEPlusBridgingPrograms
  from '../components/crew/KlineMEPlusBridgingPrograms';
import VeritasCadets from '../components/crew/VeritasCadets';
import InHouseTraining from '../components/crew/InHouseTraining';
import TrainingPrograms from '../components/crew/TrainingPrograms';
import SchedulesOfVMC from '../components/schedules/SchedulesOfVMC';
import CareersInVMC from '../components/career/CareersInVMC';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // component: About,
    component: () => import(/* webpackChunkName: "about" */ "../views/About"),
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
    path: '/news',
    name: 'News',
    // component: News,
    component: () => import(/* webpackChunkName: "news" */ "../views/News"),
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
    path: '/programs',
    name: 'Programs',
    // component: Programs,
    component: () => import(/* webpackChunkName: "programs" */ "../views/Programs"),
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
    path: '/crew',
    name: 'Crew',
    // component: Crew,
    component: () => import(/* webpackChunkName: "crew" */ "../views/Crew"),
    redirect: '/crew/mesp',
    children: [
      {
        path: 'mesp',
        name: 'KlineMESPProgram',
        component: KlineMESPProgram
      },
      {
        path: 'meplus',
        name: 'KlineMEPlusBridgingPrograms',
        component: KlineMEPlusBridgingPrograms
      },
      {
        path: 'cadets',
        name: 'VeritasCadets',
        component: VeritasCadets
      },
      {
        path: 'inhouse',
        name: 'InHouseTraining',
        component: InHouseTraining
      },
      {
        path: 'training',
        name: 'TrainingPrograms',
        component: TrainingPrograms
      },
    ]
  },
  {
    path: '/schedule',
    name: 'Schedules',
    // component: Schedules,
    component: () => import(/* webpackChunkName: "schedule" */ "../views/Schedules"),
    redirect: '/schedule/all',
    children: [
      {
        path: 'all',
        name: 'SchedulesOfVMC',
        component: SchedulesOfVMC
      },
    ]
  },
  {
    path: '/career',
    name: 'Career',
    // component: Career,
    component: () => import(/* webpackChunkName: "career" */ "../views/Career"),
    redirect: '/career/all',
    children: [
      {
        path: 'all',
        name: 'CareersInVMC',
        component: CareersInVMC
      },
    ]
  },
  {
    path: '/contact',
    name: 'Contact',
    // component: Contact,
    component: () => import(/* webpackChunkName: "contact" */ "../views/Contact"),
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
    // component: Page404
    component: () => import(/* webpackChunkName: "404" */ "../views/Page404.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

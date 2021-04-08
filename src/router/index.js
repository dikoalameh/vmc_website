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
import Crew from '../views/Crew';
import KlineMESPProgram from '../components/crew/KlineMESPProgram';
import KlineMEPlusBridgingPrograms
  from '../components/crew/KlineMEPlusBridgingPrograms';
import VeritasCadets from '../components/crew/VeritasCadets';
import InHouseTraining from '../components/crew/InHouseTraining';
import TrainingPrograms from '../components/crew/TrainingPrograms';
import Schedules from '../views/Schedules';
import SchedulesOfVMC from '../components/schedules/SchedulesOfVMC';
import Career from '../views/Career';
import CareersInVMC from '../components/career/CareersInVMC';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // redirect: '/vmc'
  },
  // {
  //   path: '/vmc',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
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
    path: '/news',
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
    path: '/programs',
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
    path: '/crew',
    name: 'Crew',
    component: Crew,
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
    component: Schedules,
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
    component: Career,
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

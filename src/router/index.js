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
import OurPrincipals from '../components/about-us/OurPrincipals';
import AllNews from '../components/news/AllNews';
import CarryingAFamilyLegacyTowardGrowthStability from '../components/news/articles/CarryingAFamilyLegacyTowardGrowthStability';
import SeafaringOrganizationUnderProposedOFWDeptPushed from '../components/news/articles/SeafaringOrganizationUnderProposedOFWDeptPushed';
import SeafarersHeroesOfPandemic from '../components/news/articles/SeafarersHeroesOfPandemic';
import CSRActivities from '../components/programs/company/CSRActivities';
import OfficePrograms from '../components/programs/company/OfficePrograms';
import Allottees from '../components/programs/company/Allottees';
import VeritasCadets from '../components/programs/crew/VeritasCadets';
import TrainingPrograms from '../components/programs/crew/TrainingPrograms';
import SchedulesOfVMC from '../components/schedules/SchedulesOfVMC';
import CareersInVMC from '../components/career/CareersInVMC';
import Veritas30thAnniversarySameDayEditVideo
  from '../components/news/articles/Veritas30thAnniversarySameDayEditVideo';
import VeritasChristmasVideo2020
  from '../components/news/articles/VeritasChristmasVideo2020';
import CompanyNews from '../components/news/CompanyNews';
import CrewNews from '../components/news/CrewNews';
import GovernmentAdvisories from '../components/news/GovernmentAdvisories';
// import PrincipalMemo from '../components/news/PrincipalMemo';
import CookiePolicy from '../components/CookiePolicy';
// import Covid19Update from '../components/news/Covid19Update';
import RetiredCrewVirtualAwardingCeremony
  from '../components/news/articles/RetiredCrewVirtualAwardingCeremony';
import ContactUsNew from '../components/contact-us/ContactUsNew';
import CrewVeritasStory from '../components/news/articles/CrewVeritasStory';
import BoqTnkcHouseInspection
  from '../components/news/articles/BoqTnkcHouseInspection';
import JoiningCrewBritainBay2020
  from '../components/news/articles/JoiningCrewBritainBay2020';
import NewNormalOffice2020
  from '../components/news/articles/NewNormalOffice2020';
import TnkcHouseSwabTest from '../components/news/articles/TnkcHouseSwabTest';
import TeodoroLocsinMessageDaySeafarer25June2021
  from '../components/news/articles/TeodoroLocsinMessageDaySeafarer25June2021';
import MyPersonalExperiencePenelopeLumanog
  from '../components/news/articles/MyPersonalExperiencePenelopeLumanog';
import SeamansWifeInsights
  from '../components/news/articles/SeamansWifeInsights';
import HealthWealthSummit2021
  from '../components/news/articles/HealthWealthSummit2021';
import HidilynDiazWeightliftingTokyo2020
  from '../components/news/articles/HidilynDiazWeightliftingTokyo2020';
import SaludoToAllOurAthletesTokyo2020
  from '../components/news/articles/SaludoToAllOurAthletesTokyo2020';
import HealthWealthSummitOct2021
  from '../components/news/articles/HealthWealthSummitOct2021';
import MarinaTwgVaccinationSchedules
  from '../components/news/articles/MarinaTwgVaccinationSchedules';
import MarinaIndustrySponsoredCadets2021
  from '../components/news/articles/MarinaIndustrySponsoredCadets2021';
import AllotteesBacolodIloiloPanay2021Gathering
  from '../components/news/articles/AllotteesBacolodIloiloPanay2021Gathering';
import AllotteesCebuBoholBicolcdoDavaoMm2021
  from '../components/news/articles/AllotteesCebuBoholBicolcdoDavaoMm2021';
import AWomanLikeNoOther2022 from "@/components/news/articles/AWomanLikeNoOther2022";
import MLCCertifiedAndISOCertified from "@/components/news/articles/MLCCertifiedAndISOCertified";
import CovidCasesMay16To22 from "@/components/news/articles/CovidCasesMay16To22";
import VMC33rdAnniversary from "@/components/news/articles/VMC33rdAnniversary";
import CovidCasesJul11To172022 from "@/components/news/articles/CovidCasesJul11To172022";
import VoyageToOurLifeHeritage2022 from "@/components/news/articles/VoyageToOurLifeHeritage2022";
import VmcCrewFamilyParty2024CebuBohol from "@/components/news/articles/VmcCrewFamilyParty2024CebuBohol.vue";
import VmcCrewFamilyParty2024IloiloBacolod from "@/components/news/articles/VmcCrewFamilyParty2024IloiloBacolod.vue";
import VmcStaffXmasParty2023 from "@/components/news/articles/VmcStaffXmasParty2023.vue";
import VmcCrewFamilyParty2023 from "@/components/news/articles/VmcCrewFamilyParty2023.vue";
import Vmc35Anniversary2024 from "@/components/news/articles/Vmc35Anniversary2024.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/home'
  },
  {
    path: '/home',
    // name: 'Home',
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
        path: 'company',
        name: 'CompanyNews',
        component: CompanyNews
      },
      {
        path: 'crew',
        name: 'CrewNews',
        component: CrewNews
      },
      {
        path: 'advisories',
        name: 'GovernmentAdvisories',
        component: GovernmentAdvisories
      },
      // {
      //   path: 'memo',
      //   name: 'PrincipalMemo',
      //   component: PrincipalMemo
      // },
      // {
      //   path: 'covid-19',
      //   name: 'Covid19Update',
      //   component: Covid19Update
      // },
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
        name: 'SeafarersHeroesOfPandemic',
        component: SeafarersHeroesOfPandemic
      },
      {
        path: '4',
        name: 'Veritas30thAnniversarySameDayEditVideo',
        component: Veritas30thAnniversarySameDayEditVideo
      },
      {
        path: '5',
        name: 'VeritasChristmasVideo2020',
        component: VeritasChristmasVideo2020
      },
      {
        path: '6',
        name: 'RetiredCrewVirtualAwardingCeremony',
        component: RetiredCrewVirtualAwardingCeremony
      },
      {
        path: '7',
        name: 'CrewVeritasStory',
        component: CrewVeritasStory
      },
      {
        path: '8',
        name: 'BoqTnkcHouseInspection',
        component: BoqTnkcHouseInspection
      },
      {
        path: '9',
        name: 'JoiningCrewBritainBay2020',
        component: JoiningCrewBritainBay2020
      },
      {
        path: '10',
        name: 'NewNormalOffice2020',
        component: NewNormalOffice2020
      },
      {
        path: '11',
        name: 'TnkcHouseSwabTest',
        component: TnkcHouseSwabTest
      },
      {
        path: '12',
        name: 'TeodoroLocsinMessageDaySeafarer25June2021',
        component: TeodoroLocsinMessageDaySeafarer25June2021
      },
      {
        path: '13',
        name: 'MyPersonalExperiencePenelopeLumanog',
        component: MyPersonalExperiencePenelopeLumanog
      },
      {
        path: '14',
        name: 'SeamansWifeInsights',
        component: SeamansWifeInsights
      },
      {
        path: '15',
        name: 'HealthWealthSummit2021',
        component: HealthWealthSummit2021
      },
      {
        path: '16',
        name: 'HidilynDiazWeightliftingTokyo2020',
        component: HidilynDiazWeightliftingTokyo2020
      },
      {
        path: '17',
        name: 'SaludoToAllOurAthletesTokyo2020',
        component: SaludoToAllOurAthletesTokyo2020
      },
      {
        path: '18',
        name: 'HealthWealthSummitOct2021',
        component: HealthWealthSummitOct2021
      },
      {
        path: '19',
        name: 'MarinaTwgVaccinationSchedules',
        component: MarinaTwgVaccinationSchedules
      },
      {
        path: '20',
        name: 'MarinaIndustrySponsoredCadets2021',
        component: MarinaIndustrySponsoredCadets2021
      },
      {
        path: '21',
        name: 'AllotteesBacolodIloiloPanay2021Gathering',
        component: AllotteesBacolodIloiloPanay2021Gathering
      },
      {
        path: '22',
        name: 'AllotteesCebuBoholBicolcdoDavaoMm2021',
        component: AllotteesCebuBoholBicolcdoDavaoMm2021
      },
      {
        path: '23',
        name: 'AWomanLikeNoOther2022',
        component: AWomanLikeNoOther2022
      },
      {
        path: '24',
        name: 'MLCCertifiedAndISOCertified',
        component: MLCCertifiedAndISOCertified
      },
      {
        path: '25',
        name: 'CovidCasesMay16To22',
        component: CovidCasesMay16To22
      },
      {
        path: '26',
        name: 'VMC33rdAnniversary',
        component: VMC33rdAnniversary
      },
      {
        path: '27',
        name: 'CovidCasesJul11To172022',
        component: CovidCasesJul11To172022
      },
      {
        path: '28',
        name: 'VoyageToOurLifeHeritage2022',
        component: VoyageToOurLifeHeritage2022
      },
      {
        path: '29',
        name: 'VmcCrewFamilyParty2024CebuBohol',
        component: VmcCrewFamilyParty2024CebuBohol
      },
      {
        path: '30',
        name: 'VmcCrewFamilyParty2024IloiloBacolod',
        component: VmcCrewFamilyParty2024IloiloBacolod
      },
      {
        path: '31',
        name: 'VmcStaffXmasParty2023',
        component: VmcStaffXmasParty2023
      },
      {
        path: '32',
        name: 'VmcCrewFamilyParty2023',
        component: VmcCrewFamilyParty2023
      },
      {
        path: '32',
        name: 'VmcCrewFamilyParty2023',
        component: VmcCrewFamilyParty2023
      },
      {
        path: '33',
        name: 'Vmc35Anniversary2024',
        component: Vmc35Anniversary2024
      },
    ]
  },
  {
    path: '/programs',
    name: 'Programs',
    // component: Programs,
    component: () => import(/* webpackChunkName: "programs" */ "../views/Programs"),
    redirect: '/programs/company/csr',
    children: [
      {
        path: 'company',
        name: 'Company',
        // component: Company,
        component: () => import(/* webpackChunkName: "programs" */ "../views/Company"),
        redirect: '/programs/company/csr',
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
        path: 'crew',
        name: 'Crew',
        // component: Crew,
        component: () => import(/* webpackChunkName: "crew" */ "../views/Crew"),
        redirect: '/programs/crew/cadets',
        children: [
          {
            path: 'cadets',
            name: 'VeritasCadets',
            component: VeritasCadets
          },
          {
            path: 'training',
            name: 'TrainingPrograms',
            component: TrainingPrograms
          },
        ]
      },
    ],
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
      // {
      //   path: 'us',
      //   name: 'ContactUs',
      //   component: ContactUs
      // },
      {
        path: 'us',
        name: 'ContactUsNew',
        component: ContactUsNew
      },
    ]
  },
  {
    path: '/policy',
    name: 'Policies',
    // component: Contact,
    component: () => import(/* webpackChunkName: "contact" */ "../views/Policies"),
    redirect: '/policy/cookies',
    children: [
      {
        path: 'cookies',
        name: 'CookiePolicy',
        component: CookiePolicy
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

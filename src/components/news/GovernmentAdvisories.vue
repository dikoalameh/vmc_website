<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Government Advisories
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news19" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">MARINA TWG Vaccination Schedules</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — December 06, 2021
                    </p>
                    <p class="d-none d-lg-block"></p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'MarinaTwgVaccinationSchedules'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news12" alt="">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">MESSAGE of H.E. TEODORO L. LOCSIN, JR. Secretary of Foreign Affairs on the Day of the Seafarer 25 June 2021</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      Embassy of the Republic of the Philippines — June 25, 2021
                    </p>
                    <p class="d-none d-lg-block">The Department of Foreign Affairs is honored to celebrate the Day of the Seafarer. </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'TeodoroLocsinMessageDaySeafarer25June2021'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news2" alt="">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">Seafaring organization under proposed OFW dept pushed</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By The Manila Times — March 10, 2021
                    </p>
                    <p class="d-none d-lg-block">With the Senate trying to rush the enactment of the new law creating the Department of Overseas Filipino Workers, the country’s biggest umbrella group in the manning sector has strongly lobbied for a dedicated organization for the seafaring sector </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'SeafaringOrganizationUnderProposedOFWDeptPushed'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1 vmc-bg-img-repeat"
         :style="{ backgroundImage: 'url('+affiliateTexture+')' }">
      <government-affiliations />
    </div>
  </div>
</template>

<script>
import GovernmentAffiliations from './app-layout/GovernmentAffiliations';

export default {
  name: 'GovernmentAdvisories',
  components: {
    'government-affiliations': GovernmentAffiliations,
  },
  data() {
    return {
      'news2': require(`@/assets/news/news_10-03-2021.jpg`),
      'news12': require(`@/assets/news/TeodoroLocsinMessage_home.jpg`),
      'news19': require(`@/assets/news/2021/vaccinesched/area1_thumbnail_061221.jpg`)
    }
  }
};
</script>

<style scoped>

</style>

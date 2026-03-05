<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Governemnt Advisories
            </h2>
          </div>
        </div>

        <div v-for="article in governmentAdvisoriesList" :key="article.id" class="row">
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                
                <div class="col-md-5">
                  <img class="card-img" 
                      :src="article.image || require('@/assets/no_image.jpg')" 
                      alt="News Image"
                      style="object-fit: cover; height: 100%; min-height: 250px;">
                  </div>

                <div class="col-md-7">
                  <div class="card-body">
                    
                    <div class="font font-weight-normal mb-1">
                    <h4 class="title-clamp">{{ article.title }}</h4> <!-- Title for Government Advisories -->
                    </div>  

                    <div class="letter-spacing-1">
                    <p class="author-date-clamp">
                      By {{ article.author }} — {{ article.date }} <!-- Date and author -->
                    </p>
                    </div>

                    <div class="d-none d-lg-block">
                      <p class="news-clamp"> {{ article.content }}</p> <!-- Content -->
                    </div>

                    <router-link class="vmc-text-primary-2" :to="'/news/' + article.id">continue reading . . .</router-link> <!-- Link to full article -->

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div v-if="governmentAdvisoriesList.length === 0" class="row mt-5">
          <div class="col-12 text-center">
            <p class="text-muted">No Government Advisories available at the moment.</p> <!-- appears when there are no government advisories articles -->
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { cmsMixin } from '@/mixins/cmsMixin';

export default {
  name: 'GovernmentAdvisories', // <--- 1. Change Name
  mixins: [cmsMixin],
  computed: {
    governmentAdvisoriesList() {
      // Safety check
      if (!this.cms.newsArticles) return [];
      
      return this.cms.newsArticles
        .filter(article => article.category === 'Government Advisories') // 1. Filter
        .sort((a, b) => new Date(b.date) - new Date(a.date));            // 2. Sort Newest First
    }
  }
};
</script>

<style scoped>
/* Keeping your exact style requirements */
.news-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 5; /* Limits text to specified amount of lines so cards stay neat */
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 10px;
}

.author-date-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 1; /* Limits text to specified amount of lines so cards stay neat */
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 10px;
  color: #85a8c7;
}

.title-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limits text to specified number lines. Change this number to fit perfectly. */
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 10px;
}

.vmc-py-big { padding-top: 80px; padding-bottom: 80px; }
.vmc-text-primary { color: #002366; }
.vmc-text-primary-2 { color: #85a8c7; }

</style>

<!-- <template>
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
                  <img class="card-img" :src="news34" alt="Government Advisories">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">MARINA MISMO V2</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — May 04, 2025
                    </p>
                    <p class="d-none d-lg-block">
                      The target date to launch the version 2 (V2) will be on 01May2025. In V2, all details will be viewed before submitting and users need to make sure that SIRB Stamp and Sea Service has same data.
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'MarinaMismoV22025'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news34" alt="Government Advisories">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">JAPAN VISA APPLICATION</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — May 04, 2025
                    </p>
                    <p class="d-none d-lg-block">
                      Japan Embassy announced the opening of Japan Visa Application Centre (JVAC) to accept and issue visa applications. The Japan Visa Centre by VFS Service Philippines, Inc. is scheduled to begin its operation on 07 April 2025.                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'JapanVisaApplicationAnnouncement2025'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news34" alt="Government Advisories">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">NEW ZEALAND ELECTRONIC TRAVEL AUTHORITY (NZeTA)</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — May 04, 2025
                    </p>
                    <p class="d-none d-lg-block">
                      Effective 01 April 2025, the NZeTA will be required for present onboard crew vessels calling New Zealand.
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'NewZealandElectronicTravelAuthority2025'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="row">
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news27" alt="Covid Cases">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">New Cases From July 11 to July 17</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — July 19, 2022
                    </p>
                    <p class="d-none d-lg-block"></p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'CovidCasesJul11To172022'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news25" alt="Covid Cases">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">New Cases From May 16 to May 22</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — May 27, 2022
                    </p>
                    <p class="d-none d-lg-block"></p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'CovidCasesMay16To22'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
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
      'news19': require(`@/assets/news/2021/vaccinesched/area1_thumbnail_061221.jpg`),
      'news25': require(`@/assets/news/2022/may/covid_cases_27522R.jpg`),
      'news27': require(`@/assets/news/2022/jul/covidCaseJul11to17-2022.jpg`),
      'news34': require(`@/assets/news/govt_advisory_template.jpg`)
    }
  }
};
</script>

<style scoped>

</style> -->

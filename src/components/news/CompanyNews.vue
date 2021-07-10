<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Company News
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news13" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">My Personal Experience with Veritas Maritime Corporation</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — July 10, 2021
                    </p>
                    <p class="d-none d-lg-block">
                      I, Penelope L. Lumanog graduated on December 2019 at Centro Escolar University and looked for a job in various platforms such as jobstreet. I have applied to a lot of companies and went on interviews, but what really picked my interest and attention was the Veritas Maritime Corporation.
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'MyPersonalExperiencePenelopeLumanog'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news5" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">Veritas Christmas Video 2020</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — December 25, 2020
                    </p>
                    <p class="d-none d-lg-block">
                      The talented and hardworking staff of Veritas made a video tribute for the Christmas season to remind us that we are one family facing this pandemic.
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'VeritasChristmasVideo2020'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news8" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">BOQ TNKC House Inspection 2020</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — July 8, 2021
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'BoqTnkcHouseInspection'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news9" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">TNKC House Swab Test 2020</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — July 8, 2021
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'TnkcHouseSwabTest'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news10" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">Joining Crew 2020</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — July 8, 2021
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'JoiningCrewBritainBay2020'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news11" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">New Normal Office 2020</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — July 8, 2021
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'NewNormalOffice2020'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news1" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">Carrying a family legacy toward growth, stability</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Yashika F. Torib — July 17, 2019
                    </p>
                    <p class="d-none d-lg-block">One of the country’s pioneers in the maritime manning sector, Veritas Maritime Corp. welcomed on July 11 its new leader, Francis Jerome “Jiro” Marquez, to family, friends and colleagues.</p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'CarryingAFamilyLegacyTowardGrowthStability'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news4" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">Veritas 30th Anniversary Same Day Edit Video</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — July 11, 2019
                    </p>
                    <p class="d-none d-lg-block">
                      Same day video shoot and edit for the 30th-anniversary celebration of Veritas.
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'Veritas30thAnniversarySameDayEditVideo'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyNews',
  data() {
    return {
      'news1': require(`@/assets/news/news_17-06-2019.jpg`),
      'news4': require(`@/assets/news/news_28-04-2021-30thAnniversary.jpg`),
      'news5': require(`@/assets/news/news_28-04-2021-XmasParty.jpg`),
      'news8': require(`@/assets/news/2020/tnkcinspection/boqinspect1_7-8-2021.jpg`),
      'news9': require(`@/assets/news/2020/tnkcswabtest/swab1_7-8-2021.jpg`),
      'news10': require(`@/assets/news/2020/joiningcrew/crew1_7-8-2021.jpg`),
      'news11': require(`@/assets/news/2020/newnormaloffice/office1_7-8-2021.jpg`),
      'news13': require(`@/assets/news/newsStaff_7-10-2021.jpg`)
    }
  }
};
</script>

<style scoped>

</style>

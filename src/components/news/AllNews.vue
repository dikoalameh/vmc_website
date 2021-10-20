<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              All News
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news18" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">Health and Wealth Summit Oct 2021</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — October 20, 2021
                    </p>
                    <p class="d-none d-lg-block"></p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'HealthWealthSummitOct2021'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news17" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">SALUDO To All Our Athletes!</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — August 08, 2021
                    </p>
                    <p class="d-none d-lg-block"></p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'SaludoToAllOurAthletesTokyo2020'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news16" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">Congratulations, Hidilyn Diaz! Saludo kami sayo.</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — July 28, 2021
                    </p>
                    <p class="d-none d-lg-block"></p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'HidilynDiazWeightliftingTokyo2020'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news14" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">Seamans Wife Insights</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — July 10, 2021
                    </p>
                    <p class="d-none d-lg-block">
                      As a wife of a seafarer, it is not an easy job or task simply because there is a lot of challenges that I encounter in our daily life.
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'SeamansWifeInsights'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  <img class="card-img" :src="news15" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">Health and Wealth Summit</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — July 7, 2021
                    </p>
                    <p class="d-none d-lg-block"></p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'HealthWealthSummit2021'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news7" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">VMC Crew Experience / Story</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — July 6, 2021
                    </p>
                    <p class="d-none d-lg-block">
                      During this hard time of pandemic, we cannot think more other than our health. It has been everyone's priority since the Covid-19 outbreak started.                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'CrewVeritasStory'}">continue reading . . .</router-link>
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
                  <img class="card-img" :src="news6" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">Retired Crew Virtual Awarding Ceremony</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — May 27, 2021
                    </p>
                    <p class="d-none d-lg-block">
                      On May 27, 2021, 15 - 31 service years crew in Veritas Maritime Corporation held a retired crew virtual awarding ceremony via zoom.
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'RetiredCrewVirtualAwardingCeremony'}">continue reading . . .</router-link>
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
                  <img class="card-img" :src="news3" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">Seafarers, Heroes of the Pandemic as Shipping Plays Vital Role in Crisis</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — November 12, 2020
                    </p>
                    <p class="d-none d-lg-block">
                      The global shipping industry has played a vital role in the global response to the COVID-19 pandemic, and demand for its services has limited the annual decline in maritime trade volumes to around 4.1 per cent in 2020, the UN Conference on Trade and Development (UNCTAD) said in its annual report on the shipping industry on Thursday.
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'SeafarersHeroesOfPandemic'}">continue reading . . .</router-link>
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
  name: "AllNews",
  data() {
    return {
      'news1': require(`@/assets/news/news_17-06-2019.jpg`),
      'news2': require(`@/assets/news/news_10-03-2021.jpg`),
      'news3': require(`@/assets/news/SeafarersHeroes_home.jpg`),
      'news4': require(`@/assets/news/news_28-04-2021-30thAnniversary.jpg`),
      'news5': require(`@/assets/news/news_28-04-2021-XmasParty.jpg`),
      'news6': require(`@/assets/keyvisuals/retirees_63021.jpg`),
      'news7': require(`@/assets/news/2014E015_covid_7-6-2021.jpg`),
      'news8': require(`@/assets/news/2020/tnkcinspection/boqinspect1_7-8-2021.jpg`),
      'news9': require(`@/assets/news/2020/tnkcswabtest/swab1_7-8-2021.jpg`),
      'news10': require(`@/assets/news/2020/joiningcrew/crew1_7-8-2021.jpg`),
      'news11': require(`@/assets/news/2020/newnormaloffice/office1_7-8-2021.jpg`),
      'news12': require(`@/assets/news/TeodoroLocsinMessage_home.jpg`),
      'news13': require(`@/assets/news/newsStaff_7-10-2021.jpg`),
      'news14': require(`@/assets/news/tagaveritasako_7-9-2021.jpg`),
      'news15': require(`@/assets/programs/csr/2021/healthwealth/health2_7-9-2021.jpg`),
      'news16': require(`@/assets/news/weightlifting_07-28-2021.jpg`),
      'news17': require(`@/assets/news/medalist_cv_tokyo2020-08_08_2021.jpg`),
      'news18': require(`@/assets/programs/office/2021/healthwealth/health1_18-10-2021.jpg`)
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
             Crew Updates
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news21" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">Veritas Allotees Year End Gathering for Bacolod/Iloilo Panay Island Group</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — November 25, 2021
                    </p>
                    <p class="d-none d-lg-block">
                      SAVE THE DATE! 🥳🎉
                      You are invited to the Veritas Allotees Year End Gathering for Bacolod/Iloilo Panay Island Group on December 4, 2021 at 1-4pm.

                      Registration is a must! Please click on this link to register:
                      <a href="https://forms.gle/dPkMNhFoCbJBZDEZA" target="_blank">https://forms.gle/dPkMNhFoCbJBZDEZA</a>
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'AllotteesBacolodIloiloPanay2021Gathering'}">continue reading . . .</router-link>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CrewNews',
  data() {
    return {
      'news3': require(`@/assets/news/SeafarersHeroes_home.jpg`),
      'news6': require(`@/assets/keyvisuals/retirees_63021.jpg`),
      'news7': require(`@/assets/news/2014E015_covid_7-6-2021.jpg`),
      'news13': require(`@/assets/news/tagaveritasako_7-9-2021.jpg`),
      'news21': require(`@/assets/programs/allottees/2021/2021AllotteeVisayas.jpg`)
    }
  }
};
</script>

<style scoped>

</style>

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
                    <h4 class="font-weight-normal mb-1">Modern Day Heroes in the New Normal</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — March 31, 2021
                    </p>
                    <p class="d-none d-lg-block">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'ModernDayHeroesInTheNewNormal'}">continue reading . . .</router-link>
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
      'news3': require(`@/assets/news/news_31-03-2021.jpg`),
      'news6': require(`@/assets/keyvisuals/retirees_63021.jpg`),
      'news7': require(`@/assets/news/2014E015_covid_7-6-2021.jpg`)
    }
  }
};
</script>

<style scoped>

</style>

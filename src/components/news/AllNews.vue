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
                  <img class="card-img" :src="news5" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">Veritas Christmas Video 2020</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — April 28, 2021
                    </p>
                    <p class="d-none d-lg-block">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
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
                  <img class="card-img" :src="news4" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">Veritas 30th Anniversary Same Day Edit Video</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — April 28, 2021
                    </p>
                    <p class="d-none d-lg-block">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'Veritas30thAnniversarySameDayEditVideo'}">continue reading . . .</router-link>
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
      'news3': require(`@/assets/news/news_31-03-2021.jpg`),
      'news4': require(`@/assets/news/news_28-04-2021-30thAnniversary.jpg`),
      'news5': require(`@/assets/news/news_28-04-2021-XmasParty.jpg`),
    }
  }
}
</script>

<style scoped>

</style>

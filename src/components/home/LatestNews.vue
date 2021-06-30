<template>
  <div class="container-fluid vmc-bg-dark-1 vmc-py-big">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-md-4 mb-sm-2">
          <h2 class="h1 vmc-text-primary d-flex align-items-center justify-content-center vmc-heading">Latest News
            <router-link :to="{name: 'AllNews'}"
                         class="btn btn-lg vmc-btn-circle vmc-btn-prime-2 px-4 py-1 see-all-button">
              SEE ALL NEWS
            </router-link>
          </h2>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium">
            <img class="card-img-top" :src="newsContainer6" alt="Card image cap">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px; overflow-y: hidden">
                <h4 class="card-title" style="height: 56px; overflow: hidden">Retired Crew Virtual Awarding Ceremony</h4>
                <p>
                  On May 27, 2021, 15 - 31 service years crew in Veritas Maritime Corporation held a retired crew virtual awarding ceremony via zoom.
                </p>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">27 May 2021</p>
              <router-link :to="{name: 'RetiredCrewVirtualAwardingCeremony'}" class="stretched-link"></router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium">
            <img class="card-img-top" :src="newsContainer3" alt="Card image cap">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px; overflow-y: hidden">
                <h4 class="card-title" style="height: 56px; overflow: hidden">Modern Day Heroes in the New Normal</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">31 March 2021</p>
              <router-link :to="{name: 'ModernDayHeroesInTheNewNormal'}" class="stretched-link"></router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium">
            <img class="card-img-top" :src="newsContainer1" alt="Card image cap">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px; overflow-y: hidden">
                <h4 class="card-title">Seafaring organization under proposed OFW Department pushed</h4>
                <p>With the Senate trying to rush the enactment of the new law creating the Department of Overseas Filipino Workers, he country’s biggest umbrella group in the</p>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">10 March 2021</p>
              <router-link :to="{name: 'SeafaringOrganizationUnderProposedOFWDeptPushed'}" class="stretched-link"></router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium">
            <img class="card-img-top" :src="newsContainer5" alt="Card image cap">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px; overflow-y: hidden">
                <h4 class="card-title">Veritas Christmas Video 2020</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">25 December 2020</p>
              <router-link :to="{name: 'VeritasChristmasVideo2020'}" class="stretched-link"></router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium">
            <img class="card-img-top" :src="newsContainer2" alt="Card image cap">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px; overflow-y: hidden">
                <h4 class="card-title">Carrying a family legacy toward growth, stability</h4>
                <p>One of the country’s pioneers in the maritime manning sector, Veritas Maritime Corp. welcomed on July 11 its new leader, Francis Jerome “Jiro” Marquez, to family, friends and colleagues.</p>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">17 July 2019</p>
              <router-link :to="{name: 'CarryingAFamilyLegacyTowardGrowthStability'}" class="stretched-link"></router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium">
            <img class="card-img-top" :src="newsContainer4" alt="Card image cap">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px; overflow-y: hidden">
                <h4 class="card-title" style="height: 56px; overflow: hidden">Veritas 30th Anniversary Same Day Edit Video</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">11 July 2019</p>
              <router-link :to="{name: 'Veritas30thAnniversarySameDayEditVideo'}" class="stretched-link"></router-link>
            </div>
          </div>
        </div>
<!--        <div class="col-lg-4 col-md-6 my-3">-->
<!--          <div class="card shadow border-0 news-card rounded-medium">-->
<!--            <img class="card-img-top" :src="newsContainer1" alt="Card image cap">-->
<!--            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">-->
<!--              <div style="height: 200px; overflow-y: hidden">-->
<!--                <h4 class="card-title">Seafaring organization under proposed OFW Department pushed</h4>-->
<!--                <p>With the Senate trying to rush the enactment of the new law creating the Department of Overseas Filipino Workers, he country’s biggest umbrella group in the</p>-->
<!--              </div>-->
<!--              <p class="mb-0 mt-3" style="opacity: 50%">10 March 2021</p>-->
<!--              <router-link :to="{name: 'SeafaringOrganizationUnderProposedOFWDeptPushed'}" class="stretched-link"></router-link>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "LatestNews",
  data() {
    return {
      'newsContainer1': require(`@/assets/news/news_10-03-2021.jpg`),
      'newsContainer2': require(`@/assets/news/news_17-06-2019.jpg`),
      'newsContainer3': require(`@/assets/news/news_31-03-2021.jpg`),
      'newsContainer4': require(`@/assets/news/news_28-04-2021-30thAnniversary.jpg`),
      'newsContainer5': require(`@/assets/news/news_28-04-2021-XmasParty.jpg`),
      'newsContainer6': require(`@/assets/keyvisuals/retirees_63021.jpg`),
    }
  }
}
</script>

<style scoped>
.news-card {
  transition: all .2s ease-in-out;
}
.news-card:hover {
  transform: scale(1.025);
}
.see-all-button {
  margin-left: -185px;
  position: absolute;
  top: -3rem;
  right: 1rem;
}
.card-img-top {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  height: 250px;
  /*width: auto;*/
}
@media (min-width: 768px) {
  .see-all-button {
    margin-left: -185px;
    position: absolute;
    top: .55rem;
    right: 1rem;
  }
}
</style>

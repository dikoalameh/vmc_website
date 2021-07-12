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
                <h4 class="card-title" style="height: 56px; overflow: hidden">Health and Wealth Summit</h4>
                <p></p>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">07 July 2021</p>
              <router-link :to="{name: 'HealthWealthSummit2021'}" class="stretched-link"></router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium">
            <img class="card-img-top" :src="newsContainer3" alt="Card image cap">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px; overflow-y: hidden">
                <h4 class="card-title" style="height: 56px; overflow: hidden">VMC Crew Experience / Story</h4>
                <p>
                  During this hard time of pandemic, we cannot think more other than our health. It has been everyone's priority since the Covid-19 outbreak started.
                </p>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">06 July 2021</p>
              <router-link :to="{name: 'CrewVeritasStory'}" class="stretched-link"></router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium">
            <img class="card-img-top" :src="newsContainer5" alt="Card image cap">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px; overflow-y: hidden">
                <h4 class="card-title">MESSAGE of H.E. TEODORO L. LOCSIN, JR. Secretary of Foreign Affairs on the Day of the Seafarer 25 June 2021</h4>
                <p>
                  The Department of Foreign Affairs is honored to celebrate the Day of the Seafarer.
                </p>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">25 June 2021</p>
              <router-link :to="{name: 'TeodoroLocsinMessageDaySeafarer25June2021'}" class="stretched-link"></router-link>
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
            <img class="card-img-top" :src="newsContainer4" alt="Card image cap">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px; overflow-y: hidden">
                <h4 class="card-title" style="height: 56px; overflow: hidden">Seafarers, Heroes of the Pandemic as Shipping Plays Vital Role in Crisis</h4>
                <p>
                  The global shipping industry has played a vital role in the global response to the COVID-19 pandemic, and demand for its services has limited the annual decline in maritime trade volumes to around 4.1 ...
                </p>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">12 November 2020</p>
              <router-link :to="{name: 'SeafarersHeroesOfPandemic'}" class="stretched-link"></router-link>
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
      'newsContainer3': require(`@/assets/news/2014E015_covid_7-6-2021.jpg`),
      'newsContainer4': require(`@/assets/news/SeafarersHeroes_home.jpg`),
      'newsContainer5': require(`@/assets/news/TeodoroLocsinMessage_home.jpg`),
      'newsContainer6': require(`@/assets/programs/csr/2021/healthwealth/health2_7-9-2021.jpg`)
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

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
          <div class="card shadow border-0 news-card rounded-medium py-2 px-1" style="height: 530px">
            <div id="fb-root"></div>
            <div class="fb-page d-flex justify-content-center" data-href="https://www.facebook.com/VeritasMaritimeCorporation"
                 data-tabs="timeline" data-width="" data-height="" data-small-header="true"
                 data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
              <blockquote cite="https://www.facebook.com/VeritasMaritimeCorporation"
                          class="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/VeritasMaritimeCorporation">Veritas Maritime Corporation</a>
              </blockquote>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium">
            <img class="card-img-top" :src="newsContainer6" alt="Card image cap">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px; overflow-y: hidden">
                <h4 class="card-title" style="height: 86px; overflow: hidden">2022 VERITAS Staff Business Writing Seminar</h4>
                <p></p>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">04 October 2022</p>
              <router-link :to="{name: 'OfficePrograms'}" class="stretched-link"></router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium">
            <img class="card-img-top" :src="newsContainer4" alt="Card image cap">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px; overflow-y: hidden">
                <h4 class="card-title" style="height: 56px; overflow: hidden">Allottees Medical Mission & Humanitarian Assistance</h4>
                <p></p>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">04 October 2022</p>
              <router-link :to="{name: 'Allottees'}" class="stretched-link"></router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium">
            <img class="card-img-top" :src="newsContainer3" alt="Card image cap">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px; overflow-y: hidden">
                <h4 class="card-title" style="height: 56px; overflow: hidden">Coastal Cleanup</h4>
                <p></p>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">04 October 2022</p>
              <router-link :to="{name: 'CSRActivities'}" class="stretched-link"></router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium">
            <img class="card-img-top" :src="newsContainer1" alt="Card image cap">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px; overflow-y: hidden">
                <h4 class="card-title" style="height: 56px; overflow: hidden">VOYAGE TO OUR LIFE HERITAGE</h4>
                <p>Mr. Agustin “Jun” Casten Gagajena, Jr., is the youngest of four children of Major Agustin Gagajena, Sr and Norma Casten Gagajena.</p>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">28 Jul 2022</p>
              <router-link :to="{name: 'VoyageToOurLifeHeritage2022'}" class="stretched-link"></router-link>
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
      'newsContainer1': require(`@/assets/news/2022/jul/VoyageLifetimeHeritage/Picture2.jpg`),
      'newsContainer2': require(`@/assets/news/news_17-06-2019.jpg`),
      'newsContainer3': require(`@/assets/programs/csr/2022/cleanup/coastCleanUp_041022_A.jpg`),
      'newsContainer4': require(`@/assets/programs/allottees/2022/medmission/medMission_041022_A.jpg`),
      'newsContainer5': require(`@/assets/news/2022/jul/covidCaseJul11to17-2022.jpg`),
      'newsContainer6': require(`@/assets/programs/office/2022/seminar/writingSeminar_041022_A.jpg`)
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

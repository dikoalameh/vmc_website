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
            <img class="card-img-top px-5" :src="newsContainer5" alt="Card image cap">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px; overflow-y: hidden">
                <h4 class="card-title">New Cases From July 11 to July 17</h4>
                <p>14, 640</p>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">19 Jul 2022</p>
              <router-link :to="{name: 'CovidCasesJul11To172022'}" class="stretched-link"></router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium">
            <img class="card-img-top" :src="newsContainer6" alt="Card image cap">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px; overflow-y: hidden">
                <h4 class="card-title" style="height: 86px; overflow: hidden">Veritas Maritime Corporation 33rd Anniversary</h4>
                <p>Congratulations VERITAS for another fruitful year! 33 years and stronger!</p>
                <p></p>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">12 July 2022</p>
              <router-link :to="{name: 'VMC33rdAnniversary'}" class="stretched-link"></router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium">
            <img class="card-img-top" :src="newsContainer4" alt="Card image cap">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px; overflow-y: hidden">
                <h4 class="card-title" style="height: 56px; overflow: hidden">QMS-2022-010 MLC Certified and ISO Certified</h4>
                <p>
                  QMS-2022-010 Congratulations Veritas Family for being MLC Certified and ISO Certified
                </p>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">20 May 2022</p>
              <router-link :to="{name: 'MLCCertifiedAndISOCertified'}" class="stretched-link"></router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium">
            <img class="card-img-top" :src="newsContainer3" alt="Card image cap">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px; overflow-y: hidden">
                <h4 class="card-title" style="height: 56px; overflow: hidden">A Woman Like No Other</h4>
                <p>
                  Miss Naty… a woman like no other, who dedicated 31 years of her life at Veritas Maritime Corporation, and still actively mentoring the next generation of
                  leaders, extending her motherly love to all the office staff
                </p>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">08 May 2022</p>
              <router-link :to="{name: 'AWomanLikeNoOther2022'}" class="stretched-link"></router-link>
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
      'newsContainer3': require(`@/assets/news/2022WomanLikeNoOther.jpg`),
      'newsContainer4': require(`@/assets/news/2022/may/mlcisocert_52022-thumbnail.jpg`),
      'newsContainer5': require(`@/assets/news/2022/jul/covidCaseJul11to17-2022.jpg`),
      'newsContainer6': require(`@/assets/news/2022/jul/33rd_anniversary_0714-A.jpg`)
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

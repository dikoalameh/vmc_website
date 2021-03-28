<template>
  <div class="container-fluid vmc-bg-dark-1 vmc-py-big">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-md-4 mb-sm-2">
          <h2 class="h1 vmc-text-primary d-flex align-items-center justify-content-center" style="font-size: 50px">Latest News
            <button class="btn btn-lg vmc-btn-circle vmc-btn-prime-2 px-4 py-1 see-all-button">SEE ALL NEWS</button>
          </h2>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium">
            <img class="card-img-top" :src="newsContainer1" alt="Card image cap"
                 style="border-top-left-radius: inherit; border-top-right-radius: inherit; height: 250px">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px">
                <h4 class="card-title">Seafaring organization under proposed OFW Department pushed</h4>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">10 March 2021</p>
              <a href="https://www.manilatimes.net/2021/03/10/business/maritime-business/seafaring-organization-under-proposed-ofw-dept-pushed/"
                 target="_blank" class="stretched-link"></a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium">
            <img class="card-img-top" :src="newsContainer2" alt="Card image cap"
                 style="border-top-left-radius: inherit; border-top-right-radius: inherit; height: 250px">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px">
                <h4 class="card-title">LIST OF Training Centers offering STCW'95</h4>
                <p>( Manila Amendment ) Training Courses</p>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">01 January 2021</p>
              <a href="https://www.veritas.com.ph/Pdf/New%20Courses%20for%20COC%20Requirements.pdf"
                 target="_blank" class="stretched-link"></a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium">
            <img class="card-img-top" :src="newsContainer3" alt="Card image cap"
                 style="border-top-left-radius: inherit; border-top-right-radius: inherit; height: 250px">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px; overflow-y: hidden">
                <h4 class="card-title" style="height: 56px; overflow: hidden">LIST OF MLC Training Center (Deck & Engine)</h4>
                <p>
                  New Management Level Course for Marine DECK Officers
                  (Masters and Chief Officers) MLC-DECK
                  In Accordance with 2010 Manila Amendments to the 1978 STCW Convention
                </p>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">01 March 2021</p>
              <a href="https://www.veritas.com.ph/Pdf/MLC%20Training%20Center.pdf"
                 target="_blank" class="stretched-link"></a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium">
            <img class="card-img-top" :src="newsContainer1" alt="Card image cap"
                 style="border-top-left-radius: inherit; border-top-right-radius: inherit; height: 250px">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px">
                <h4 class="card-title">Seafaring organization under proposed OFW Department pushed</h4>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">10 March 2021</p>
              <a href="https://www.manilatimes.net/2021/03/10/business/maritime-business/seafaring-organization-under-proposed-ofw-dept-pushed/"
                 target="_blank" class="stretched-link"></a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium">
            <img class="card-img-top" :src="newsContainer2" alt="Card image cap"
                 style="border-top-left-radius: inherit; border-top-right-radius: inherit; height: 250px">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px">
                <h4 class="card-title">LIST OF Training Centers offering STCW'95</h4>
                <p>( Manila Amendment ) Training Courses</p>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">01 January 2021</p>
              <a href="https://www.veritas.com.ph/Pdf/New%20Courses%20for%20COC%20Requirements.pdf"
                 target="_blank" class="stretched-link"></a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium">
            <img class="card-img-top" :src="newsContainer3" alt="Card image cap"
                 style="border-top-left-radius: inherit; border-top-right-radius: inherit; height: 250px">
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="height: 200px; overflow-y: hidden">
                <h4 class="card-title" style="height: 56px; overflow: hidden">LIST OF MLC Training Center (Deck & Engine)</h4>
                <p>
                  New Management Level Course for Marine DECK Officers
                  (Masters and Chief Officers) MLC-DECK
                  In Accordance with 2010 Manila Amendments to the 1978 STCW Convention
                </p>
              </div>
              <p class="mb-0 mt-3" style="opacity: 50%">01 March 2021</p>
              <a href="https://www.veritas.com.ph/Pdf/MLC%20Training%20Center.pdf"
                 target="_blank" class="stretched-link"></a>
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
      'newsContainer1': require(`@/assets/vessel_floor.jpg`),
      'newsContainer2': require(`@/assets/vessel_kline_wide.jpg`),
      'newsContainer3': require(`@/assets/vessel_new_century.jpg`),
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
@media (min-width: 768px) {
  .see-all-button {
    margin-left: -185px;
    position: absolute;
    top: .55rem;
    right: 1rem;
  }
}
</style>
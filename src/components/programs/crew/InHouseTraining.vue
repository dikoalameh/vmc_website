<template>
  <div class="vmc-cadets">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              In House Training
            </h2>
          </div>
          <div class="col-md-3 my-3">
            <img :src="upgrading1" alt="">
          </div>
          <div class="col-md-9">
            <h4 class="font-weight-light">Upgrading Seminars</h4>
            <ul>
              <li>Enhances and corrects noted performance / deficiencies of ex-crew in compliance with revised STCW and ISM / SEP requirements.</li>
              <li>Determines training needs by identifying a training gap and indicates the knowledge and skills required to perform the jobs.</li>
              <li>Identifying the training requirements resulting from the assessment of training needs.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-3 order-md-10 my-3">
            <img :src="promotion1" alt="">
          </div>
          <div class="col-md-9  order-md-0">
            <h4 class="font-weight-light">Promotion Trainings</h4>
            <p>It is aimed in molding and developing the crew into becoming qualified and competent officers and crew in the performance of new functions as required for the next rank</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-3 my-3">
            <img :src="otherTraining1" alt="">
          </div>
          <div class="col-md-9">
            <h4 class="font-weight-light">Other In-House Trainings</h4>
            <div class="row">
              <div class="col-md-6">
                <ul class="mb-0">
                  <li>ISM SEP</li>
                  <li>"K" Line Roro Bulk Ship Management Co., Ltd. (KRBS) Safety Mgt. System</li>
                  <li>Ship Handling & Maneuvering</li>
                  <li>Cargo Handling and Stowage</li>
                  <li>"K" Line Roro Bulk Ship Management Co., Ltd. (KRBS) Safety Mgt. System,</li>
                  <li>Maritime Law</li>
                  <li>Deck Watchkeeping</li>
                  <li>Ship Handling & Maneuvering</li>
                  <li>Navigation</li>
                  <li>Meteorology</li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul>
                  <li>Deck Stability and Trim</li>
                  <li>Ship Handling & Maneuvering</li>
                  <li>General Seamanship</li>
                  <li>Collision Regulations</li>
                  <li>Practical Engineering</li>
                  <li>Engine Room Machinery & Equipment</li>
                  <li>Engine Watchkeeping</li>
                  <li>Engine Engine Room Simulation</li>
                  <li>Engine Emergency and Safety</li>
                </ul>
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
  name: "InHouseTraining",
  data() {
    return {
      'upgrading1': require(`@/assets/crews/inhouseSeminar1.jpg`),
      'promotion1': require(`@/assets/crews/promotionTraining1.jpg`),
      'otherTraining1': require(`@/assets/crews/otherInHouse2.jpg`),
    }
  }
}
</script>

<style scoped>

</style>

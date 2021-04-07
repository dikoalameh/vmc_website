<template>
  <div class="csr-activities">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              CSR Activities
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light mb-3">Outside Veritas Activities</h4>
          </div>

          <div class="col-md-4 col-sm-6">
            <img :src="specialChildrenXmasParty" alt="">
            <p class="vmc-text-primary-2 letter-spacing-1 mt-1 text-center">Christmas Party for Special Children</p>
          </div>
          <div class="col-md-4 col-sm-6">
            <img :src="bakingLesson" alt="">
            <p class="vmc-text-primary-2 letter-spacing-1 mt-1 text-center">Baking Lesson September 18, 2014</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light mb-3">Vessel Send Off Party</h4>
          </div>
          <div class="col-md-4 col-sm-6">
            <img :src="loyaltyAwardee1" alt="">
            <p class="vmc-text-primary-2 letter-spacing-1 mt-1 text-center">Loyalty Awardee</p>
          </div>
          <div class="col-md-4 col-sm-6">
            <img :src="cadetsTeambuilding1" alt="">
            <p class="vmc-text-primary-2 letter-spacing-1 mt-1 text-center">Cadets Teambuilding</p>
          </div>
          <div class="col-md-4 col-sm-6">
            <img :src="horizonHighway1" alt="">
            <p class="vmc-text-primary-2 letter-spacing-1 mt-1 text-center">Send-Off Ceremony M/V Horizon Highway</p>
          </div>
          <div class="col-md-4 col-sm-6">
            <img :src="capeHayatomo1" alt="">
            <p class="vmc-text-primary-2 letter-spacing-1 mt-1 text-center">Send-Off Ceremony M/V Cape Hayatomo</p>
          </div>
          <div class="col-md-4 col-sm-6">
            <img :src="shiningBliss1" alt="">
            <p class="vmc-text-primary-2 letter-spacing-1 mt-1 text-center">Send-Off Ceremony M/V Shining Bliss</p>
          </div>
          <div class="col-md-4 col-sm-6">
            <img :src="coronaUtility1" alt="">
            <p class="vmc-text-primary-2 letter-spacing-1 mt-1 text-center">Send-Off Ceremony M/V Corona Utility</p>
          </div>
          <div class="col-md-4 col-sm-6">
            <img :src="driveGreen1" alt="">
            <p class="vmc-text-primary-2 letter-spacing-1 mt-1 text-center">Send-Off Ceremony M/V Drive Green</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CSRActivities',
  data() {
    return {
      'specialChildrenXmasParty': require(`@/assets/programs/csr/SpecialChildrenXMasParty_2014.jpg`),
      'bakingLesson': require(`@/assets/programs/csr/bakingLesson.jpg`),
      'loyaltyAwardee1': require(`@/assets/programs/csr/2014-Loyalty-Awardee_18.jpg`),
      'horizonHighway1': require(`@/assets/programs/csr/2017_horizon.jpg`),
      'capeHayatomo1': require(`@/assets/programs/csr/2017_hayatomo.jpg`),
      'shiningBliss1': require(`@/assets/programs/csr/shining_bliss.jpg`),
      'coronaUtility1': require(`@/assets/programs/csr/corona_utility.jpg`),
      'driveGreen1': require(`@/assets/programs/csr/drive_green.jpg`),
      'cadetsTeambuilding1': require(`@/assets/programs/csr/cadets_teambuilding.jpg`),
    }
  }
};
</script>

<style scoped>
.img-gallery {
  width: 360px;
}
</style>
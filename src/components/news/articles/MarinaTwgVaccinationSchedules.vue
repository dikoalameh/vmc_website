<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              MARINA TWG Vaccination Schedules
            </h2>
            <p class="vmc-text-primary-2 letter-spacing-1 mb-0">
              By Veritas Admin — October 21, 2021
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 my-3">
            <p>Please be informed of the new vaccination schedule this month. Kindly refer to the enclosed info graphics.</p>
            <p class="mb-0">
              <a href="ttps://seafarers-covac.marina.gov.ph/seafarers/marina.php" target="_blank" >
                https://seafarers-covac.marina.gov.ph/seafarers/marina.php
              </a>
            </p>
            <p class="mb-0">
              <a href="https://amosup.upnextware.com/" target="_blank" >
                https://amosup.upnextware.com/
              </a>
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4 my-2" v-for="participant in participants" v-bind:key="participant">
            <img :src="participant" alt="" class="border">
          </div>
        </div>

        <div class="row">
          <div class="col-12 text-center">
            <a href="https://www.facebook.com/VeritasMaritimeCorporation/posts/176142124693290"
               target="_blank" class="mb-0 mt-3 vmc-text-primary-2" style="opacity: 75%">
              See Original Post: https://www.facebook.com/VeritasMaritimeCorporation/posts/176142124693290
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarinaTwgVaccinationSchedules',
  data() {
    return {
      participants: [
        require(`@/assets/news/2021/vaccinesched/area1_211021.jpg`),
        require(`@/assets/news/2021/vaccinesched/area2_211021.jpg`),
        require(`@/assets/news/2021/vaccinesched/area3_211021.jpg`),
        require(`@/assets/news/2021/vaccinesched/area4_211021.jpg`),
        require(`@/assets/news/2021/vaccinesched/area5_211021.jpg`),
        require(`@/assets/news/2021/vaccinesched/area6_211021.jpg`),
        require(`@/assets/news/2021/vaccinesched/area7_211021.jpg`),
        require(`@/assets/news/2021/vaccinesched/area8_211021.jpg`)
      ]
    }
  }
};
</script>

<style scoped>

</style>

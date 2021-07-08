<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              TNKC House Swab Test 2020
            </h2>
            <p class="vmc-text-primary-2 letter-spacing-1 mb-0">
              By Veritas Admin — July 8, 2021
            </p>
          </div>
        </div>
        <div class="row">
          <!--          <div class="col-md-12">-->
          <!--            <p class="mt-2">In response to covid-19 TNKC House undergo in BOQ inspection</p>-->
          <!--          </div>-->
          <div class="col-md-4 my-2" v-for="swab in swabtests" v-bind:key="swab">
            <img :src="swab" alt="" class="border">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TnkcHouseSwabTest',
  data() {
    return {
      swabtests: [
        require(`@/assets/news/2020/tnkcswabtest/swab1_7-8-2021.jpg`),
        require(`@/assets/news/2020/tnkcswabtest/swab2_7-8-2021.jpg`),
        require(`@/assets/news/2020/tnkcswabtest/swab3_7-8-2021.jpg`),
      ],
    }
  }
};
</script>

<style scoped>

</style>

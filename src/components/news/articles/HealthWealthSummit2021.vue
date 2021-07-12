<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Health and Wealth Summit 2021
            </h2>
            <p class="vmc-text-primary-2 letter-spacing-1 mb-0">
              By Veritas Admin — July 7, 2021
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 my-2" v-for="participant in participants" v-bind:key="participant">
            <img :src="participant" alt="" class="border">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HealthWealthSummit2021',
  data() {
    return {
      participants: [
        require(`@/assets/programs/csr/2021/healthwealth/health2_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health3_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health4_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health5_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health6_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health7_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health8_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health9_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health10_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health11_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health12_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health13_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health14_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health15_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health16_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health17_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health18_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health19_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health20_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health21_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health22_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health23_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health24_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health25_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health26_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health27_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health28_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health29_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health30_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health31_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health32_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health33_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health34_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health35_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health36_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health37_7-9-2021.jpg`),
        require(`@/assets/programs/csr/2021/healthwealth/health38_7-9-2021.jpg`)
      ],
    }
  }
};
</script>

<style scoped>

</style>

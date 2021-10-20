<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Health and Wealth Summit Oct 2021
            </h2>
            <p class="vmc-text-primary-2 letter-spacing-1 mb-0">
              By Veritas Admin — October 20, 2021
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
  name: 'HealthWealthSummitOct2021',
  data() {
    return {
      participants: [
        require(`@/assets/programs/office/2021/healthwealth/health1_18-10-2021.jpg`)
      ],
    }
  }
};
</script>

<style scoped>

</style>

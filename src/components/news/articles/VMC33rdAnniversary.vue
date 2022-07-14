<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Veritas Maritime Corporation 33rd Anniversary
            </h2>
            <p class="vmc-text-primary-2 letter-spacing-1 mb-0">
              By Veritas Admin — July 12, 2022
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-4 my-2" v-for="covidCase in cases" v-bind:key="covidCase">
            <img :src="covidCase" alt="" class="border">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VMC33rdAnniversary',
  data() {
    return {
      cases: [
        require(`@/assets/news/2022/jul/33rd_anniversary_0714-A.jpg`),
        require(`@/assets/news/2022/jul/33rd_anniversary_0714-B.jpg`),
        require(`@/assets/news/2022/jul/33rd_anniversary_0714-C.jpg`)
      ],
    }
  }
};
</script>

<style scoped>

</style>

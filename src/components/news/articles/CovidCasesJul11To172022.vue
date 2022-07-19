<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              New Cases From July 11 to July 17
            </h2>
            <p class="vmc-text-primary-2 letter-spacing-1 mb-0">
              By Veritas Admin — July 19, 2022
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 my-2" v-for="covidCase in cases" v-bind:key="covidCase">
            <img :src="covidCase" alt="" class="border">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CovidCasesJul11To172022',
  data() {
    return {
      cases: [
        require(`@/assets/news/2022/jul/covidCaseJul11to17-2022.jpg`)
      ],
    }
  }
};
</script>

<style scoped>

</style>

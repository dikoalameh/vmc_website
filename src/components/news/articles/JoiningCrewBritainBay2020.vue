<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Joining Crew 2020
            </h2>
            <p class="vmc-text-primary-2 letter-spacing-1 mb-0">
              By Veritas Admin — July 8, 2021
            </p>
          </div>
        </div>
        <div class="row">
<!--          <div class="col-md-12">-->
<!--            <p class="mt-2">Britain Bay vessel 2020 joining crew at airport.</p>-->
<!--          </div>-->
          <div class="col-md-4 my-2" v-for="crew in crews" v-bind:key="crew">
            <img :src="crew" alt="" class="border">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JoiningCrewBritainBay2020',
  data() {
    return {
      crews: [
        require(`@/assets/news/2020/joiningcrew/crew1_7-8-2021.jpg`),
        require(`@/assets/news/2020/joiningcrew/crew2_7-8-2021.jpg`),
        require(`@/assets/news/2020/joiningcrew/crew3_7-8-2021.jpg`),
        require(`@/assets/news/2020/joiningcrew/crew4_7-8-2021.jpg`),
        require(`@/assets/news/2020/joiningcrew/crew5_7-8-2021.jpg`),
      ],
    }
  }
};
</script>

<style scoped>

</style>

<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              QMS-2022-010 MLC Certified and ISO Certified
            </h2>
            <p class="vmc-text-primary-2 letter-spacing-1 mb-0">
              By Veritas Admin — May 20, 2021
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="text-center">
              QMS-2022-010 Congratulations Veritas Family for being MLC Certified and ISO Certified
            </p>
          </div>
          <div class="col-12 my-2" v-for="participant in participants" v-bind:key="participant">
            <img :src="participant" alt="" class="border">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MLCCertifiedAndISOCertified',
  data() {
    return {
      participants: [
        require(`@/assets/news/2022/may/mlcisocert_52022.jpg`)
      ],
    }
  }
};
</script>

<style scoped>

</style>

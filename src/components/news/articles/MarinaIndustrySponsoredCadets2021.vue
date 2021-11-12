<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Mariners' Industry Sponsored-Cadets (MIS)
            </h2>
            <p class="vmc-text-primary-2 letter-spacing-1 mb-0">
              By Veritas Admin — November 11, 2021
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 my-3">
            <p>
              On November 10 and 11, 2021, the VERITAS MARITIME CORPORATION will offer an ONLINE examination and interview for
              pre-selected cadets. This is part of the Mariners' Industry Sponsored Cadets (MIS) Program selection process.
            </p>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-md-6 my-2" v-for="participant in participants" v-bind:key="participant">
            <img :src="participant" alt="" class="border">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarinaIndustrySponsoredCadets2021',
  data() {
    return {
      participants: [
        require(`@/assets/news/2021/mis_news_111221.jpg`),
      ]
    }
  }
};
</script>

<style scoped>

</style>

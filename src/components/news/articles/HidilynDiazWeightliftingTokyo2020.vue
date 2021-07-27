<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Congratulations, Hidilyn Diaz! Saludo kami sayo.
            </h2>
            <p class="vmc-text-primary-2 letter-spacing-1 mb-0">
              By Veritas Admin — July 28, 2021
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 my-3">
            <img :src="hidilynDiaz" alt="" class="border">
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <a href="https://facebook.com/VeritasMaritimeCorporation/photos/a.111817871125716/126164023024434"
               target="_blank" class="mb-0 mt-3 vmc-text-primary-2" style="opacity: 75%">
              See Original Post: https://facebook.com/VeritasMaritimeCorporation/photos/a.111817871125716/126164023024434
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HidilynDiazWeightliftingTokyo2020',
  data() {
    return {
      'hidilynDiaz': require(`@/assets/news/weightlifting_orig_07-28-2021.jpg`)
    }
  }
};
</script>

<style scoped>

</style>

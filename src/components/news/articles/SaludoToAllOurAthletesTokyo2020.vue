<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              SALUDO To All Our Athletes!
            </h2>
            <p class="vmc-text-primary-2 letter-spacing-1 mb-0">
              By Veritas Admin — August 08, 2021
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 my-3">
            <img :src="medalHaul" alt="" class="border mb-3">
            <a href="https://web.facebook.com/VeritasMaritimeCorporation/photos/a.111817871125716/129012036072966/"
               target="_blank" class="mb-0 mt-3 vmc-text-primary-2" style="opacity: 75%">
              See Original Post: https://web.facebook.com/VeritasMaritimeCorporation/photos/a.111817871125716/129012036072966/
            </a>
          </div>
          <div class="col-md-6 my-3">
            <img :src="athletes" alt="" class="border mb-3">
            <a href="https://web.facebook.com/VeritasMaritimeCorporation/photos/a.111817871125716/129011596073010/"
               target="_blank" class="mb-0 mt-3 vmc-text-primary-2" style="opacity: 75%">
              See Original Post: https://web.facebook.com/VeritasMaritimeCorporation/photos/a.111817871125716/129011596073010/
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SaludoToAllOurAthletesTokyo2020',
  data() {
    return {
      'medalHaul': require(`@/assets/news/medalist_tokyo2020-08_08_2021.jpg`),
      'athletes': require(`@/assets/news/representative_tokyo2020-08_08_2021.jpg`),
    }
  }
};
</script>

<style scoped>
a {
  word-break: break-all;
}
</style>

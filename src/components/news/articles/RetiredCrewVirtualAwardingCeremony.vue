<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Retired Crew Virtual Awarding Ceremony
            </h2>
            <p class="vmc-text-primary-2 letter-spacing-1 mb-0">
              By Veritas Admin — May 27, 2021
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <img :src="veritasRetirees" alt="" class="my-3">
            <p>On May 27, 2021, 15 - 31 service years crew in Veritas Maritime Corporation held a retired crew virtual awarding ceremony via zoom.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RetiredCrewVirtualAwardingCeremony',
  data() {
    return {
      'veritasRetirees': require(`@/assets/keyvisuals/retirees_63021.jpg`),
    }
  }
};
</script>

<style scoped>

</style>

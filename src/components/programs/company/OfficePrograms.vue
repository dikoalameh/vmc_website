<template>
  <div class="office-programs">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Office Programs
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light mb-3">Veritas Christmas Party</h4>
          </div>
          <div class="col-md-4 col-sm-6">
            <img :src="vmcXmasParty1" alt="">
          </div>
          <div class="col-md-4 col-sm-6">
            <img :src="vmcXmasParty2" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light">Veritas Anniversary Party</h4>
          </div>
          <div class="col-md-4 col-sm-6 my-3">
            <img :src="vmcAnniversary1" alt="">
          </div>
          <div class="col-md-4 col-sm-6 my-3">
            <img :src="vmcAnniversary2" alt="">
          </div>
          <div class="col-md-4 col-sm-6 my-3">
            <img :src="vmcAnniversary3" alt="">
          </div>
          <div class="col-md-4 col-sm-6 my-3">
            <img :src="vmcAnniversary4" alt="">
          </div>
          <div class="col-md-4 col-sm-6 my-3">
            <img :src="vmcAnniversary5" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OfficePrograms',
  data() {
    return {
      'vmcXmasParty1': require(`@/assets/programs/office/vmcXmasParty2016.jpg`),
      'vmcXmasParty2': require(`@/assets/programs/office/vmcXmasPartyHawaiian.jpg`),
      'vmcAnniversary1': require(`@/assets/programs/office/vmc25Anniversary.jpg`),
      'vmcAnniversary2': require(`@/assets/programs/office/30YearsGroupPhoto.jpg`),
      'vmcAnniversary3': require(`@/assets/programs/office/30YearsFront.png`),
      'vmcAnniversary4': require(`@/assets/programs/office/JMMSpeech.png`),
      'vmcAnniversary5': require(`@/assets/programs/office/JMMSoloSpeech.png`),
    }
  }
};
</script>

<style scoped>

</style>
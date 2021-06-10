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
            <photo-gallery-modal :caption="`Veritas Christmas Party`"
                                 :thumbnail="vmcXmasParty1[0]"
                                 :images="vmcXmasParty1" />
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
            <photo-gallery-modal :caption="`Veritas 30th Anniversary`"
                                 :thumbnail="vmc30Anniversary[0]"
                                 :images="vmc30Anniversary" />
            <img :src="vmcAnniversary1" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoGalleryModal from '../app-layout/PhotoGalleryModal';

export default {
  name: 'OfficePrograms',
  components: {
    'photo-gallery-modal' : PhotoGalleryModal
  },
  data() {
    return {
      vmcXmasParty1: [
        require(`@/assets/programs/office/vmcXmasParty2016.jpg`),
        require(`@/assets/programs/office/vmcXmasPartyHawaiian.jpg`),
      ],
      vmc30Anniversary: [
        require(`@/assets/programs/office/30YearsGroupPhoto.jpg`),
        require(`@/assets/programs/office/vmc25Anniversary.jpg`),
        require(`@/assets/programs/office/30YearsFront.png`),
        require(`@/assets/programs/office/JMMSpeech.png`),
        require(`@/assets/programs/office/JMMSoloSpeech.png`),
      ]
    }
  }
};
</script>

<style scoped>

</style>

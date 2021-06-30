<template>
  <div class="csr-activities">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              CSR Activities
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light mb-3">Clean Up Drive</h4>
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Manila Bay Clean Up Drive`"
                                 :thumbnail="manilaBayCleanUp"
                                 :images="manilaBayCleanUp" />
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light mb-3">Outside Veritas Activities</h4>
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Christmas Party for Special Children`"
                                 :thumbnail="csrImagesBatchOne[0]"
                                 :images="csrImagesBatchOne" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoGalleryModal from '../app-layout/PhotoGalleryModal';
export default {
  name: 'CSRActivities',
  components: {
    'photo-gallery-modal' : PhotoGalleryModal
  },
  data() {
    return {
      csrImagesBatchOne : [
        require(`@/assets/programs/csr/SpecialChildrenXMasParty_2014.jpg`),
      ],
      manilaBayCleanUp: [
        require(`@/assets/no_image.jpg`)
      ]
    }
  }
};
</script>

<style scoped>
.img-gallery {
  width: 360px;
}
</style>

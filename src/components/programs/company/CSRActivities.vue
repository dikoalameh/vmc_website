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
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light mb-3">Vessel Send Off Party</h4>
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Loyalty Awardee`"
                                 :thumbnail="loyaltyAwardee[0]"
                                 :images="loyaltyAwardee" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Cadets Teambuilding`"
                                 :thumbnail="cadetsTeambuilding1[0]"
                                 :images="cadetsTeambuilding1" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Send-Off Ceremony M/V Horizon Highway`"
                                 :thumbnail="horizonHighway1[0]"
                                 :images="horizonHighway1" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Send-Off Ceremony M/V Cape Hayatomo`"
                                 :thumbnail="capeHayatomo1[0]"
                                 :images="capeHayatomo1" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Send-Off Ceremony M/V Shining Bliss`"
                                 :thumbnail="shiningBliss1[0]"
                                 :images="shiningBliss1" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Send-Off Ceremony M/V Corona Utility`"
                                 :thumbnail="coronaUtility1[0]"
                                 :images="coronaUtility1" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Send-Off Ceremony M/V Drive Green`"
                                 :thumbnail="driveGreen1[0]"
                                 :images="driveGreen1" />
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
      loyaltyAwardee: [
        require(`@/assets/programs/csr/2014-Loyalty-Awardee_18.jpg`),
        require(`@/assets/programs/csr/2017_horizon.jpg`),
        require(`@/assets/programs/csr/2017_hayatomo.jpg`),
        require(`@/assets/programs/csr/shining_bliss.jpg`),
        require(`@/assets/programs/csr/corona_utility.jpg`),
        require(`@/assets/programs/csr/drive_green.jpg`),
        require(`@/assets/programs/csr/cadets_teambuilding.jpg`)
      ],
      horizonHighway1: [
        require(`@/assets/programs/csr/2017_horizon.jpg`)
      ],
      capeHayatomo1: [
        require(`@/assets/programs/csr/2017_hayatomo.jpg`)
      ],
      shiningBliss1: [
        require(`@/assets/programs/csr/shining_bliss.jpg`)
      ],
      coronaUtility1: [
        require(`@/assets/programs/csr/corona_utility.jpg`)
      ],
      driveGreen1: [
        require(`@/assets/programs/csr/drive_green.jpg`)
      ],
      cadetsTeambuilding1: [
        require(`@/assets/programs/csr/cadets_teambuilding.jpg`)
      ],
    }
  }
};
</script>

<style scoped>
.img-gallery {
  width: 360px;
}
</style>

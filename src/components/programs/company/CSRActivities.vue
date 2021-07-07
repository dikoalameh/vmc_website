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
            <h4 class="font-weight-light mb-3">2019 Outside Veritas Activities</h4>
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Manila Bay Clean Up Drive`"
                                 :thumbnail="cleanUp2019[0]"
                                 :images="cleanUp2019" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Christmas Party for Special Children`"
                                 :thumbnail="missionaries2019[0]"
                                 :images="missionaries2019" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Indigent Outreach Program in Bohol`"
                                 :thumbnail="indigent2019[0]"
                                 :images="indigent2019" />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light mb-3">2018 Outside Veritas Activities</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Coastal Clean Up`"
                                 :thumbnail="cleanup2018[0]"
                                 :images="cleanup2018" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Bacolod Dental Mission`"
                                 :thumbnail="dental2018[0]"
                                 :images="dental2018" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Iloilo Tree Planting`"
                                 :thumbnail="treeplant2018[0]"
                                 :images="treeplant2018" />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="col-12">
          <h4 class="font-weight-light mb-3">2017 Outside Veritas Activities</h4>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Coastal Clean Up`"
                                 :thumbnail="cleanup2017[0]"
                                 :images="cleanup2017" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Bacolod Tree Planting`"
                                 :thumbnail="treeplant2017[0]"
                                 :images="treeplant2017" />
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
      cleanUp2019: [
        require(`@/assets/programs/csr/2019/manilabaycleanup/Manila-Bay-Clean-Up-Drive-1.jpg`),
        require(`@/assets/programs/csr/2019/manilabaycleanup/Manila Bay Cleanup Drive 2.jpg`),
        require(`@/assets/programs/csr/2019/manilabaycleanup/Manila Bay Clean Up Drive 3.jpg`)
      ],
      missionaries2019: [
        require(`@/assets/programs/csr/2019/missonaries/missionaries1_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries2_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries3_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries4_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries5_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries6_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries7_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries8_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries9_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries10_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries11_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries12_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries13_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries14_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries15_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries16_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries17_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries18_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries19_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries20_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries21_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries22_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries23_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries24_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries25_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries26_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries27_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries28_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries29_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries30_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries31_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries32_2019_7-7-2021.jpg`),
        require(`@/assets/programs/csr/2019/missonaries/missionaries33_2019_7-7-2021.jpg`)
      ],
      indigent2019: [
        require(`@/assets/programs/csr/2019/indigent_outreach/indigent1_7-8-2021.jpg`),
        require(`@/assets/programs/csr/2019/indigent_outreach/indigent2_7-8-2021.jpg`),
        require(`@/assets/programs/csr/2019/indigent_outreach/indigent3_7-8-2021.jpg`),
        require(`@/assets/programs/csr/2019/indigent_outreach/indigent4_7-8-2021.jpg`),
        require(`@/assets/programs/csr/2019/indigent_outreach/indigent5_7-8-2021.jpg`),
        require(`@/assets/programs/csr/2019/indigent_outreach/indigent6_7-8-2021.jpg`),
        require(`@/assets/programs/csr/2019/indigent_outreach/indigent7_7-8-2021.jpg`)
      ],
      cleanup2018: [
        require(`@/assets/programs/csr/2018/coastalcleanup/cleanup1-7-8-2021.jpg`),
        require(`@/assets/programs/csr/2018/coastalcleanup/cleanup2-7-8-2021.jpg`),
        require(`@/assets/programs/csr/2018/coastalcleanup/cleanup3-7-8-2021.jpg`),
        require(`@/assets/programs/csr/2018/coastalcleanup/cleanup4-7-8-2021.jpg`),
        require(`@/assets/programs/csr/2018/coastalcleanup/cleanup5-7-8-2021.jpg`)
      ],
      dental2018: [
        require(`@/assets/programs/csr/2018/dentalmission/dental1_7-8-2021.jpg`),
        require(`@/assets/programs/csr/2018/dentalmission/dental2_7-8-2021.jpg`),
        require(`@/assets/programs/csr/2018/dentalmission/dental3_7-8-2021.jpg`),
        require(`@/assets/programs/csr/2018/dentalmission/dental4_7-8-2021.jpg`),
        require(`@/assets/programs/csr/2018/dentalmission/dental5_7-8-2021.jpg`),
        require(`@/assets/programs/csr/2018/dentalmission/dental6_7-8-2021.jpg`),
      ],
      treeplant2018: [
        require(`@/assets/programs/csr/2018/iloilotreeplant/treeplant1_7-8-2021.jpg`),
        require(`@/assets/programs/csr/2018/iloilotreeplant/treeplant2_7-8-2021.jpg`),
        require(`@/assets/programs/csr/2018/iloilotreeplant/treeplant3_7-8-2021.jpg`),
        require(`@/assets/programs/csr/2018/iloilotreeplant/treeplant4_7-8-2021.jpg`),
        require(`@/assets/programs/csr/2018/iloilotreeplant/treeplant5_7-8-2021.jpg`),
        require(`@/assets/programs/csr/2018/iloilotreeplant/treeplant6_7-8-2021.jpg`),
      ],
      cleanup2017: [
        require(`@/assets/programs/csr/2017/coastalcleanup/cleanup1-7-8-2021.jpg`),
        require(`@/assets/programs/csr/2017/coastalcleanup/cleanup2-7-8-2021.jpg`),
        require(`@/assets/programs/csr/2017/coastalcleanup/cleanup3-7-8-2021.jpg`),
        require(`@/assets/programs/csr/2017/coastalcleanup/cleanup4-7-8-2021.jpg`),
        require(`@/assets/programs/csr/2017/coastalcleanup/cleanup5-7-8-2021.jpg`),
        require(`@/assets/programs/csr/2017/coastalcleanup/cleanup1-7-8-2021.jpg`),
        require(`@/assets/programs/csr/2017/coastalcleanup/cleanup2-7-8-2021.jpg`),
        require(`@/assets/programs/csr/2017/coastalcleanup/cleanup3-7-8-2021.jpg`),
        require(`@/assets/programs/csr/2017/coastalcleanup/cleanup4-7-8-2021.jpg`),
        require(`@/assets/programs/csr/2017/coastalcleanup/cleanup5-7-8-2021.jpg`)
      ],
      treeplant2017: [
        require(`@/assets/programs/csr/2017/bacolodtreeplant/treeplant1_7-8-2021.jpg`),
        require(`@/assets/programs/csr/2017/bacolodtreeplant/treeplant2_7-8-2021.jpg`),
        require(`@/assets/programs/csr/2017/bacolodtreeplant/treeplant3_7-8-2021.jpg`),
        require(`@/assets/programs/csr/2017/bacolodtreeplant/treeplant4_7-8-2021.jpg`),
        require(`@/assets/programs/csr/2017/bacolodtreeplant/treeplant5_7-8-2021.jpg`),
        require(`@/assets/programs/csr/2017/bacolodtreeplant/treeplant6_7-8-2021.jpg`)
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

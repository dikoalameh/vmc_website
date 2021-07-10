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
            <h4 class="font-weight-light">Crew Programs</h4>
          </div>
          <div class="col-md-4 col-sm-6 mt-3">
            <photo-gallery-modal :caption="`Loyalty Award 2021`"
                                 :thumbnail="loyaltyAward2021[0]"
                                 :images="loyaltyAward2021" />
          </div>
          <div class="col-md-4 col-sm-6 mt-3">
            <photo-gallery-modal :caption="`Veritas Latest Vessel Visitation`"
                                 :thumbnail="vesselVisitation[0]"
                                 :images="vesselVisitation" />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light mb-3">Staff Programs</h4>
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Veritas Christmas Party 2019`"
                                 :thumbnail="vmcXmasParty1[0]"
                                 :images="vmcXmasParty1" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Fire Drill 2019`"
                                 :thumbnail="firedrill2019[0]"
                                 :images="firedrill2019" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Veritas 30th Anniversary 2019`"
                                 :thumbnail="vmc30Anniversary[0]"
                                 :images="vmc30Anniversary" />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big">
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
      ],
      loyaltyAwardee: [
        require(`@/assets/programs/office/2014-Loyalty-Awardee_18.jpg`)
      ],
      horizonHighway1: [
        require(`@/assets/programs/office/2017_horizon.jpg`)
      ],
      capeHayatomo1: [
        require(`@/assets/programs/office/2017_hayatomo.jpg`)
      ],
      shiningBliss1: [
        require(`@/assets/programs/office/shining_bliss.jpg`)
      ],
      coronaUtility1: [
        require(`@/assets/programs/office/corona_utility.jpg`)
      ],
      driveGreen1: [
        require(`@/assets/programs/office/drive_green.jpg`)
      ],
      cadetsTeambuilding1: [
        require(`@/assets/programs/office/cadets_teambuilding.jpg`)
      ],
      firedrill2019: [
        require(`@/assets/programs/office/2019/firedrill/drill1_7-7-2021.jpg`),
        require(`@/assets/programs/office/2019/firedrill/drill2_7-7-2021.jpg`),
        require(`@/assets/programs/office/2019/firedrill/drill3_7-7-2021.jpg`),
        require(`@/assets/programs/office/2019/firedrill/drill4_7-7-2021.jpg`),
        require(`@/assets/programs/office/2019/firedrill/drill5_7-7-2021.jpg`),
      ],
      vesselVisitation: [
        require(`@/assets/programs/office/vesselvisitation/vessel_visitation_1_63021_crop.jpg`),
        require(`@/assets/programs/office/vesselvisitation/vessel_visitation_2_63021.jpg`),
        require(`@/assets/programs/office/vesselvisitation/vessel_visitation_3_63021.jpg`),
        require(`@/assets/programs/office/vesselvisitation/vessel_visitation_4_63021.jpg`),
        require(`@/assets/programs/office/vesselvisitation/vessel_visitation_5_63021.jpg`),
        require(`@/assets/programs/office/vesselvisitation/vessel_visitation_6_63021.jpg`),
        require(`@/assets/programs/office/vesselvisitation/vessel_visitation_7_63021.jpg`),
        require(`@/assets/programs/office/vesselvisitation/vessel_visitation_8_63021.jpg`),
        require(`@/assets/programs/office/vesselvisitation/vessel_visitation_9_63021.jpg`),
        require(`@/assets/programs/office/vesselvisitation/vessel_visitation_10_63021.jpg`),
        require(`@/assets/programs/office/vesselvisitation/vessel_visitation_11_63021.jpg`),
        require(`@/assets/programs/office/vesselvisitation/vessel_visitation_12_63021.jpg`),
        require(`@/assets/programs/office/vesselvisitation/vessel_visitation_13_63021.jpg`),
      ],
      loyaltyAward2021: [
        require(`@/assets/programs/office/2021/loyaltyaward/AB_Avellaneda.jpg`),
        require(`@/assets/programs/office/2021/loyaltyaward/CAPT_Albay.jpg`),
        require(`@/assets/programs/office/2021/loyaltyaward/CAPT_Daluz.jpg`),
        require(`@/assets/programs/office/2021/loyaltyaward/CAPT_Panaguiton.jpg`),
        require(`@/assets/programs/office/2021/loyaltyaward/CAPT_Suyat.jpg`),
      ]
    }
  }
};
</script>

<style scoped>

</style>

<template>
  <div id="Company">
    
    <div class="container-fluid vmc-py-big" >
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center">
          <!-- Text column dynamically expands to full width if no logo is uploaded -->
          <div :class="cms.aboutOfficeLogo ? 'col-lg-8' : 'col-12'">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Company
            </h2>
            <p style="white-space: pre-wrap;">{{ cms.TCdescription }}</p>
          </div>
          <div class="col-lg-4 col-md-7" v-if="cms.aboutOfficeLogo">
            <img :src="cms.aboutOfficeLogo" alt="Company Logo" class="img-fluid rounded shadow-sm">
          </div>
        </div>
        <div class="row">
          <div class="col-12 mt-4">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Why Veritas was established?
            </h2>
            <p style="white-space: pre-wrap;">{{ cms.whyVeritas }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CMS Background Image: Shows nothing if not uploaded -->
    <div class="container-fluid" id="QualityCrew"
         :style="{ 
           backgroundImage: cms.aboutQualityCrewBg ? 'url(' + cms.aboutQualityCrewBg + ')' : 'none',
           backgroundColor: cms.aboutQualityCrewBg ? 'transparent' : '#f8f9fa' 
         }">
      <div class="bg-overlay vmc-py-big">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mb-4 text-center">
              <h2 class="h1 vmc-text-primary vmc-heading">
                Quality Crew Recruitment
              </h2>
              <p style="white-space: pre-wrap;">{{ cms.qualityCrewRecruitment }}</p>
            </div>
            <div class="col-lg-12 text-center">
              <h2 class="h1 vmc-text-primary vmc-heading">
                Mission Statement
              </h2>
              <p style="white-space: pre-wrap;">{{ cms.missionStatement }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid vmc-py-big" >
      <div class="container text-center">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-12">
            <h2 class="h1 vmc-text-primary vmc-heading mb-4">
              Core Values
            </h2>
          </div>
          <div class="col-md-6 col-lg-4 mb-2">
            <font-awesome-icon icon="hand-holding-heart" class="fa-5x" />
            <h4 class="vmc-text-primary-2 font-weight-normal my-3">HONESTY</h4>
            <p style="white-space: pre-wrap;">{{ cms.coreValuesHonesty }}</p>
          </div>
          <div class="col-md-6 col-lg-4 mb-2">
            <font-awesome-icon icon="handshake" class="fa-5x" />
            <h4 class="vmc-text-primary-2 font-weight-normal my-3">INTEGRITY</h4>
            <p style="white-space: pre-wrap;">{{ cms.coreValuesIntegrity }}</p>
          </div>
          <div class="col-md-6 col-lg-4 mb-2">
            <font-awesome-icon icon="thumbs-up" class="fa-5x" />
            <h4 class="vmc-text-primary-2 font-weight-normal my-3">QUALITY SERVICE</h4>
            <p style="white-space: pre-wrap;">{{ cms.coreValuesQualityService }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center">
          <!-- Text column dynamically expands to full width if no history image is uploaded -->
          <div :class="cms.aboutTowerImg ? 'col-lg-8 order-lg-5' : 'col-12'">
            <h2 class="h1 vmc-text-primary vmc-heading">
              History
            </h2>
            <p style="white-space: pre-wrap;">{{ cms.history }}</p>
          </div>
          <div class="col-lg-4 col-md-7 order-lg-0" v-if="cms.aboutTowerImg">
            <img :src="cms.aboutTowerImg" alt="History Image" class="img-fluid rounded shadow-sm">
          </div>
        </div>
      </div>
    </div>

    <organizational-chart />
    
  </div>
</template>

<script>
import { cmsMixin } from '@/mixins/cmsMixin';
import OrganizationalChart from './OrganizationalChart';

export default {
  name: "TheCompany",
  mixins: [cmsMixin],
  // Note: Removed the hardcoded local images entirely
  components: {
    'organizational-chart' : OrganizationalChart,
  }
}
</script>

<style scoped>
#QualityCrew {
  background-attachment: fixed;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
.bg-overlay {
  background-color: rgba(244, 244,  243, .85);
}
</style>
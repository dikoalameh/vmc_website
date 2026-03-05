<template>
  <div class="home">
    <vmc-header />
    <key-visual />
    <latest-news />
    <div class="video-container">
      <div class="overlay"></div>
      
      <!-- Renders video if uploaded -->
      <video v-if="cms.homeBackgroundVideo"
        :key="cms.homeBackgroundVideo"
        playsinline="playsinline" 
        autoplay="autoplay" 
        muted="muted" 
        loop="loop"
        :src="cms.homeBackgroundVideo"
      >
      </video>

      <!-- Renders image if uploaded (and no video is present) -->
      <img v-else-if="cms.homeBackgroundImage" 
           :src="cms.homeBackgroundImage" 
           class="bg-image" 
           alt="Background Image">

      <!-- Fallback to the no_image.png if CMS is empty -->
      <img v-else 
           :src="require('@/assets/no_image.jpg')" 
           class="bg-image" 
           alt="Default Background">

      <div class="container h-100 py-3">
        <div class="row px-3 d-flex h-100 align-items-center justify-content-center">
          <div class="col-md-12 col-lg-8 py-2">
            <crew-fleet-status />
          </div>
          <div class="col-lg-2 col-md-4 col-6 py-2">
            <img 
              :src="(cms.homeCrewFleetStatusLogo && cms.homeCrewFleetStatusLogo.image) ? cms.homeCrewFleetStatusLogo.image : require('@/assets/no_image.jpg')" 
              alt="Certification Logo" 
              class="img-fluid"
            >
          </div>
          <div class="col-lg-2 col-md-4 col-6 pl-0 py-2">
            <p class="mb-0 text-white" style="white-space: pre-line;">{{ cms.cfsimgdesc }}</p> <!--this changes via CMS -->
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1 vmc-bg-img-repeat">
      <membershipa-affiliations />
    </div>
    <vmc-footer />
    <job-hiring v-if="cms.showJobHiring && cms.jobList && cms.jobList.length > 0" />
  </div>
</template>

<script>
// @ is an alias to /src
import KeyVisual from '../components/home/KeyVisual';
import LatestNews from '../components/home/LatestNews';
import CrewFleetStatus from '../components/home/CrewFleetStatus';
import MembershipAffiliations from '../components/home/MembershipAffiliations';
import VMCHeader from '../components/VMCHeader';
import VMCFooter from '../components/VMCFooter';
import { cmsMixin } from '@/mixins/cmsMixin'; // Import the CMS mixin
import JobHiring28Aug2021 from '../components/home/JobHiring28Aug2021'; // Updated Job Hiring component
import $ from 'jquery';

export default {
  
  name: 'Home',
  components: {
    'vmc-header':VMCHeader,
    'vmc-footer':VMCFooter,
    'key-visual': KeyVisual,
    'latest-news': LatestNews,
    'crew-fleet-status': CrewFleetStatus,
    'membershipa-affiliations': MembershipAffiliations,
    'job-hiring': JobHiring28Aug2021,

  },
  data() {
    return {
      // Background media removed entirely from data() since we use CMS
    }
  },
  mixins: [cmsMixin], // Include the CMS mixin here

  watch: {
    // This watches your CMS data. 
    // As soon as the server replies "true", this code runs.
    'cms.showJobHiring'(newValue) {
      if (newValue === true) {
        // Wait 1 tick for the HTML to render, then open the popup
        this.$nextTick(() => {
          $('#JobHiring').modal('show');
        });
      }
    }
  },
  mounted(){
    // This tells the mixin to go fetch the data from the MongoDB database!
    if (typeof this.loadCMSData === 'function') {
      this.loadCMSData();
    }
  },

}
</script>

<style scoped>
.vmc-bg-img-repeat {
  background-repeat: repeat;
}
/* The video container is styled to automatically be solid black if no media is there! */
.video-container {
  position: relative;
  background-color: black;
  height: 60vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

/* Video Styling */
.video-container video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

/* New Image Styling */
.video-container .bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Forces the image to stretch and fill the space beautifully */
  z-index: 0;
}

.video-container .container {
  position: relative;
  z-index: 2;
}
.video-container .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.35;
  z-index: 1;
}
@media only screen and (max-width: 768px) {
  .video-container {
    height: auto;
  }
}
@media screen and (orientation:portrait) and (min-width: 768px)  {
  .video-container {
    height: 50vh;
  }
}
</style>
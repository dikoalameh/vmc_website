<template>
  <div class="home">
    <vmc-header />
    <key-visual />
    <latest-news />
    <div class="video-container">
      <div class="overlay"></div>
      <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source :src="video" type="video/mp4">
      </video>
      <div class="container h-100 py-3">
        <div class="row px-3 d-flex h-100 align-items-center justify-content-center">
          <div class="col-md-12 col-lg-8 py-2">
            <crew-fleet-status />
          </div>
          <div class="col-lg-2 col-md-4 col-6 py-2">
            <img :src="affiliateISO" alt="">
          </div>
          <div class="col-lg-2 col-md-4 col-6 pl-0 py-2">
            <p class="mb-0 text-white">
              ISO 9001:2015 Crew Management for International Shipping Certified by DNV-GL
            </p>
          </div>
        </div>
      </div>
    </div>
<!--    <div class="container-fluid vmc-py-big">-->
<!--      <div class="container">-->
<!--        <div class="row px-3 d-flex align-items-center justify-content-center">-->
<!--          <div class="col-md-12 col-lg-8">-->
<!--            <crew-fleet-status />-->
<!--          </div>-->
<!--          <div class="col-lg-2 col-md-4 col-6">-->
<!--            <img :src="affiliateISO" alt="">-->
<!--          </div>-->
<!--          <div class="col-lg-2 col-md-4 col-6 pl-0">-->
<!--            <p class="mb-0">-->
<!--              ISO 9001:2015 Crew Management for International Shipping Certified by DNV-GL-->
<!--            </p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="container-fluid vmc-py-big vmc-bg-dark-1 vmc-bg-img-repeat"
         :style="{ backgroundImage: 'url('+affiliateTexture+')' }">
      <membershipa-affiliations />
    </div>
    <vmc-footer />
<!--    <privacy-notice />-->
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

export default {
  name: 'Home',
  components: {
    'vmc-header':VMCHeader,
    'vmc-footer':VMCFooter,
    'key-visual': KeyVisual,
    'latest-news': LatestNews,
    'crew-fleet-status': CrewFleetStatus,
    'membershipa-affiliations': MembershipAffiliations,
  },
  data() {
    return {
      'affiliateISO' :require(`@/assets/affiliates/iso_9001.jpg`),
      'affiliateTexture' :require(`@/assets/fabric-texture.png`),
      'video': require(`@/assets/keyvisuals/KRBS 4mb.mp4`),
    }
  },
}
</script>

<style scoped>
.vmc-bg-img-repeat {
  background-repeat: repeat;
}
.video-container {
  position: relative;
  background-color: black;
  height: 75vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}
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
</style>

<template>
  <div class="home">
    <vmc-header />
    <key-visual />
    <latest-news />
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row px-3 d-flex align-items-center justify-content-center">
          <div class="col-md-12 col-lg-8">
            <crew-fleet-status />
          </div>
          <div class="col-lg-2 col-md-4 col-6">
            <img :src="affiliateISO" alt="">
          </div>
          <div class="col-lg-2 col-md-4 col-6 pl-0">
            <p class="mb-0">
              ISO 9001:2015 Crew Management for International Shipping Certified by DNV-GL
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1 vmc-bg-img-repeat"
         :style="{ backgroundImage: 'url('+affiliateTexture+')' }">
      <membershipa-affiliations />
    </div>
    <vmc-footer />
    <privacy-notice />
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
import PrivacyNotice from '../components/PrivacyNotice';
import $ from 'jquery'

export default {
  name: 'Home',
  components: {
    'vmc-header':VMCHeader,
    'vmc-footer':VMCFooter,
    'key-visual': KeyVisual,
    'latest-news': LatestNews,
    'crew-fleet-status': CrewFleetStatus,
    'membershipa-affiliations': MembershipAffiliations,
    'privacy-notice': PrivacyNotice,
  },
  data() {
    return {
      'affiliateISO' :require(`@/assets/affiliates/iso_9001.jpg`),
      'affiliateTexture' :require(`@/assets/fabric-texture.png`),
      'acceptedValue': sessionStorage.getItem("accept"),
    }
  },
  methods: {
    checkPrivacyNoticeIfAccepted() {
      if (sessionStorage.getItem("accept")) $('#PrivacyNotice').modal('hide');
      else $('#PrivacyNotice').modal('show');
    }
  },
  mounted() {
    this.checkPrivacyNoticeIfAccepted();
  }
}
</script>

<style scoped>
.vmc-bg-img-repeat {
  background-repeat: repeat;
}
</style>

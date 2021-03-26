<template>
  <div class="home">
    <key-visual />
    <latest-news />
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row px-3 d-flex align-items-center justify-content-center">
          <div class="col-md-12 col-lg-8">
            <crew-fleet-status />
          </div>
          <div class="col-lg-2 col-md-4 col-6">
            <img :src="affiliateISO" alt="" style="width: 100%; height: auto">
          </div>
          <div class="col-lg-2 col-md-4 col-6 pl-0">
            <p class="mb-0">
              ISO 9001:2015 Crew Management for International Shipping Certified by DNV-GL
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import KeyVisual from '../components/home/KeyVisual';
import LatestNews from '../components/home/LatestNews';
import CrewFleetStatus from '../components/home/CrewFleetStatus';

export default {
  name: 'Home',
  components: {
    'key-visual': KeyVisual,
    'latest-news': LatestNews,
    'crew-fleet-status': CrewFleetStatus,
  },
}
</script>

<style scoped>

</style>

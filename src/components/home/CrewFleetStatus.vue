<template>
  <div class="row vmc-bg-dark-half rounded-medium py-4 px-3">
    <div class="col-12">
      <h2 class="h1 vmc-text-primary text-center mb-3 vmc-heading">
        Crew and Fleet Status
      </h2>
    </div>
    <div class="col-md-3 col-sm-6 mb-3 px-2">
      <div class="card border-0 rounded-medium shadow">
        <div class="card-body text-center p-3">
          <h2 class="mb-0 vmc-text-primary" style="font-size: clamp(24px, 4vw, 38px);">
            {{ 0 + totalCrewCalculated }}
          </h2>
        </div>
        <div class="card-footer text-center vmc-bg-prime-5 p-2"
             style="border-bottom-left-radius: inherit; border-bottom-right-radius: inherit;">
          <p class="mb-0 text-white font-weight-normal" style="letter-spacing: 1px">Total Crew</p>
        </div>
      </div>
    </div>
    <div class="col-md-3 col-sm-6 mb-3 px-2">
      <div class="card border-0 rounded-medium shadow">
        <div class="card-body text-center p-3">
          <h2 class="mb-0 vmc-text-primary" style="font-size: 38px;">{{ 0 + Number(cms.onBoard) }}</h2> <!-- On Board -->
        </div>
        <div class="card-footer text-center vmc-bg-prime-5 p-2"
             style="border-bottom-left-radius: inherit; border-bottom-right-radius: inherit;">
          <p class="mb-0 text-white font-weight-normal" style="letter-spacing: 1px">On Board</p>
        </div>
      </div>
    </div>
    <div class="col-md-3 col-sm-6 mb-3 px-2">
      <div class="card border-0 rounded-medium shadow">
        <div class="card-body text-center p-3">
          <h2 class="mb-0 vmc-text-primary" style="font-size: 38px;">{{ 0 + Number(cms.standBy) }}</h2> <!-- Stand By -->
        </div>
        <div class="card-footer text-center vmc-bg-prime-5 p-2"
             style="border-bottom-left-radius: inherit; border-bottom-right-radius: inherit;">
          <p class="mb-0 text-white font-weight-normal" style="letter-spacing: 1px">Standby</p>
        </div>
      </div>
    </div>
    <div class="col-md-3 col-sm-6 mb-3 px-2">
      <div class="card border-0 rounded-medium shadow">
        <div class="card-body text-center p-3">
          <h2 class="mb-0 vmc-text-primary" style="font-size: 38px;">{{ 0 + Number(cms.totalVessels) }}</h2> <!-- Total Vessels -->
        </div>
        <div class="card-footer text-center vmc-bg-prime-5 p-2"
             style="border-bottom-left-radius: inherit; border-bottom-right-radius: inherit;">
          <p class="mb-0 text-white font-weight-normal" style="letter-spacing: 1px">Total Vessels</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cmsMixin } from '@/mixins/cmsMixin';

export default {
  name: 'CrewFleetStatus',

  mixins: [cmsMixin], 
  computed: {
    totalCrewCalculated() {
      // Force them to be numbers so they don't combine as text (e.g. "10" + "20" = "1020")
      const onBoard = Number(this.cms.onBoard) || 0;
      const standBy = Number(this.cms.standBy) || 0;
      return onBoard + standBy;
    }
  }
};
</script>


<style scoped>
.vmc-bg-dark-half {
  background-color: rgba(244, 244, 243, .5);
}
</style>

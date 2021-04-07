<template>
  <div class="vmc-cadets">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Training Programs
            </h2>
          </div>
          <div class="col-md-3 my-3">
            <img :src="scholarship1" alt="">
          </div>
          <div class="col-md-9">
            <h4 class="font-weight-light">Scholarship Training Program</h4>
            <p>Educational sponsorship of deserving Nautical and Marine Engineering students from nominated maritime schools.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-3 order-md-10 my-3">
            <img :src="fastTrack1" alt="">
          </div>
          <div class="col-md-9  order-md-0">
            <h4 class="font-weight-light">Fast Track Cadet Training Program</h4>
            <p>Recruitment of top graduates of maritime schools with agreed period of service as officer onboard VMC manned vessels. This program trains and develops top graduates for officer positions to augment Company's fleet of qualified and competent deck/engine officers.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-3 my-3">
            <img :src="preCadetship1" alt="">
          </div>
          <div class="col-md-9">
            <h4 class="font-weight-light">Pre-Cadetship Training Program</h4>
            <p>This in-house program ensures the cadet's compliance with onboard theoretical and practical skill requirements during their apprenticeship. This Training Program lasts between 4 ~ 6 months before joining their assigned vessels.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-3 order-md-10 my-3">
            <img :src="shipboard1" alt="">
          </div>
          <div class="col-md-9  order-md-0">
            <h4 class="font-weight-light">Shipboard Training Program</h4>
            <p>Required Cadet's twelve months shipboard training where they gain the practical training and experience necessary to become competent watchkeeping deck and engine officer in accordance with the STCW Convention as amended.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrainingPrograms',
  data() {
    return {
      'scholarship1': require(`@/assets/crews/scholarshipTraining.jpg`),
      'fastTrack1': require(`@/assets/crews/fastTrackCadetTraining.jpg`),
      'preCadetship1': require(`@/assets/crews/pre-cadetshipTraining.jpg`),
      'shipboard1': require(`@/assets/crews/shipboardTraining.jpg`),
    }
  }
};
</script>

<style scoped>

</style>
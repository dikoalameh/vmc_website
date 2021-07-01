<template>
  <div class="vmc-cadets">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Veritas Scholarship and Cadetship Program
            </h2>
          </div>
        </div>
        <div class="row d-flex align-items-center mt-3">
          <div class="col-md-8">
            VERITAS in cooperation with its Principals established a Scholarship Program in 1992 for the educational sponsorship of deserving nautical and Marine Engineering students from local schools.  VERITAS also undertakes the Fast Track Cadetship Program, wherein cadets are picked from the top ten graduates from various maritime schools.  Both scholar-cadet and fast-track cadets participate in the extensive in-house trainings together with Veritas scholar graduates prior and in between vessel assignments to ensure quality performance onboard and successful licensure results.
          </div>
          <div class="col-md-4">
            <img :src="cadet" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <p>
              Each cadet’s training progress is monitored through individual training books wherein detailed theoretical and practical (onboard) exercises are entered and signed by Officer-Trainor.
            </p>
            <p>
              The Scholarship Program and Cadetship Program have since produced more than a hundred scholar-graduates who are now serving onboard VERITAS manned vessels as officers, ratings and cadets. This Scholarship Program has contributed to Veritas pool of outstanding officers.  Both programs are now developing the nucleus of the Company’s fleet of competent Deck and Engine Officers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VeritasCadets",
  data() {
    return {
      'cadet': require(`@/assets/crews/fastTrackCadetTraining.jpg`),
    }
  }
}
</script>

<style scoped>

</style>

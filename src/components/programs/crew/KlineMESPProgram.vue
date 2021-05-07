<template>
  <div class="mesp">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Kline MESP Program
            </h2>
          </div>
        </div>
        <div class="row d-flex align-items-center">
          <div class="col-lg-6 my-3">
            <img :src="crews1" alt="">
          </div>
          <div class="col-lg-6 my-3">
            <p>The <strong>"K" LINE</strong> Maritime Education Scholarship Program <strong>( MESP )</strong> aims to select "K" LINE Scholars from different secondary schools ( high school) in the Philippines and to gather them all in one "K" LINE accredited Maritime School to complete the Bachelorâ€™s degree in Marine Transportation and Marine Engineering. "K" LINE has adopted this strategic measure to prepare its own supply of competent Marine Officers onboard the ever expanding "K" LINE fleet.</p>
            <p class="mb-0">The 8th Batch of "K" MESP "ENTRANCE EXAM" is now scheduled to conduct in six ( 6 ) selected areas in the Philippines and as a member of the "K" LINE Group of Companies, we would like to invite all VERITAS family members to be one of the selected benefactor of this program.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <p class="vmc-text-primary-2 letter-spacing-1 font-weight-bold">The scope of the scholarship program are the following :</p>
            <ul>
              <li>Free four year BSMT and BS Mar-E degree.</li>
              <li>Free tuition fees/ School fees ( Board & lodging/ Set of Uniforms ).</li>
              <li>Free transportation to Cristal-e College Bohol</li>
              <li>Guaranteed Shipboard Training with allowance.</li>
              <li>Structured Professional Career Development Program.</li>
            </ul>
            <p>This program is being handle by <strong>"K" Line Maritime Academy</strong> with the full support and assistance of <strong>VERITAS MARITIME CORPORATION.</strong></p>
          </div>
          <div class="col-md-6">
            <img :src="crews2" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <p class="vmc-text-primary-2 letter-spacing-1 font-weight-bold">Qualifications</p>
            <ul>
              <li>Must be 21 years old and below on June 2016.</li>
              <li>Must be High School graduating student on the time of examination.</li>
              <li>Must be physically and mentally capable to be a seafarer.</li>
              <li>Certified Male.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "KlineMESPProgram",
  data() {
    return {
      'crews1': require(`@/assets/crews/me1.jpg`),
      'crews2': require(`@/assets/crews/me2.jpg`),
    }
  }
}
</script>

<style scoped>

</style>
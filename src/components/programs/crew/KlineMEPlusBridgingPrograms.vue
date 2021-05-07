<template>
  <div class="meplus">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Kline ME+ Bridging Programs
            </h2>
          </div>
        </div>
        <div class="row d-flex align-items-center">
          <div class="col-lg-6 my-3">
            <img :src="crews" alt="">
          </div>
          <div class="col-lg-6 my-3">
            <p><strong>Qualifications</strong></p>
            <ul>
              <li>Must be 25 years old and below on thhe date of examination.</li>
              <li>Must be a licensed Mechanical Engineer.</li>
              <li>No commitment with other scholarship program like DOST.</li>
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
  name: "KlineMEPlusBridgingPrograms",
  data() {
    return {
      'crews': require(`@/assets/crews/me2.jpg`),
    }
  }
}
</script>

<style scoped>

</style>
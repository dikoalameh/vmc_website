<template>
  <div class="container-fluid vmc-py-big">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="h1 vmc-text-primary vmc-heading">
            Veritas Maritime Corporation Top Management Chart
          </h2>
        </div>
      </div>
      <div class="row my-2 d-flex align-items-center text-center text-sm-left">
        <div class="col-sm-2">
          <img :src="vmcContainer" alt="" style="max-width: 250px">
        </div>
        <div class="col-sm-4 my-2">
          <h4 class="font-weight-light mb-1">Ericson Marquez</h4>
          <p class="vmc-text-primary-2 letter-spacing-1 mb-0">Chairman / CEO</p>
        </div>
        <div class="col-sm-2">
          <img :src="vmcContainer" alt="" style="max-width: 250px">
        </div>
        <div class="col-sm-4 my-2">
          <h4 class="font-weight-light mb-1">Francis Jerome Marquez</h4>
          <p class="vmc-text-primary-2 letter-spacing-1 mb-0">President</p>
        </div>
      </div>
      <div class="row my-2 d-flex align-items-center text-center text-sm-left">
        <div class="col-sm-2">
          <img :src="vmcContainer" alt="" style="max-width: 250px">
        </div>
        <div class="col-sm-4 my-2">
          <h4 class="font-weight-light mb-1">C/E Pedrito Fadul</h4>
          <p class="vmc-text-primary-2 letter-spacing-1 mb-0">Vice President for Training & Crew Dev.</p>
        </div>
        <div class="col-sm-2">
          <img :src="vmcContainer" alt="" style="max-width: 250px">
        </div>
        <div class="col-sm-4 my-2">
          <h4 class="font-weight-light mb-1">C/E Joemer Gnilo</h4>
          <p class="vmc-text-primary-2 letter-spacing-1 mb-0">Vice President for Operations</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrganizationalChart',
  data() {
    return {
      'vmcContainer': require(`@/assets/veritas_logo.png`)
    }
  }
};
</script>

<style scoped>

</style>
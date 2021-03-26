<template>
  <div class="row vmc-bg-dark-1 rounded-medium py-4 px-3">
    <div class="col-12">
      <h2 class="h1 vmc-text-primary text-center mb-3" style="font-size: 50px">
        Crew and Fleet Status
      </h2>
    </div>
    <div class="col-md-3 col-sm-6 mb-3 px-2">
      <div class="card border-0 rounded-medium shadow">
        <div class="card-body text-center p-3">
          <h2 class="mb-0 vmc-text-primary" style="font-size: 38px;">2177</h2>
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
          <h2 class="mb-0 vmc-text-primary" style="font-size: 38px;">2077</h2>
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
          <h2 class="mb-0 vmc-text-primary" style="font-size: 38px;">100</h2>
        </div>
        <div class="card-footer text-center vmc-bg-prime-5 p-2"
             style="border-bottom-left-radius: inherit; border-bottom-right-radius: inherit;">
          <p class="mb-0 text-white font-weight-normal" style="letter-spacing: 1px">Off Board</p>
        </div>
      </div>
    </div>
    <div class="col-md-3 col-sm-6 mb-3 px-2">
      <div class="card border-0 rounded-medium shadow">
        <div class="card-body text-center p-3">
          <h2 class="mb-0 vmc-text-primary" style="font-size: 38px;">55</h2>
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
export default {
  name: 'CrewFleetStatus',
};
</script>

<style scoped>

</style>
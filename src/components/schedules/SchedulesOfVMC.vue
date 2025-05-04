<template>
  <div class="vmc-schedule">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Veritas Schedules
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 my-2">
            <img :src="section1" alt="" class="border" style="height: auto; width: 100%;">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SchedulesOfVMC",
  data() {
    return  {
      section1 : require(`@/assets/schedules/2025/bicolAllottee.jpg`),
    }
  }
}
</script>

<style scoped>

</style>

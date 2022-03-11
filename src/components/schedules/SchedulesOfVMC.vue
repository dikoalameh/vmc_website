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
        <div class="row">
          <div class="col-md-12">
            <h4 class="font-weight-normal mb-0">Training Schedule</h4>
          </div>
          <div class="col-md-12 my-2" v-for="schedule in trainingScheds" v-bind:key="schedule">
            <img :src="schedule" alt="" class="border">
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
      trainingScheds: [
        // require(`@/assets/schedules/2021/training/schedule1_7-12-2021.jpg`),
        // require(`@/assets/schedules/2021/training/schedule2_7-12-2021.jpg`),
        require(`@/assets/schedules/2022/training/Matrix-2022.jpg`),
      ]
    }
  }
}
</script>

<style scoped>

</style>

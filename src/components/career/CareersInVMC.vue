<template>
  <div class="vmc-careers">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Veritas Careers
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row">
          <div class="col-md-6 my-2">
            <img :src="section1" alt="" class="border" style="height: auto; width: 100%;">
          </div>
          <div class="col-md-6 my-2">
            <img :src="section2" alt="" class="border" style="height: auto; width: 100%;">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CareersInVMC",
  data(){
    return {
      section1 : require(`@/assets/careers/2025/vmcHiring_04222025.jpg`),
      section2 : require(`@/assets/careers/2025/vmcHiring_03062025.jpg`),
    }
  }

}
</script>

<style scoped>

</style>

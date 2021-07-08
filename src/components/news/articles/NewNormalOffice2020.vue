<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              New Normal Office 2020
            </h2>
            <p class="vmc-text-primary-2 letter-spacing-1 mb-0">
              By Veritas Admin — July 8, 2021
            </p>
          </div>
        </div>
        <div class="row">
<!--          <div class="col-md-12">-->
<!--            <p class="mt-2">Veritas readiness in office/on-site work</p>-->
<!--          </div>-->
          <div class="col-md-4 my-2" v-for="office in offices" v-bind:key="office">
            <img :src="office" alt="" class="border">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewNormalOffice2020',
  data() {
    return {
      offices: [
        require(`@/assets/news/2020/newnormaloffice/office1_7-8-2021.jpg`),
        require(`@/assets/news/2020/newnormaloffice/office2_7-8-2021.jpg`),
        require(`@/assets/news/2020/newnormaloffice/office3_7-8-2021.jpg`),
        require(`@/assets/news/2020/newnormaloffice/office4_7-8-2021.jpg`),
        require(`@/assets/news/2020/newnormaloffice/office5_7-8-2021.jpg`),
        require(`@/assets/news/2020/newnormaloffice/office6_7-8-2021.jpg`),
        require(`@/assets/news/2020/newnormaloffice/office7_7-8-2021.jpg`),
      ],
    }
  }
};
</script>

<style scoped>

</style>

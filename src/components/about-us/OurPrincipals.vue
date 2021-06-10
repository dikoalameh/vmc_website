<template>
  <div class="principals">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <h2 class="h1 vmc-text-primary vmc-heading text-center">
          Our Principals
        </h2>
        <div class="row my-3 d-flex align-items-center">
          <div class="col-lg-4">
            <img :src="imageContainer" alt="">
          </div>
          <div class="col-lg-8 my-3">
            <h4 class="font-weight-light mb-0">"K" Line Roro Bulk Ship Management Co., Ltd. (KRBS)</h4>
            <p class="vmc-text-primary-2 mb-1">( 16F Marc 2000 Tower 1973 Taft Ave Corner, San Andres St, Malate, Manila )</p>
            <p class="font-weight-light mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row my-3 d-flex align-items-center">
          <div class="col-lg-4 order-lg-9">
            <img :src="imageContainer" alt="">
          </div>
          <div class="col-lg-8 order-lg-0 my-3">
            <h4 class="font-weight-light mb-0">Kagoshima Senpaku Kaisha Ltd</h4>
            <p class="vmc-text-primary-2 mb-1">( 2-2,Taniyamako 1-Chome,Kagoshima,KAGOSHIMA,891-0131,Japan )</p>
            <p class="font-weight-light mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row my-3 d-flex align-items-center">
          <div class="col-lg-4">
            <img :src="imageContainer" alt="">
          </div>
          <div class="col-lg-8 my-3">
            <h4 class="font-weight-light mb-0">Sansho Kaiun Co., Ltd</h4>
            <p class="vmc-text-primary-2 mb-1">( Tatsumi Bldg. 3-8-7, Iidabashi, Chiyoda-Ku, Tokyo, 102-0072, Japan )</p>
            <p class="font-weight-light mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row my-3 d-flex align-items-center">
          <div class="col-lg-4 order-lg-9">
            <img :src="imageContainer" alt="">
          </div>
          <div class="col-lg-8 order-lg-0 my-3">
            <h4 class="font-weight-light mb-0">Ft Logistics Ltd</h4>
            <p class="vmc-text-primary-2 mb-1">( 2714 Foster Ridge Rd Ne, Atlanta, Georgia, United States. )</p>
            <p class="font-weight-light mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurPrincipals",
  data() {
    return {
      'imageContainer': require(`@/assets/vessel_drive_green.jpg`)
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="allottees">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Allottees
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light mb-3">Bicol</h4>
          </div>
          <div class="col-md-4 col-sm-6">
            <img :src="bicol1" alt="">
            <p class="vmc-text-primary-2 letter-spacing-1 mt-1 text-center">June 24, 2017</p>
          </div>
          <div class="col-md-4 col-sm-6">
            <img :src="bicol2" alt="">
            <p class="vmc-text-primary-2 letter-spacing-1 mt-1 text-center">2015</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light mb-3">Davao</h4>
          </div>
          <div class="col-md-4 col-sm-6">
            <img :src="davao1" alt="">
            <p class="vmc-text-primary-2 letter-spacing-1 mt-1 text-center">February 19, 2017</p>
          </div>
          <div class="col-md-4 col-sm-6">
            <img :src="davao2" alt="">
            <p class="vmc-text-primary-2 letter-spacing-1 mt-1 text-center">2015</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light mb-3">Cagayan De Oro</h4>
          </div>
          <div class="col-md-4 col-sm-6">
            <img :src="cagayan1" alt="">
            <p class="vmc-text-primary-2 letter-spacing-1 mt-1 text-center">February 25, 2017</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light mb-3">Bohol</h4>
          </div>
          <div class="col-md-4 col-sm-6">
            <img :src="bohol1" alt="">
            <p class="vmc-text-primary-2 letter-spacing-1 mt-1 text-center">Nov. 13, 2016</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light mb-3">Cebu</h4>
          </div>
          <div class="col-md-4 col-sm-6">
            <img :src="cebu1" alt="">
            <p class="vmc-text-primary-2 letter-spacing-1 mt-1 text-center">Nov. 12, 2016</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light mb-3">Bacolod</h4>
          </div>
          <div class="col-md-4 col-sm-6">
            <img :src="bacolod1" alt="">
            <p class="vmc-text-primary-2 letter-spacing-1 mt-1 text-center">Nov. 19, 2016</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light mb-3">Iloilo</h4>
          </div>
          <div class="col-md-4 col-sm-6">
            <img :src="iloilo1" alt="">
            <p class="vmc-text-primary-2 letter-spacing-1 mt-1 text-center">Nov. 20, 2016</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light mb-3">Greater Manila</h4>
          </div>
          <div class="col-md-4 col-sm-6">
            <img :src="gma1" alt="">
            <p class="vmc-text-primary-2 letter-spacing-1 mt-1 text-center">Dec 10, 2016	</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Allottees',
  data() {
    return {
      'bicol1': require(`@/assets/programs/allottees/2017_bicol.jpg`),
      'bicol2': require(`@/assets/programs/allottees/2015_bicol.jpg`),
      'davao1': require(`@/assets/programs/allottees/2017_dvo.jpg`),
      'davao2': require(`@/assets/programs/allottees/2015_davao.jpg`),
      'cagayan1': require(`@/assets/programs/allottees/2017_cdo.jpg`),
      'bohol1': require(`@/assets/programs/allottees/2016_alloottees_bohol.jpg`),
      'cebu1': require(`@/assets/programs/allottees/2016_alloottees_cebu.jpg`),
      'bacolod1': require(`@/assets/programs/allottees/2016_alloottees_bacolod.jpg`),
      'iloilo1': require(`@/assets/programs/allottees/2016_alloottees_iloilo.jpg`),
      'gma1': require(`@/assets/programs/allottees/2016_alloottees_gma.jpg`),

    }
  }
};
</script>

<style scoped>

</style>
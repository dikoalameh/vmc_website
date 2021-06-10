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
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Bicol`"
                                 :thumbnail="bicol[0]"
                                 :images="bicol" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Cagayan De Oro`"
                                 :thumbnail="cagayan[0]"
                                 :images="cagayan" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Davao`"
                                 :thumbnail="davao[0]"
                                 :images="davao" />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Bohol`"
                                 :thumbnail="bohol[0]"
                                 :images="bohol" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Cebu`"
                                 :thumbnail="cebu[0]"
                                 :images="cebu" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Bacolod`"
                                 :thumbnail="bacolod[0]"
                                 :images="bacolod" />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Iloilo`"
                                 :thumbnail="iloilo[0]"
                                 :images="iloilo" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Greater Manila`"
                                 :thumbnail="manila[0]"
                                 :images="manila" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoGalleryModal from '../app-layout/PhotoGalleryModal';

export default {
  name: 'Allottees',
  components: {
    'photo-gallery-modal' : PhotoGalleryModal
  },
  data() {
    return {
      bicol: [
        require(`@/assets/programs/allottees/2017_bicol.jpg`),
        require(`@/assets/programs/allottees/2015_bicol.jpg`),
      ],
      cagayan: [
        require(`@/assets/programs/allottees/2017_cdo.jpg`),
      ],
      davao: [
        require(`@/assets/programs/allottees/2017_dvo.jpg`),
        require(`@/assets/programs/allottees/2015_davao.jpg`),
      ],
      bohol: [
        require(`@/assets/programs/allottees/2016_alloottees_bohol.jpg`),
      ],
      cebu: [
        require(`@/assets/programs/allottees/2016_alloottees_cebu.jpg`),
      ],
      bacolod: [
        require(`@/assets/programs/allottees/2016_alloottees_bacolod.jpg`),
      ],
      iloilo: [
        require(`@/assets/programs/allottees/2016_alloottees_iloilo.jpg`),
      ],
      manila: [
        require(`@/assets/programs/allottees/2016_alloottees_gma.jpg`),
      ]
    }
  }
};
</script>

<style scoped>

</style>

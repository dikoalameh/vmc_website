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
            <h4 class="font-weight-light">
              2023 Allottees Gathering
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Allotte Party Bacolod 2023`"
                                 :thumbnail="aParty111523[0]"
                                 :images="aParty111523" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Allotte Party Bohol 2023`"
                                 :thumbnail="aParty110923[0]"
                                 :images="aParty110923" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Allotte Party CDO 2023`"
                                 :thumbnail="aParty091123[0]"
                                 :images="aParty091123" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Allotte Party Cebu 2023`"
                                 :thumbnail="aParty110523[0]"
                                 :images="aParty110523" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Allotte Party Davao 2023`"
                                 :thumbnail="aParty032523[0]"
                                 :images="aParty032523" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Allotte Party GMA 2023`"
                                 :thumbnail="aParty121223[0]"
                                 :images="aParty121223" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Allotte Party ILOILO 2023`"
                                 :thumbnail="aParty111223[0]"
                                 :images="aParty111223" />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light">
              2022 Allottees Gathering
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Allotte Party 2022`"
                                 :thumbnail="aParty120822[0]"
                                 :images="aParty120822" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Allottees Medical Mission & Humanitarian Assistance`"
                                 :thumbnail="medmission2022[0]"
                                 :images="medmission2022" />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light">
              2020 Allottees Gathering via Zoom
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`All Allottees`"
                                 :thumbnail="all2020[0]"
                                 :images="all2020" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Iloilo`"
                                 :thumbnail="iloilo2020[0]"
                                 :images="iloilo2020" />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light">
              2019 Allottees Gathering
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Bacolod`"
                                 :thumbnail="bacolod2019[0]"
                                 :images="bacolod2019" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Bohol`"
                                 :thumbnail="bohol2019[0]"
                                 :images="bohol2019" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Cebu`"
                                 :thumbnail="cebu2019[0]"
                                 :images="cebu2019" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Davao`"
                                 :thumbnail="davao2019[0]"
                                 :images="davao2019" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Iloilo`"
                                 :thumbnail="iloilo2019[0]"
                                 :images="iloilo2019" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Manila`"
                                 :thumbnail="manila2019[0]"
                                 :images="manila2019" />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light">
              2018 Allottees Gathering
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Bacolod`"
                                 :thumbnail="bacolod2018[0]"
                                 :images="bacolod2018" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Bicol`"
                                 :thumbnail="bicol2018[0]"
                                 :images="bicol2018" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Bohol`"
                                 :thumbnail="bohol2018[0]"
                                 :images="bohol2018" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`CDO`"
                                 :thumbnail="cdo2018[0]"
                                 :images="cdo2018" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Cebu`"
                                 :thumbnail="cebu2018[0]"
                                 :images="cebu2018" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Davao`"
                                 :thumbnail="davao2018[0]"
                                 :images="davao2018" />
          </div>
          <div class="col-md-4 col-sm-6">
            <photo-gallery-modal :caption="`Iloilo`"
                                 :thumbnail="iloilo2018[0]"
                                 :images="iloilo2018" />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light">
              2015, 2016, 2017 Allottees Gathering
            </h4>
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
      aParty111223: [
        require(`@/assets/programs/allottees/2023/iloilo/aParty_111223_A.jpg`),
        require(`@/assets/programs/allottees/2023/iloilo/aParty_111223_B.jpg`),
        require(`@/assets/programs/allottees/2023/iloilo/aParty_111223_C.jpg`),
        require(`@/assets/programs/allottees/2023/iloilo/aParty_111223_D.jpg`),
        require(`@/assets/programs/allottees/2023/iloilo/aParty_111223_E.jpg`),
        require(`@/assets/programs/allottees/2023/iloilo/aParty_111223_F.jpg`),
        require(`@/assets/programs/allottees/2023/iloilo/aParty_111223_G.jpg`),
        require(`@/assets/programs/allottees/2023/iloilo/aParty_111223_H.jpg`),
      ],
      aParty121223: [
        require(`@/assets/programs/allottees/2023/gma/aParty_121223_A.jpg`),
        require(`@/assets/programs/allottees/2023/gma/aParty_121223_B.jpg`),
        require(`@/assets/programs/allottees/2023/gma/aParty_121223_C.jpg`),
        require(`@/assets/programs/allottees/2023/gma/aParty_121223_D.jpg`),
        require(`@/assets/programs/allottees/2023/gma/aParty_121223_E.jpg`),
        require(`@/assets/programs/allottees/2023/gma/aParty_121223_F.jpg`),
        require(`@/assets/programs/allottees/2023/gma/aParty_121223_G.jpg`),
        require(`@/assets/programs/allottees/2023/gma/aParty_121223_H.jpg`),
        require(`@/assets/programs/allottees/2023/gma/aParty_121223_I.jpg`),
        require(`@/assets/programs/allottees/2023/gma/aParty_121223_J.jpg`),
      ],
      aParty032523: [
        require(`@/assets/programs/allottees/2023/davao/aParty_032523_A.jpg`),
        require(`@/assets/programs/allottees/2023/davao/aParty_032523_B.jpg`),
        require(`@/assets/programs/allottees/2023/davao/aParty_032523_C.jpg`),
        require(`@/assets/programs/allottees/2023/davao/aParty_032523_D.jpg`),
        require(`@/assets/programs/allottees/2023/davao/aParty_032523_E.jpg`),
        require(`@/assets/programs/allottees/2023/davao/aParty_032523_F.jpg`),
        require(`@/assets/programs/allottees/2023/davao/aParty_032523_G.jpg`),
        require(`@/assets/programs/allottees/2023/davao/aParty_032523_H.jpg`),
        require(`@/assets/programs/allottees/2023/davao/aParty_032523_I.jpg`),
        require(`@/assets/programs/allottees/2023/davao/aParty_032523_J.jpg`),
      ],
      aParty110523: [
        require(`@/assets/programs/allottees/2023/cebu/aParty_110523_A.jpg`),
        require(`@/assets/programs/allottees/2023/cebu/aParty_110523_B.jpg`),
        require(`@/assets/programs/allottees/2023/cebu/aParty_110523_C.jpg`),
        require(`@/assets/programs/allottees/2023/cebu/aParty_110523_D.jpg`),
        require(`@/assets/programs/allottees/2023/cebu/aParty_110523_E.jpg`),
        require(`@/assets/programs/allottees/2023/cebu/aParty_110523_F.jpg`),
        require(`@/assets/programs/allottees/2023/cebu/aParty_110523_G.jpg`),
        require(`@/assets/programs/allottees/2023/cebu/aParty_110523_H.jpg`),
        require(`@/assets/programs/allottees/2023/cebu/aParty_110523_I.jpg`),
        require(`@/assets/programs/allottees/2023/cebu/aParty_110523_J.jpg`),
        require(`@/assets/programs/allottees/2023/cebu/aParty_110523_K.jpg`),
      ],
      aParty091123: [
        require(`@/assets/programs/allottees/2023/cdo/aParty_091123_A.jpg`),
        require(`@/assets/programs/allottees/2023/cdo/aParty_091123_B.jpg`),
        require(`@/assets/programs/allottees/2023/cdo/aParty_091123_C.jpg`),
        require(`@/assets/programs/allottees/2023/cdo/aParty_091123_D.jpg`),
        require(`@/assets/programs/allottees/2023/cdo/aParty_091123_E.jpg`),
        require(`@/assets/programs/allottees/2023/cdo/aParty_091123_F.jpg`),
        require(`@/assets/programs/allottees/2023/cdo/aParty_091123_G.jpg`),
        require(`@/assets/programs/allottees/2023/cdo/aParty_091123_H.jpg`),
      ],
      aParty110923: [
        require(`@/assets/programs/allottees/2023/bohol/aParty_110923_A.jpg`),
        require(`@/assets/programs/allottees/2023/bohol/aParty_110923_B.jpg`),
        require(`@/assets/programs/allottees/2023/bohol/aParty_110923_C.jpg`),
        require(`@/assets/programs/allottees/2023/bohol/aParty_110923_D.jpg`),
        require(`@/assets/programs/allottees/2023/bohol/aParty_110923_E.jpg`),
        require(`@/assets/programs/allottees/2023/bohol/aParty_110923_F.jpg`),
        require(`@/assets/programs/allottees/2023/bohol/aParty_110923_G.jpg`),
        require(`@/assets/programs/allottees/2023/bohol/aParty_110923_H.jpg`),
        require(`@/assets/programs/allottees/2023/bohol/aParty_110923_I.jpg`),
        require(`@/assets/programs/allottees/2023/bohol/aParty_110923_J.jpg`),
      ],
      aParty111523: [
        require(`@/assets/programs/allottees/2023/bacolod/aParty_111523_A.jpg`),
        require(`@/assets/programs/allottees/2023/bacolod/aParty_111523_B.jpg`),
        require(`@/assets/programs/allottees/2023/bacolod/aParty_111523_C.jpg`),
        require(`@/assets/programs/allottees/2023/bacolod/aParty_111523_D.jpg`),
        require(`@/assets/programs/allottees/2023/bacolod/aParty_111523_E.jpg`),
        require(`@/assets/programs/allottees/2023/bacolod/aParty_111523_F.jpg`),
        require(`@/assets/programs/allottees/2023/bacolod/aParty_111523_G.jpg`),
        require(`@/assets/programs/allottees/2023/bacolod/aParty_111523_H.jpg`),
        require(`@/assets/programs/allottees/2023/bacolod/aParty_111523_I.jpg`),
        require(`@/assets/programs/allottees/2023/bacolod/aParty_111523_J.jpg`),
      ],
      aParty120822: [
        require(`@/assets/programs/allottees/2022/party/aParty_1208_A.jpg`),
        require(`@/assets/programs/allottees/2022/party/aParty_1208_B.jpg`),
        require(`@/assets/programs/allottees/2022/party/aParty_1208_C.jpg`),
        require(`@/assets/programs/allottees/2022/party/aParty_1208_D.jpg`),
        require(`@/assets/programs/allottees/2022/party/aParty_1208_E.jpg`),
        require(`@/assets/programs/allottees/2022/party/aParty_1208_F.jpg`),
        require(`@/assets/programs/allottees/2022/party/aParty_1208_G.jpg`),
        require(`@/assets/programs/allottees/2022/party/aParty_1208_H.jpg`),
      ],
      medmission2022: [
        require(`@/assets/programs/allottees/2022/medmission/medMission_041022_A.jpg`),
        require(`@/assets/programs/allottees/2022/medmission/medMission_041022_B.jpg`),
        require(`@/assets/programs/allottees/2022/medmission/medMission_041022_C.jpg`),
        require(`@/assets/programs/allottees/2022/medmission/medMission_041022_D.jpg`),
        require(`@/assets/programs/allottees/2022/medmission/medMission_041022_E.jpg`),
        require(`@/assets/programs/allottees/2022/medmission/medMission_041022_F.jpg`),
        require(`@/assets/programs/allottees/2022/medmission/medMission_041022_G.jpg`),
        require(`@/assets/programs/allottees/2022/medmission/medMission_041022_H.jpg`),
        require(`@/assets/programs/allottees/2022/medmission/medMission_041022_I.jpg`),
      ],
      all2020: [
        require(`@/assets/programs/allottees/2020/all_a_70121.jpg`),
        require(`@/assets/programs/allottees/2020/all_b_70121.jpg`),
        require(`@/assets/programs/allottees/2020/all_c_70121.jpg`),
        require(`@/assets/programs/allottees/2020/all_d_70121.jpg`),
        require(`@/assets/programs/allottees/2020/all_e_70121.jpg`),
      ],
      iloilo2020: [
        require(`@/assets/programs/allottees/2020/iloilo_a_70121.jpg`),
        require(`@/assets/programs/allottees/2020/iloilo_b_70121.jpg`),
        require(`@/assets/programs/allottees/2020/iloilo_c_70121.jpg`),
      ],
      bacolod2019: [
        require(`@/assets/programs/allottees/2019/bacolod/allottee1_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2019/bacolod/allottee2_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2019/bacolod/allottee3_7-8-2021.jpg`),
      ],
      bohol2019: [
        require(`@/assets/programs/allottees/2019/bohol/allottee1_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2019/bohol/allottee2_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2019/bohol/allottee3_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2019/bohol/allottee4_7-8-2021.jpg`)
      ],
      cebu2019: [
        require(`@/assets/programs/allottees/2019/cebu/allottee1_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2019/cebu/allottee2_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2019/cebu/allottee3_7-8-2021.jpg`)
      ],
      davao2019: [
        require(`@/assets/programs/allottees/2019/davao/allottee1_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2019/davao/allottee2_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2019/davao/allottee3_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2019/davao/allottee4_7-8-2021.jpg`)
      ],
      iloilo2019: [
        require(`@/assets/programs/allottees/2019/iloilo/allottee1_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2019/iloilo/allottee2_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2019/iloilo/allottee3_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2019/iloilo/allottee4_7-8-2021.jpg`)
      ],
      manila2019: [
        require(`@/assets/programs/allottees/2019/manila/allottee1_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2019/manila/allottee2_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2019/manila/allottee3_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2019/manila/allottee4_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2019/manila/allottee5_7-8-2021.jpg`)
      ],
      bacolod2018: [
        require(`@/assets/programs/allottees/2018/bacolod/allottee1_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2018/bacolod/allottee2_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2018/bacolod/allottee3_7-8-2021.jpg`)
      ],
      bicol2018: [
        require(`@/assets/programs/allottees/2018/bicol/allottee1_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2018/bicol/allottee2_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2018/bicol/allottee3_7-8-2021.jpg`)
      ],
      bohol2018: [
        require(`@/assets/programs/allottees/2018/bohol/allottee1_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2018/bohol/allottee2_7-8-2021.jpg`)
      ],
      cdo2018: [
        require(`@/assets/programs/allottees/2018/cdo/allottee1_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2018/cdo/allottee2_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2018/cdo/allottee3_7-8-2021.jpg`)
      ],
      cebu2018: [
        require(`@/assets/programs/allottees/2018/cebu/allottee1_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2018/cebu/allottee2_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2018/cebu/allottee3_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2018/cebu/allottee4_7-8-2021.jpg`)
      ],
      davao2018: [
        require(`@/assets/programs/allottees/2018/davao/allottee1_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2018/davao/allottee2_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2018/davao/allottee3_7-8-2021.jpg`)
      ],
      iloilo2018: [
        require(`@/assets/programs/allottees/2018/iloilo/allottee1_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2018/iloilo/allottee2_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2018/iloilo/allottee3_7-8-2021.jpg`),
        require(`@/assets/programs/allottees/2018/iloilo/allottee4_7-8-2021.jpg`)
      ],
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

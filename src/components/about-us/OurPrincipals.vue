<template>
  <div class="principals">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <h2 class="h1 vmc-text-primary vmc-heading text-center">
          Our Principals
        </h2>
        <div class="row my-3 d-flex align-items-center">
          <div class="col-lg-4">
            <img :src="krbs" alt="">
          </div>
          <div class="col-lg-8 my-3">
            <h4 class="font-weight-light mb-0">"K" Line RoRo Bulk Ship Management Co., Ltd. (KRBS)</h4>
            <p class="mb-1 small">
              2-2-3, Kaigan-Dori, Chuo-Ki, Kobe
              650-0024, Japan —
              Tel: 078 334-9700 / Fax: 078-334-9719
            </p>
<!--            <p class="vmc-text-primary-2 mb-1">President : EIIJI KADONO</p>-->
            <p class="font-weight-light mb-0">
              The company was established as a shipowner in 1917 and has it’s headquarters in Kobe, Japan. Today the company’s main activities involve ship management. Together with the group companies KRBS-ROHQ in Philippines, Stargate Shipmanagement GmbH in Germany, Stargate Maritime Ltd. in Bulgaria and Stargate Ukraine, the KRBS group manages more than 100 vessels and over 2000 seafarers.            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row my-3 d-flex align-items-center">
          <div class="col-lg-4 order-lg-9">
            <img :src="kagoshima" alt="">
          </div>
          <div class="col-lg-8 order-lg-0 my-3">
            <h4 class="font-weight-light mb-0">KAGOSHIMA SENPAKU KAISHA, LTD. – Affiliate of Fujitrans</h4>
            <p class="mb-1 small">
              37-75, Shiomi-cho, Minato-ku, Nagoya, AICHI, 455-0028, Japan —
              TEL 81-52-614-5870 / FAX 81-52-614-5867
            </p>
<!--            <p class="vmc-text-primary-2 mb-1">President: CAPT. KAZUMI TOMI</p>-->
<!--            <p class="font-weight-light mb-0">-->
<!--              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.-->
<!--            </p>-->
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row my-3 d-flex align-items-center">
          <div class="col-lg-4">
            <img :src="ftlogistics" alt="">
          </div>
          <div class="col-lg-8 my-3">
            <h4 class="font-weight-light mb-0">FT LOGISTICS (ASIA) PTE. LTD. – Affiliate of Fujitrans</h4>
            <p class="small mb-1">
              8 Shenton way, # 07-04 / 05 AXA Tower, Singapore 068811 —
              Tel: + 65-6333-8595 / Fax: + 65-6836-9258
            </p>
<!--            <p class="vmc-text-primary-2 mb-1">Chief Executive Officer: MAKOTO KATO</p>-->
<!--            <p class="font-weight-light mb-0">-->
<!--              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.-->
<!--            </p>-->
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row my-3 d-flex align-items-center">
<!--          <div class="col-lg-4 order-lg-9">-->
<!--            <img :src="sansho" alt="">-->
<!--          </div>-->
<!--          <div class="col-lg-8 order-lg-0 my-3">-->
          <div class="col-lg-12 order-lg-0 my-3">
            <h4 class="font-weight-light mb-0">SANSHO KAIUN CO., LTD. </h4>
            <p class="mb-1 small">
              2f Hikari Bldg, 3-10-3 Chome  Nihonbashi-Kabayacho Chuo-ku, Tokyo Japan
              <br/> —
              Tel: + 81 03 3663 5191 / Fax: +81 03 3663 5193
            </p>
<!--            <p class="vmc-text-primary-2 mb-1">President: KAORU MUKAI</p>-->
            <p class="font-weight-light mb-0">
              Sansho Kaiun - SANSHO KAIUN COMPANY, LTD. Manages operation of ocean going chemical tankers and oil tankers, under the following basic policy.
              <br/>
              "Our objective is to ensure safety of human life, vessel and its cargo,
              brand to protect the environment by pursuing no accident,
              no incident and zero spills. Continuous reduction of Carbon Dioxide emissions"
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
      'krbs': require(`@/assets/principals/kline_krbs_logo.jpg`),
      'kagoshima': require(`@/assets/principals/fujitrans_logo.jpg`),
      'ftlogistics': require(`@/assets/principals/fujitrans_logo.jpg`),
      'sansho': require(`@/assets/principals/sancho_kaiun_logo.jpg`),
    }
  }
}
</script>

<style scoped>

</style>

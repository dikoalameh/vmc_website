<template>
  <div class="container">
    <h2 class="h1 vmc-text-primary text-center mb-3 vmc-heading">
      Memberships and Affiliations
    </h2>
    <carousel :responsive="{
        0:{items:2,nav:false},
        500:{items:3,nav:false},
        992:{items:5,nav:false}}"
        :autoplay="true"
    >
      <div class="item">
        <a href="https://krbsgroup.com/" target="_blank" >
          <img :src="kline" alt="KLINE">
        </a>
      </div>
      <div class="item">
        <a href="https://www.prc.gov.ph/" target="_blank" >
          <img :src="prc" alt="PRC">
        </a>
      </div>
      <div class="item">
        <a href="https://marina.gov.ph/" target="_blank" >
          <img :src="marina" alt="MARINA">
        </a>
      </div>
      <div class="item">
        <a href="http://immajpjmccfoundation.org/" target="_blank" >
          <img :src="pjmcc" alt="PJMCC">
        </a>
      </div>
      <div class="item">
        <img :src="pamas" alt="PAMAS">
      </div>
      <div class="item">
        <a href="https://pdosph.com/" target="_blank" >
          <img :src="pdos" alt="PDOS">
        </a>
      </div>
    </carousel>
  </div>
</template>

<script>
import carousel from 'v-owl-carousel'
export default {
  name: "MembershipAffiliations",
  components: {
    carousel
  },
  data() {
    return {
      'kline' :require(`@/assets/affiliates/klma.jpg`),
      'prc' :require(`@/assets/affiliates/prc.jpg`),
      'marina' :require(`@/assets/affiliates/marina.jpg`),
      'pjmcc' :require(`@/assets/affiliates/pjmcc.jpg`),
      'pamas' :require(`@/assets/affiliates/pamas.jpg`),
      'pdos' :require(`@/assets/affiliates/pdos.jpg`),
    }
  },
}
</script>

<style scoped>
.item {
  margin: .75rem;
  box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
}
.item img, .item a {
  width: 100%;
  height: auto;
  margin: auto;
  border-radius:inherit;
}
</style>

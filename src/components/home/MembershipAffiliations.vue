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
      <div class="item" style="margin-left: 0"><img :src="affiliateKLMA" alt="KLMA"></div>
      <div class="item"><img :src="affiliatePRC" alt="PRC"></div>
      <div class="item"><img :src="affiliateMARINA" alt="MARINA"></div>
      <div class="item"><img :src="affiliatePJMCC" alt="PJMCC"></div>
      <div class="item"><img :src="affiliatePAMAS" alt="PAMAS"></div>
<!--      <div class="item"><img :src="affiliateUKAS" alt="UKAS"></div>-->
      <div class="item" style="margin-right: 0"><img :src="affiliatePDOS" alt="PDOS"></div>
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
      'affiliateKLMA' :require(`@/assets/affiliates/klma.jpg`),
      'affiliateMARINA' :require(`@/assets/affiliates/marina.jpg`),
      'affiliatePRC' :require(`@/assets/affiliates/prc.jpg`),
      'affiliatePJMCC' :require(`@/assets/affiliates/pjmcc.jpg`),
      'affiliatePAMAS' :require(`@/assets/affiliates/pamas.jpg`),
      'affiliatePDOS' :require(`@/assets/affiliates/pdos.jpg`),
      // 'affiliateUKAS' :require(`@/assets/affiliates/ukas.jpg`),
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
.item img {
  width: 100%;
  height: auto;
  margin: auto;
  border-radius:inherit;
}
</style>
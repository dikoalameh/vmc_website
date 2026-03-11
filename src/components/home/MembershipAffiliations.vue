<template>
  <div class="container">
    <h2 class="h1 vmc-text-primary text-center mb-3 vmc-heading">
      Memberships and Affiliations
    </h2>

    <div v-if="cms.affiliates && cms.affiliates.length > 0">

      <carousel :responsive="{
        0: { items: 2, nav: false },
        500: { items: 3, nav: false },
        992: { items: 5, nav: false }
      }" :autoplay="true" :dots="false" :nav="false" :margin="20" :loop="cms.affiliates.length > 5">
        <div v-for="(partner, index) in cms.affiliates" :key="index" class="item text-center">
          <img :src="partner.image || 'https://via.placeholder.com/150?text=Logo'" alt="Affiliate Logo"
            class="img-fluid grayscale-hover">
        </div>
      </carousel>

    </div>

    <div v-else class="text-center py-4">
      <p class="text-muted">No content displayed</p>
    </div>

  </div>
</template>

<script>
import { cmsMixin } from '@/mixins/cmsMixin';
import carousel from 'v-owl-carousel';

export default {
  name: "MembershipAffiliations",
  mixins: [cmsMixin],
  components: {
    carousel
  }
}
</script>

<style scoped>
/* RESTORED: Shadow and Radius */
.item {
  margin: .75rem;
  box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.16);
  /* Shadow is back */
  border-radius: 10px;
  /* Radius is back */
  background: white;
  /* Added white bg so shadow is visible if logo is transparent */
  overflow: hidden;
  /* Ensures image doesn't poke out of rounded corners */
}

.item img,
.item a {
  width: 100%;
  height: auto;
  margin: auto;
  display: block;
}

/* .grayscale-hover {
  filter: grayscale(100%);
  transition: filter 0.3s ease;
  opacity: 0.7;
}

.grayscale-hover:hover {
  filter: grayscale(0%);
  opacity: 1;
} */
</style>
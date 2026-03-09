<template>
  <div class="principals">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <h2 class="h1 vmc-text-primary vmc-heading text-center">
          Our Principals
        </h2>
        <div v-for="(principal, index) in (cms.principalsList || [])" :key="index"
          :class="['container-fluid w-100', index % 2 !== 0 ? 'vmc-bg-dark-1' : '']">
          <div class="row my-3 d-flex align-items-center">
            <div :class="['col-lg-4', index % 2 !== 0 ? 'order-lg-9' : '']">
              <img v-if="principal.logo" :src="principal.logo" alt="Principal Logo" class="img-fluid"
                style="max-width: 100%; height: auto;">
            </div>
            <div :class="['col-lg-8 my-3', index % 2 !== 0 ? 'order-lg-0' : '']">
              <h4 class="font-weight-normal vmc-text-primary-2 mb-0">{{ principal.name }}</h4>
              <p class="mb-1 small" v-if="principal.address.length === 0">
                <span>No address, contacts input</span>
              </p>
              <p v-else class="mb-1 small">
                {{ principal.address }}
                <span v-if="principal.address && (principal.tel || principal.fax)"> — </span>
                <span v-if="principal.tel">Tel: {{ principal.tel }}</span>
                <span v-if="principal.tel && principal.fax"> / </span>
                <span v-if="principal.fax">Fax: {{ principal.fax }}</span>
              </p>
              <p class="font-weight-light mb-0" style="white-space: pre-wrap;">{{ principal.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!cms.principalsList || cms.principalsList.length === 0" class="container text-center pb-5">
      <p class="text-muted">No principals added yet.</p>
    </div>

  </div>
</template>

<script>
import { cmsMixin } from '@/mixins/cmsMixin';

export default {
  name: "OurPrincipals",
  mixins: [cmsMixin]
  // Note: We removed data() because the images/text now come from the Database
}
</script>

<style scoped></style>
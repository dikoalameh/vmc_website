<template>
  <!-- The v-if completely hides this section if no image is uploaded -->
  <div class="container-fluid vmc-py-big" v-if="cms.orgChartImg">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="h1 vmc-text-primary vmc-heading mb-4">
            Veritas Maritime Corporation Positions Organizational Chart
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <img :src="cms.orgChartImg" alt="Organizational Chart" class="img-fluid rounded shadow-sm">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cmsMixin } from '@/mixins/cmsMixin';

export default {
  name: 'OrganizationalChart',
  mixins: [cmsMixin] // Connects the component to your MongoDB database
};
</script>

<style scoped>
/* Added spacing to make the chart look better if needed */
</style>
<template>
  <div class="vmc-careers">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">Veritas Careers</h2>
          </div>
        </div>
      </div>
    </div>
    
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        
        <div class="row justify-content-center">
          
          <div 
            class="col-md-6 my-2" 
            v-for="(item, index) in (cms.careerImages || [])" 
            :key="index"
          >
            <!-- Replaced raw <img> with your PhotoGalleryModal component -->
            <photo-gallery-modal 
                v-if="item.image"
                :thumbnail="item.image"
                :images="[item.image]" 
            />
          </div>

          <div 
            class="col-12 text-center text-white"
            v-if="!cms.careerImages || cms.careerImages.length === 0" 
          >
            <p class="no-schedule-msg">No career available.</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cmsMixin } from '@/mixins/cmsMixin';
import PhotoGalleryModal from '@/components/programs/app-layout/PhotoGalleryModal';

export default {
  name: "CareersInVMC",
  mixins: [cmsMixin],
  components: {
    'photo-gallery-modal': PhotoGalleryModal
  }
}
</script>
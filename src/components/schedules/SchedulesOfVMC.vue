<template>
  <div class="vmc-schedule">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Veritas Schedules
            </h2>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row justify-content-center">
          
          <div 
            class="col-md-6 my-2" 
            v-for="(item, index) in (cms.scheduleImages || [])" 
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
             v-if="!cms.scheduleImages || cms.scheduleImages.length === 0" 
             class="col-12 text-center text-white"
          >
            <p class="no-schedule-msg">No schedule available.</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cmsMixin } from '@/mixins/cmsMixin';
// Successfully mapped to the exact path you found!
import PhotoGalleryModal from '@/components/programs/app-layout/PhotoGalleryModal';

export default {
  name: "SchedulesOfVMC",
  mixins: [cmsMixin],
  components: {
    'photo-gallery-modal': PhotoGalleryModal
  }
}
</script>

<style scoped>
/* Removed all the manual custom modal CSS since PhotoGalleryModal handles everything automatically! */
</style>
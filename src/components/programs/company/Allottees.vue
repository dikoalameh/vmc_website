<template>
  <div class="allottees">
    
    <!-- Dynamic CMS background -->
    <div class="dynamic-page-heading">
      <video v-if="cms.allotteeBackgroundVideo" :key="cms.allotteeBackgroundVideo" playsinline autoplay muted loop :src="cms.allotteeBackgroundVideo" class="bg-media"></video>
      <img v-else-if="cms.allotteeBackgroundImage" :src="cms.allotteeBackgroundImage" class="bg-media" alt="Background">
      <img v-else :src="require('@/assets/no_image.jpg')" class="bg-media" alt="Default Background">
      
      <div class="heading-overlay"></div>
      
      <div class="container heading-content">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 text-white vmc-heading mb-0" style="letter-spacing: 3px; text-shadow: 2px 2px 5px rgba(0,0,0,0.7);">
              ALLOTTEES GATHERING
            </h2>
          </div>
        </div>
      </div>
    </div>

    <div v-for="(yearGroup, index) in (cms.allotteeYears || [])" :key="index" :class="['container-fluid', 'vmc-py-big', index % 2 !== 0 ? 'vmc-bg-dark-1' : '']">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="font-weight-light mb-3">{{ yearGroup.year }} Allottees Gathering</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6 mt-3" v-for="(activity, aIndex) in yearGroup.activities" :key="aIndex">
            <photo-gallery-modal v-if="activity.images && activity.images.length > 0" :caption="activity.title" :thumbnail="activity.images[0]" :images="activity.images" />
          </div>
        </div>
      </div>
    </div>

    <div v-if="!cms.allotteeYears || cms.allotteeYears.length === 0" class="container text-center py-5">
        <p class="text-muted">No allottee events found.</p>
    </div>

  </div>
</template>

<script>
import { cmsMixin } from '@/mixins/cmsMixin';
import PhotoGalleryModal from '../app-layout/PhotoGalleryModal';

export default {
  name: 'Allottees',
  mixins: [cmsMixin],
  components: {
    'photo-gallery-modal' : PhotoGalleryModal
  }
};
</script>

<style scoped>
.dynamic-page-heading {
  position: relative;
  width: 100%;
  height: 40vh; 
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #000;
  margin-top: 85px; 
}
.bg-media { position: absolute; top: 50%; left: 50%; min-width: 100%; min-height: 100%; width: 100%; height: 100%; object-fit: cover; transform: translateX(-50%) translateY(-50%); z-index: 0; }
.heading-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.45); z-index: 1; }
.heading-content { position: relative; z-index: 2; }
@media (min-width: 992px) { .dynamic-page-heading { margin-top: 105px; } }
</style>
<template>
  <div class="office-programs">
    <!-- Dynamic CMS background -->
    <div class="dynamic-page-heading">
      <video v-if="cms.officeProgramsBackgroundVideo" :key="cms.officeProgramsBackgroundVideo" playsinline autoplay
        muted loop :src="cms.officeProgramsBackgroundVideo" class="bg-media"></video>
      <img v-else-if="cms.officeProgramsBackgroundImage" :src="cms.officeProgramsBackgroundImage" class="bg-media"
        alt="Background">
      <img v-else :src="require('@/assets/no_image.jpg')" class="bg-media" alt="Default Background">

      <div class="heading-overlay"></div>

      <div class="container heading-content">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 text-white vmc-heading mb-0"
              style="letter-spacing: 3px; text-shadow: 2px 2px 5px rgba(0,0,0,0.7);">
              OFFICE PROGRAMS
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid" style="padding-top: 4.5rem;">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Office Programs
            </h2>
          </div>
        </div>
      </div>
      <div v-if="!cms.officePrograms || cms.officePrograms.length === 0" class="container text-center vmc-py-big">
        <p class="text-muted">No office programs found.</p>
      </div>
      <div v-else>
        <div v-for="(category, index) in (cms.officePrograms || [])" :key="index"
          :class="[index % 2 !== 0 ? 'vmc-bg-dark-1' : '']" class="container-fluid vmc-py-big">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h4 class="font-weight-light mb-3">{{ category.categoryTitle }}</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col-sm-6" v-for="(event, eIndex) in category.activities" :key="eIndex">
                <photo-gallery-modal v-if="event.images && event.images.length > 0" :caption="event.title"
                  :thumbnail="event.images[0]" :images="event.images" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cmsMixin } from '@/mixins/cmsMixin';
import PhotoGalleryModal from '../app-layout/PhotoGalleryModal';

export default {
  name: 'OfficePrograms',
  mixins: [cmsMixin],
  components: {
    'photo-gallery-modal': PhotoGalleryModal
  }
};
</script>

<style scoped>
.dynamic-page-heading {
  position: relative;
  width: 100%;
  height: 390px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #000;
  margin-top: 85px;
}

.bg-media {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateX(-50%) translateY(-50%);
  z-index: 0;
}

.heading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(132, 167, 198, 0.5);
  z-index: 1;
}

.heading-content {
  position: relative;
  z-index: 2;
}

@media (min-width: 992px) {
  .dynamic-page-heading {
    margin-top: 105px;
  }

  .dynamic-page-heading h2 {
    font-size: 4.75rem;
    font-weight: 300;
  }
}
</style>
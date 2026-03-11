<template>
  <div class="training-programs">

    <!-- Dynamic CMS background -->
    <div class="dynamic-page-heading">
      <video v-if="cms.trainingBackgroundVideo" :key="cms.trainingBackgroundVideo" playsinline autoplay muted loop
        :src="cms.trainingBackgroundVideo" class="bg-media"></video>
      <img v-else-if="cms.trainingBackgroundImage" :src="cms.trainingBackgroundImage" class="bg-media" alt="Background">
      <img v-else :src="require('@/assets/no_image.jpg')" class="bg-media" alt="Default Background">

      <div class="heading-overlay"></div>

      <div class="container heading-content">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 text-white vmc-heading mb-0"
              style="letter-spacing: 3px; text-shadow: 2px 2px 5px rgba(0,0,0,0.7);">
              CREW DEVELOPMENT
            </h2>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid" style="padding-top: 4.5rem;">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-12 text-center">
            <h2 class="h2 vmc-text-primary vmc-heading">
              Crew Development Program (All Crew)
            </h2>
          </div>
          <div class="col-md-12">
            <p class="pr-1 mb-0" style="white-space: pre-wrap;">{{ cms.trainingIntro }}</p>
          </div>
        </div>
      </div>
      <div v-if="!cms.trainingList || cms.trainingList.length === 0" class="container text-center vmc-py-big mt-5">
        <p class="text-muted">No training programs available at the moment.</p>
      </div>
      <div v-else>
        <div v-for="(program, index) in (cms.trainingList || [])" :key="index"
          :class="[index % 2 === 0 ? 'vmc-bg-dark-1' : '']" class="container-fluid vmc-py-big mt-5">
          <div class="container">
            <div class="row d-flex align-items-center">
              <div :class="['col-md-8', index % 2 !== 0 ? 'order-md-2' : 'order-md-1']">
                <h4 class="font-weight-light mb-3" v-if="program.title">{{ program.title }}</h4>
                <p style="white-space: pre-wrap;">{{ program.description }}</p>
              </div>
              <div :class="['col-md-4', index % 2 !== 0 ? 'order-md-1' : 'order-md-2']">
                <img v-if="program.image" :src="program.image" alt="Training Program" class="img-fluid mb-3 mb-md-0"
                  style="width: 100%; height: auto; border-radius: 4px;">
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

export default {
  name: 'TrainingPrograms',
  mixins: [cmsMixin]
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
    font-size: 5rem;
    font-weight: 300;
  }
}

.vmc-bg-dark-1 {
  background-color: #f4f4f3;
}

.vmc-text-primary {
  color: #002366;
}
</style>
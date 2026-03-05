<template>
  <div class="crew">
    <vmc-header />
    
    <!-- Dynamic CMS background -->
    <div class="dynamic-page-heading">
      
      <!-- Renders custom CMS video if uploaded -->
      <video v-if="cms.scheduleBackgroundVideo"
        :key="cms.scheduleBackgroundVideo"
        playsinline="playsinline" 
        autoplay="autoplay" 
        muted="muted" 
        loop="loop"
        :src="cms.scheduleBackgroundVideo"
        class="bg-media"
      ></video>

      <!-- Renders custom CMS image if uploaded -->
      <img v-else-if="cms.scheduleBackgroundImage" 
           :src="cms.scheduleBackgroundImage" 
           class="bg-media" 
           alt="Background Image">
           
      <!-- Fallback to the original local image if CMS is empty -->
      <img v-else 
           :src="require('@/assets/no_image.jpg')" 
           class="bg-media" 
           alt="Default Background">

      <div class="heading-overlay"></div>
      
      <div class="container heading-content">
        <div class="row">
          <div class="col-12 text-center">
            <!-- RESTORED: Proper VMC heading styling -->
            <h2 class="h1 text-white vmc-heading mb-0" style="letter-spacing: 3px; text-shadow: 2px 2px 5px rgba(0,0,0,0.7);">
              SCHEDULES
            </h2>
          </div>
        </div>
      </div>
    </div>

    <!-- This injects the SchedulesOfVMC.vue gallery below the header -->
    <router-view></router-view>
    
    <vmc-footer />
  </div>
</template>

<script>
import VMCHeader from '../components/VMCHeader';
import VMCFooter from '../components/VMCFooter';
import { cmsMixin } from '@/mixins/cmsMixin'; 

export default {
  name: 'Schedules',
  mixins: [cmsMixin], 
  components: {
    'vmc-header': VMCHeader,
    'vmc-footer': VMCFooter,
  }
};
</script>

<style scoped>
.dynamic-page-heading {
  position: relative;
  width: 100%;
  height: 40vh; /* Standard page heading height */
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #000;
  margin-top: 85px; /* Offset for VMC sticky header */
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
  background-color: rgba(0, 0, 0, 0.45); /* Dark overlay for text readability */
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
}
</style>
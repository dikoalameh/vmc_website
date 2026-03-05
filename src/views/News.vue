<template>
  <div class="news">
    <vmc-header />
    
    <!-- Dynamic CMS background -->
    <div class="dynamic-page-heading">
      <video v-if="cms.newsBackgroundVideo" :key="cms.newsBackgroundVideo" playsinline autoplay muted loop :src="cms.newsBackgroundVideo" class="bg-media"></video>
      <img v-else-if="cms.newsBackgroundImage" :src="cms.newsBackgroundImage" class="bg-media" alt="Background">
      <img v-else :src="require('@/assets/no_image.jpg')" class="bg-media" alt="Default Background">
      
      <div class="heading-overlay"></div>
      
      <div class="container heading-content">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 text-white vmc-heading mb-0" style="letter-spacing: 3px; text-shadow: 2px 2px 5px rgba(0,0,0,0.7);">
              NEWS & UPDATE
            </h2>
          </div>
        </div>
      </div>
    </div>

    <!-- Renders child views like AllNews.vue and ArticleView.vue -->
    <router-view></router-view>
    
    <vmc-footer />
  </div>
</template>

<script>
import VMCHeader from '../components/VMCHeader';
import VMCFooter from '../components/VMCFooter';
import { cmsMixin } from '@/mixins/cmsMixin';

export default {
  name: "News",
  mixins: [cmsMixin],
  components: {
    'vmc-header': VMCHeader,
    'vmc-footer': VMCFooter,
  }
}
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
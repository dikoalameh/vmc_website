<template>
  <div class="news">
    
    <vmc-header />
    
    <!-- Dynamic CMS background (Reusing the News banner state) -->
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

    <div v-if="article">
      <div class="container-fluid vmc-py-big">
        <div class="container">
          
          <!-- Title & Author -->
          <div class="row">
            <div class="col-12 text-center">
              <h2 class="h1 vmc-text-primary vmc-heading">
                {{ article.title }}
              </h2>
              <p class="vmc-text-primary-2 letter-spacing-1 mb-0">
                By {{ article.author }} — {{ article.date }}
              </p>
            </div>
          </div>

          <!-- Article Content -->
          <div class="row">
            <div class="col-md-12 pt-4">
              <!-- Using v-html with formattedContent so line breaks work -->
              <div class="my-3 article-text" v-html="formattedContent"></div>
            </div>
          </div>

          <!-- MULTIPLE IMAGES DISPLAY (1 Column Row) -->
          <div class="row pt-4" v-if="(article.images && article.images.length > 0) || article.image">
             <div class="col-md-12 d-flex flex-column align-items-center">
                
                <!-- If new array format has images, loop through them -->
                <template v-if="article.images && article.images.length > 0">
                    <img 
                      v-for="(img, idx) in article.images" 
                      :key="'img-'+idx" 
                      :src="img" 
                      class="img-fluid mb-4 shadow-sm" 
                      style="max-height: 700px; border-radius: 8px; width: 100%; object-fit: contain; background: #f8f9fa;"
                    >
                </template>

                <!-- Fallback for older articles that only have 1 image string -->
                <template v-else-if="article.image">
                    <img 
                      :src="article.image" 
                      class="img-fluid mb-4 shadow-sm" 
                      style="max-height: 700px; border-radius: 8px; width: 100%; object-fit: contain; background: #f8f9fa;"
                    >
                </template>

             </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Not Found State -->
    <div v-else class="container py-5 text-center">
      <br><br>
      <h2 class="text-danger">Article not found</h2>
      <router-link to="/news" class="btn btn-primary">Go Back</router-link>
      <br><br>
    </div>

    <vmc-footer />

  </div>
</template>

<script>
// IMPORTS
import { cmsMixin } from '@/mixins/cmsMixin';
import VMCHeader from '../components/VMCHeader';
import VMCFooter from '../components/VMCFooter';

export default {
  name: "ArticleView",
  mixins: [cmsMixin],
  
  // REGISTER THE COMPONENTS (Removed page-heading)
  components: {
    'vmc-header': VMCHeader,
    'vmc-footer': VMCFooter
  },
  
  computed: {
    article() {
      const targetId = this.$route.params.id;
      if (!this.cms.newsArticles) return null;
      return this.cms.newsArticles.find(item => item.id == targetId);
    },
    
    formattedContent() {
      if (!this.article || !this.article.content) return '';
      // Replaces "Enter" keys with <br> tags
      return this.article.content.replace(/\n/g, '<br>');
    }
  }
};
</script>

<style scoped>
.vmc-py-big { 
  padding-top: 80px; 
  padding-bottom: 80px; 
}
.vmc-text-primary { 
  color: #002366; 
}
.vmc-text-primary-2 {
  color: #85a8c7;
}

/* Dynamic Heading CSS */
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


/* NEW CLASS FOR THE TEXT */
.article-text {
  white-space: pre-wrap;      /* Respects your line breaks */
  word-wrap: break-word;      /* Prevents horizontal scrolling */
  overflow-wrap: break-word;  /* Modern browser support for wrapping */
  text-align: justify;        /* Makes big blocks of text look cleaner */
  font-size: 1.1rem;          /* Slightly larger for readability */
  line-height: 1.8;           /* Increased line height for easier reading */
  color: #4a4a4a;             /* Darkened slightly from #9da7af for better contrast */
}
</style>
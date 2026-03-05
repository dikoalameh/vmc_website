<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              All News & Updates
            </h2>
          </div>
        </div>

        <div v-for="article in allNewsList" :key="article.id" class="row">
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                
                <div class="col-md-5">
                  <!-- CHANGED: Safely load either images[0] or fallback to legacy image string -->
                  <img class="card-img" 
                      :src="(article.images && article.images.length > 0) ? article.images[0] : (article.image || require('@/assets/no_image.jpg'))" 
                      alt="News Image"
                      style="object-fit: cover; height: 100%; min-height: 250px;">
                  
                </div>

                <div class="col-md-7">
                  <div class="card-body">
                    
                    <div class="font-weight-normal mb-1">
                      <h4 class="title-clamp">{{ article.title }}</h4>
                    </div>  

                    <div class="letter-spacing-1">
                      <p class="author-date-clamp">
                        <span class="badge badge-info mr-2" style="background-color: #85a8c7; color: white; padding: 5px;">{{ article.category }}</span>
                        By {{ article.author }} — {{ article.date }} 
                      </p>
                    </div>

                    <div class="d-none d-lg-block"> 
                      <p class="news-clamp"> {{ article.content }}</p> 
                    </div>

                    <router-link class="vmc-text-primary-2" :to="'/news/' + article.id">continue reading . . .</router-link> 

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div v-if="allNewsList.length === 0" class="row mt-5">
          <div class="col-12 text-center">
            <p class="text-muted">No news articles found.</p> 
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { cmsMixin } from '@/mixins/cmsMixin';

export default {
  name: 'AllNews',
  mixins: [cmsMixin],
  computed: {
    allNewsList() {
      const list = this.cms.newsArticles || [];
      return list.slice().sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    }
  }
};
</script>

<style scoped>
.news-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 10px;
}

.author-date-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 10px;
  color: #85a8c7;
}

.title-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 10px;
}

.vmc-py-big { padding-top: 80px; padding-bottom: 80px; }
.vmc-text-primary { color: #002366; }
.vmc-text-primary-2 { color: #85a8c7; }
</style>
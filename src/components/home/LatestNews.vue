<template>
  <div class="container-fluid vmc-bg-dark-1 vmc-py-big">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-md-4 mb-sm-2">
          <h2 class="h1 vmc-text-primary d-flex align-items-center justify-content-center vmc-heading">Latest News
            <router-link :to="{ name: 'AllNews' }"
              class="btn btn-lg vmc-btn-circle vmc-btn-prime-2 px-4 py-1 see-all-button">SEE ALL NEWS</router-link>
          </h2>
        </div>
      </div>

      <div class="row d-flex justify-content-center">

        <div class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium py-2 px-1" style="height: 530px">
            <div id="fb-root"></div>
            <div class="fb-page d-flex justify-content-center"
              data-href="https://www.facebook.com/VeritasMaritimeCorporation" data-tabs="timeline" data-width=""
              data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false"
              data-show-facepile="true">
              <blockquote cite="https://www.facebook.com/VeritasMaritimeCorporation" class="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/VeritasMaritimeCorporation">Veritas Maritime Corporation</a>
              </blockquote>
            </div>
          </div>
        </div>

        <div v-for="article in sortedArticles.slice(0, 5)" :key="article.id" class="col-lg-4 col-md-6 my-3">
          <div class="card shadow border-0 news-card rounded-medium h-100">

            <!-- CHANGED: Safely load either images[0] or fallback to legacy image string -->
            <img class="card-img-top"
              :src="(article.images && article.images.length > 0) ? article.images[0] : (article.image || 'https://via.placeholder.com/400x200?text=News')"
              alt="News Image" style="height: 200px; object-fit: cover;">

            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">

              <div style="height: 200px; overflow-y: hidden">
                <h4 class="card-title" style="height: 56px; overflow: hidden">
                  {{ article.title }}
                </h4>

                <p class="news-clamp">
                  {{ article.content }}
                </p>
              </div>

              <p class="mb-0 mt-3" style="opacity: 50%">
                {{ article.date }}
              </p>

              <router-link :to="'/news/' + article.id" class="stretched-link"></router-link>

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
  mixins: [cmsMixin],
  name: "LatestNews",

  computed: {
    sortedArticles() {
      const list = this.cms.newsArticles || [];
      return list.slice().sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    }
  }
}
</script>

<style scoped>
.news-card {
  transition: all .2s ease-in-out;
}

.news-card:hover {
  transform: scale(1.025);
}

.see-all-button {
  margin-left: -185px;
  position: absolute;
  top: -3rem;
  right: 1rem;
}

.card-img-top {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  height: 250px;
}

@media (min-width: 768px) {
  .see-all-button {
    margin-left: -185px;
    position: absolute;
    top: .55rem;
    right: 1rem;
  }
}

.news-clamp {
  display: -webkit-box;
  --webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-title {
  display: -webkit-box;
  --webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
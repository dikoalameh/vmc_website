<template>
  <div>
  <div id="VMCKeyVisual" class="carousel slide" data-ride="carousel">
    <div class="container">
      <ol class="carousel-indicators">
        <li data-target="#VMCKeyVisual" data-slide-to="0" class="active"></li>
        <li data-target="#VMCKeyVisual" data-slide-to="1"></li>
        <li data-target="#VMCKeyVisual" data-slide-to="2"></li>
      </ol>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active parallax-effect" :style="{backgroundImage:'url('+banner1+')'}">
        <svg class="bd-placeholder-img" style="opacity: 50%" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
          <rect width="100%" height="100%" fill="var(--vmc-primary-10)"/>
        </svg>
        <div class="container">
          <div class="carousel-caption text-left">
            <h2 class="h1 vmc-text-white font-weight-light"
                style="letter-spacing: 2px; font-size: 4rem;">Corona Citrus</h2>
            <p class="vmc-text-white">Some representative placeholder content for the first slide of the carousel.</p>
            <p><a class="btn btn-lg vmc-btn-circle vmc-btn-outline-white" href="#">Read More
              <font-awesome-icon icon="chevron-right" class="vmc-text-white ml-2"/>
            </a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item parallax-effect" :style="{backgroundImage:'url('+banner2+')'}">
        <svg class="bd-placeholder-img" style="opacity: 50%" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
          <rect width="100%" height="100%" fill="var(--vmc-primary-10)"/>
        </svg>
        <div class="container">
          <div class="carousel-caption text-left">
            <h2 class="h1 vmc-text-white font-weight-light"
                style="letter-spacing: 2px; font-size: 4rem;">Cape Sasanqua</h2>
            <p class="vmc-text-white">Some representative placeholder content for the second slide of the carousel.</p>
            <p><a class="btn btn-lg vmc-btn-circle vmc-btn-outline-white" href="#">Read More
              <font-awesome-icon icon="chevron-right" class="vmc-text-white ml-2"/></a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item parallax-effect" :style="{backgroundImage:'url('+banner3+')'}">
        <svg class="bd-placeholder-img" style="opacity: 50%" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
          <rect width="100%" height="100%" fill="var(--vmc-primary-10)"/>
        </svg>
        <div class="container">
          <div class="carousel-caption text-left">
            <h2 class="h1 vmc-text-white font-weight-light"
                style="letter-spacing: 2px; font-size: 4rem;">New Century</h2>
            <p class="vmc-text-white">Some representative placeholder content for the third slide of the carousel.</p>
            <p><a class="btn btn-lg vmc-btn-circle vmc-btn-outline-white" href="#">Read More
              <font-awesome-icon icon="chevron-right" class="vmc-text-white ml-2"/></a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div class="container-fluid bg-light">
      <div class="row">
        <div class="col-12 py-3 d-flex align-items-center justify-content-center">
          <button class="btn btn-sm vmc-btn-circle vmc-btn-outline-secondary px-4">Latest Articles</button>
          <span class="h5 mb-0 mx-2">COVID 19 Updates
          <font-awesome-icon icon="chevron-right" class="vmc-text-white ml-2"/>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KeyVisual",
  data() {
    return {
      'banner1': require(`@/assets/vessel_cape_sasanqua.jpg`),
      'banner2': require(`@/assets/vessel_corona_citrus.jpg`),
      'banner3': require(`@/assets/vessel_new_century.jpg`),
    }
  },
}
</script>

<style scoped>
/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  left: auto;
  right: auto;
  z-index: 10;
}
.carousel-indicators {
  border-radius: 100px;
  top: 60%;
  margin: auto;
  left: auto;
  right: auto;
  justify-content: start;
}
.carousel-indicators li {
  width: 20px;
  height: 20px;
  border-radius: 100%;
}
/* Declare heights because of positioning of img element */
.carousel-item {
  height: calc(90vh - 125px);
}
.carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 32rem;
}

.parallax-effect {
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }
}
@media (min-width: 576px) {
  #VMCKeyVisual {
    margin-top: 85px;
  }
}

@media (min-width: 768px) {
  #VMCKeyVisual {
    margin-top: 85px;
  }
}

@media (min-width: 992px) {
  #VMCKeyVisual {
    margin-top: 105px;
  }
}

@media (min-width: 1200px) {
  #VMCKeyVisual {
    margin-top: 105px;
  }
}
</style>
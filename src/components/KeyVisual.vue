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

  mounted() {
    // todo this is for moving images na patong patong
    /*
    let bg = document.getElementById('bg');
    let moon = document.getElementById('moon');
    let mountain = document.getElementById('mountain');
    let road = document.getElementById('road');
    let text = document.getElementById('text');

    window.addEventListener('scroll', function(){
      const value = window.scrollY;

      bg.style.top = value * 0.5 + 'px';
      moon.style.left = -value * 0.5 + 'px';
      mountain.style.top = -value * 0.15 + 'px';
      road.style.top = value * 0.15 + 'px';
      text.style.top = value + 'px';
    }) */
  }
}
</script>

<style scoped>

</style>
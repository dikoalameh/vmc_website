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
        <div class="carousel-item active parallax-effect" :style="{backgroundImage:'url('+banner1+')'}" id="BannerOne">
          <svg class="bd-placeholder-img" style="opacity: 55%" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
            <rect width="100%" height="100%" fill="var(--vmc-primary-3)"/>
          </svg>
          <div class="container">
            <div class="carousel-caption text-left">
              <p class="mb-2 font-weight-normal text-white"
                 style="letter-spacing: 3px; font-size: 16px;">CARRYING A FAMILY LEGACY</p>
              <p class="vmc-text-white font-weight-normal mb-0"
                 style="font-size:55px; font-weight: 500; letter-spacing: 1px;">
                TOWARD GROWTH, STABILITY
              </p>
              <p class="vmc-text-white font-weight-light" style="font-size: 23px;">
                One of the country’s pioneers in the maritime manning sector, Veritas Maritime Corp. welcomed on July 11 its new leader, Francis Jerome “Jiro” Marquez, to family, friends and colleagues.
              </p>
              <p>
                <router-link :to="{name: 'CarryingAFamilyLegacyTowardGrowthStability'}"
                             class="btn vmc-btn-circle vmc-btn-outline-white mt-5 px-4"
                             style="font-size: 18px">Read More</router-link>
<!--                <a class="btn vmc-btn-circle vmc-btn-outline-white mt-5 px-4"-->
<!--                   style="font-size: 18px" href="#">Read More</a>-->
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item parallax-effect" :style="{backgroundImage:'url('+banner2+')'} " id="BannerTwo">
          <svg class="bd-placeholder-img" style="opacity: 50%" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
            <rect width="100%" height="100%" fill="var(--vmc-primary-3)"/>
          </svg>
          <div class="container">
            <div class="carousel-caption text-left">
              <p class="mb-2 font-weight-normal text-white"
                 style="letter-spacing: 3px; font-size: 16px;">VERITAS' GEARED TOWARDS</p>
              <p class="vmc-text-white font-weight-normal mb-0"
                 style="font-size:55px; font-weight: 500; letter-spacing: 1px;">
                THE NEW NORMAL
              </p>
              <p class="vmc-text-white font-weight-light" style="font-size: 23px;">
                Some representative placeholder content for the second slide of the carousel.
              </p>
              <p>
                <a class="btn vmc-btn-circle vmc-btn-outline-white mt-5 px-4"
                   style="font-size: 18px" href="#">Read More</a>
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item parallax-effect" :style="{backgroundImage:'url('+banner3+')'}" id="BannerThree">
          <svg class="bd-placeholder-img" style="opacity: 50%" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
            <rect width="100%" height="100%" fill="var(--vmc-primary-3)"/>
          </svg>
          <div class="container">
            <div class="carousel-caption text-left">
              <p class="mb-2 font-weight-normal text-white"
                 style="letter-spacing: 3px; font-size: 16px;">LOREM IPSUM</p>
              <p class="vmc-text-white font-weight-normal mb-0"
                 style="font-size:55px; font-weight: 500; letter-spacing: 1px;">
                NEW CENTURY
              </p>
              <p class="vmc-text-white font-weight-light" style="font-size: 23px;">
                Some representative placeholder content for the first slide of the carousel.
              </p>
              <p>
                <a class="btn vmc-btn-circle vmc-btn-outline-white mt-5 px-4"
                   style="font-size: 18px" href="#">Read More</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container bg-white">
        <div class="row py-3 d-flex align-items-center justify-content-center">
          <div class="col-auto p-1">
            <button class="btn vmc-btn-circle vmc-btn-secondary kv-low-btn">ADVISORIES</button>
          </div>
          <div class="col-auto p-1">
            <button class="btn vmc-btn-circle vmc-btn-outline-secondary kv-low-btn">Sixteenth Congress</button>
          </div>
          <div class="col-auto p-1">
            <button class="btn vmc-btn-circle vmc-btn-outline-secondary kv-low-btn">COVID-19 Update</button>
          </div>
          <div class="col-auto p-1">
            <button class="btn vmc-btn-circle vmc-btn-outline-secondary kv-low-btn">Lorem Ipsum Dolor</button>
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
      'banner1': require(`@/assets/keyvisuals/banner1.jpg`),
      'banner2': require(`@/assets/keyvisuals/banner2_0.jpg`),
      'banner3': require(`@/assets/vessel_new_century.jpg`),
    }
  },
  mounted() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const carousel1 = document.getElementById('BannerOne');
    const carousel2 = document.getElementById('BannerTwo');
    const carousel3 = document.getElementById('BannerThree');

    if (w > 992 && w < h) {
      carousel1.style.height = "60vh"
      carousel2.style.height = "60vh"
      carousel3.style.height = "60vh"
    }
    console.log('width ' + w);
    console.log('height ' + h);
  }
}
</script>

<style scoped>
/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding-right: 2rem;
  left: auto;
  right: auto;
  z-index: 10;
  text-shadow: 1px 3px 6px rgba(0, 0, 0, .5);
}
.carousel-indicators {
  border-radius: 100px;
  bottom: 5%;
  margin: auto;
  left: auto;
  right: auto;
  justify-content: start;
}
.carousel-indicators li {
  width: 10px;
  height: 10px;
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
.kv-low-btn {
  width: 200px;
}
#VMCKeyVisual {
  margin-top: 85px;
}
@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption {
    width: 100%;
  }
  .carousel-caption p {
    width: 100%;
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }
}
@media (min-width: 576px) {
  #VMCKeyVisual {
    margin-top: 85px;
  }
  .carousel-indicators {
    bottom: 20%;
  }
  .carousel-caption {
    max-width: 500px;
  }
}

@media (min-width: 768px) {
  #VMCKeyVisual {
    margin-top: 85px;
  }
  .carousel-indicators {
    bottom: 20%;
  }
  .carousel-caption {
    max-width: 680px;
  }
}

@media (min-width: 992px) {
  #VMCKeyVisual {
    margin-top: 105px;
  }
  .carousel-indicators {
    bottom: 20%;
  }
  .carousel-caption {
    max-width: 940px;
  }
}

@media (min-width: 1200px) {
  #VMCKeyVisual {
    margin-top: 105px;
  }
  .carousel-indicators {
    bottom: 20%;
  }
  .carousel-caption {
    max-width: 1140px;
  }
}
</style>
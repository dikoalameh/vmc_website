<template>
  <!--  todo this is the list of moving images   -->
  <section>
      <img :src="pageBackground" id="PageBackground" alt="">
<!--      <img src="../assets/testphotos/bg.jpg" id="bg" alt="">-->
<!--      <img src="../assets/testphotos/moon.png" id="moon" alt="">-->
<!--      <img src="../assets/testphotos/mountain.png" id="mountain" alt="">-->
<!--      <img src="../assets/testphotos/road.png" id="road" alt="">-->
      <h1 id="text" class="font-weight-light">{{ pageTitleName }}</h1>
  </section>
</template>

<script>
export default {
  name: "PageHeading",
  props: ['pageTitleName','imageLink'],
  data() {
    return {
      'pageBackground': require(`@/assets/about/30Years.jpg`),
    }
  },
  mounted() {
    // todo this is for moving images na patong patong
    let pageBg = document.getElementById('PageBackground');
    // let bg = document.getElementById('bg');
    // let moon = document.getElementById('moon');
    // let mountain = document.getElementById('mountain');
    // let road = document.getElementById('road');
    // let text = document.getElementById('text');

    window.addEventListener('scroll', function(){
      const value = window.scrollY;

      pageBg.style.top = value * 0.5 + 'px';
      // bg.style.top = value * 0.5 + 'px';
      // moon.style.left = -value * 0.5 + 'px';
      // mountain.style.top = -value * 0.15 + 'px';
      // road.style.top = value * 0.15 + 'px';
      // text.style.top = value + 'px';
    })
  }
}
</script>

<style scoped>
/* todo this is for parallax with magkakapatong na images */
  section {
    position: relative;
    width: 100%;
    height: 550px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  section:before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, var(--vmc-primary-5), transparent);
    z-index: 10;
  }
  section:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--vmc-primary-5);
    mix-blend-mode: color;
    z-index: 10;
  }
  section img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
  #text {
    position: relative;
    color: white;
    font-size: 5rem;
    z-index: 1;
    text-shadow: 2px 2px 5px var(--vmc-dark-10);
  }
  #road {
    z-index: 2;
  }
  @media (min-width: 576px) {
    #text {
      margin-top: 85px;
    }
  }

  @media (min-width: 768px) {
    #text {
      margin-top: 85px;
    }
  }

  @media (min-width: 992px) {
    #text {
      margin-top: 105px;
    }
  }

  @media (min-width: 1200px) {
    #text {
      margin-top: 105px;
    }
  }
</style>
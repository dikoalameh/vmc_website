<template>
  <div class="home">
    <key-visual />
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="h1 text-center font-weight-light mb-4" style="font-size: 4rem">NEWS & ADVISORIES</h2>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-md-4">
            <div class="card shadow" style="height: 500px;">
              <img class="card-img-top" :src="newsContainer1" alt="Card image cap"
                   style="border-top-left-radius: inherit; border-top-right-radius: inherit; height: 200px">
              <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
                <h5 class="card-title">Veritas New Procedures for the New Normal</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="https://www.manilatimes.net/2021/03/10/business/maritime-business/seafaring-organization-under-proposed-ofw-dept-pushed/"
                   target="_blank" class="btn vmc-btn-outline-prime" style="width: 150px">
                  Read More >></a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow" style="height: 500px;">
              <img class="card-img-top" :src="newsContainer2" alt="Card image cap"
                   style="border-top-left-radius: inherit; border-top-right-radius: inherit; height: 200px">
              <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
                <h5 class="card-title">K-Line Protocols for Embarking Crew</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="https://www.veritas.com.ph/Pdf/New%20Courses%20for%20COC%20Requirements.pdf"
                   target="_blank" class="btn vmc-btn-outline-prime" style="width: 150px">
                  Read More >></a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow" style="height: 500px;">
              <img class="card-img-top" :src="newsContainer3" alt="Card image cap"
                   style="border-top-left-radius: inherit; border-top-right-radius: inherit; height: 200px">
              <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
                <h5 class="card-title">POEA Sets Stricter Guidelines for Seafering Industry</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="https://www.veritas.com.ph/Pdf/MLC%20Training%20Center.pdf"
                   target="_blank" class="btn vmc-btn-outline-prime" style="width: 150px">
                  Read More >></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section>
      <img :src="counterBackground" id="CounterBg" alt="">
      <div class="container" id="CounterText">
        <div class="row">
          <div class="col-md-3">
            <div class="card border-0">
              <div class="card-body text-center">
                <h2 class="mb-0 py-3 vmc-text-primary" style="font-size: 4rem; letter-spacing: 1pt">2177</h2>
              </div>
              <div class="card-footer text-center vmc-bg-prime-5">
                <h5 class="h5 mb-0 text-white" style="letter-spacing: .5pt">Total Crew</h5>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card border-0">
              <div class="card-body text-center">
                <h2 class="mb-0 py-3 vmc-text-primary" style="font-size: 4rem; letter-spacing: 1pt">2077</h2>
              </div>
              <div class="card-footer text-center vmc-bg-prime-5">
                <h5 class="h5 mb-0 text-white" style="letter-spacing: .5pt">On Board</h5>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card border-0">
              <div class="card-body text-center">
                <h2 class="mb-0 py-3 vmc-text-primary" style="font-size: 4rem; letter-spacing: 1pt">1000</h2>
              </div>
              <div class="card-footer text-center vmc-bg-prime-5">
                <h5 class="h5 mb-0 text-white" style="letter-spacing: .5pt">On Board</h5>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card border-0">
              <div class="card-body text-center">
                <h2 class="mb-0 py-3 vmc-text-primary" style="font-size: 4rem; letter-spacing: 1pt">55</h2>
              </div>
              <div class="card-footer text-center vmc-bg-prime-5">
                <h5 class="h5 mb-0 text-white" style="letter-spacing: .5pt">Total Vessels</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 border-right py-5">
          <img class="company-affiliates-img" :src="affiliateISO" alt="">
          <div class="company-affiliates-text">
            <h6 class="h6 mb-0">
              ISO 9001:2015 Crew Management for International Shipping Certified by DNV-GL
            </h6>
          </div>
        </div>
        <div class="col-md-2 border-right py-5">
          <img class="company-affiliates-img" :src="affiliatePRC" alt="">
          <div class="company-affiliates-text">
            <h6 class="h6 mb-0">
              Professional Regulation Commission
            </h6>
          </div>
        </div>
        <div class="col-md-2 border-right py-5">
          <img class="company-affiliates-img" :src="affiliateKLMA" alt="">
          <div class="company-affiliates-text">
            <h6 class="h6 mb-0">
              K Line Maritime Academy Philippines
            </h6>
          </div>
        </div>
        <div class="col-md-2 border-right py-5">
          <img class="company-affiliates-img" :src="affiliateMARINA" alt="">
          <div class="company-affiliates-text">
            <h6 class="h6">
              Maritime Industry Authority
            </h6>
          </div>
        </div>
        <div class="col-md-2 border-right py-5">
          <img class="company-affiliates-img" :src="affiliateUKAS" alt="">
          <div class="company-affiliates-text">
            <h6 class="h6">
              United Kingdom Accreditation Service — Quality Management
            </h6>
          </div>
        </div>
        <div class="col-md-2 py-5">
          <img class="company-affiliates-img" :src="affiliatePDOS" alt="">
          <div class="company-affiliates-text">
            <h6 class="h6">
              Pre-Departure Orientation Seminars
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import KeyVisual from '../components/KeyVisual';

export default {
  name: 'Home',
  data() {
    return {
      'newsContainer1': require(`@/assets/vessel_floor.jpg`),
      'newsContainer2': require(`@/assets/vessel_kline_wide.jpg`),
      'newsContainer3': require(`@/assets/vessel_new_century.jpg`),
      'counterBackground': require(`@/assets/crew_onboarding_short.jpg`),
      'affiliateISO' :require(`@/assets/affiliates/iso_9001.jpg`),
      'affiliateKLMA' :require(`@/assets/affiliates/klma.jpg`),
      'affiliateMARINA' :require(`@/assets/affiliates/marina.jpg`),
      'affiliatePRC' :require(`@/assets/affiliates/prc.jpg`),
      'affiliatePDOS' :require(`@/assets/affiliates/pdos.jpg`),
      'affiliateUKAS' :require(`@/assets/affiliates/ukas.jpg`),
    }
  },
  components: {
    'key-visual':KeyVisual
  },
  mounted() {
    let background = document.getElementById('CounterBg');
    window.addEventListener('scroll', function(){
      const value = window.scrollY;
      background.style.top = (value - 1500) * .5 + 'px';
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
section:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #84a7c6;
  mix-blend-mode: color;
  z-index: 10;
}
section img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 800px;
  object-fit: cover;
  pointer-events: none;
}
#CounterText {
  position: absolute;
  color: white;
  z-index: 11;
}
</style>

<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              VOYAGE TO OUR LIFE HERITAGE
            </h2>
            <p class="vmc-text-primary-2 letter-spacing-1 mb-0">
              By Veritas Admin — July 28, 2022
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center pt-4">
            <div class="d-flex justify-content-center flex-wrap">
              <div class="m-1" v-for="sectionItem1 in section1" v-bind:key="sectionItem1">
                <img :src="sectionItem1" alt="" class="border" style="height: 300px; width: auto;">
              </div>
            </div>

            <p class="my-3 text-left">
              Mr. Agustin “Jun” Casten Gagajena, Jr., is the youngest of four children of Major Agustin Gagajena, Sr and Norma Casten Gagajena.  By origin, his family name reflects his traits as a Risk Taker, Visionary and Unpretentious. Upon graduating from John B. Lacson Colleges in Iloilo City, he started his seaman life in 1984 and never looked back as he progressed to becoming one of VERITAS finest Master Mariner.  He joined VERITAS last July 2006 through the recommendation of Stargate Bremen, and readily accepted his lineup at MV Cape Riviera without any hesitation.
            </p>

            <div class="d-flex justify-content-center flex-wrap">
              <div class="m-1" v-for="sectionItem2 in section2" v-bind:key="sectionItem2">
                <img :src="sectionItem2" alt="" class="border" style="height: 400px; width: auto;">
              </div>
            </div>

            <p class="text-left my-3">
              His loving wife, Ms. Onnie Gagajena is also a working wife.  She graduated from Polytechnic University of the Philippines (PUP) as Cum Laude with the degree of BSC-major in Accounting, and as a CPA pursued her profession as she now works with 1771 Chateau Group of Companies as Chief Accountant and Comptroller.  When away from home, Ms. Onnie had substituted as Pillar of the family for Sir Jun, making sure that all the needs of their children are provided with the utmost guidance and care.
            </p>

            <div class="d-flex justify-content-center flex-wrap">
              <div class="m-1" v-for="sectionItem3 in section3" v-bind:key="sectionItem3">
                <img :src="sectionItem3" alt="" class="border" style="height: 350px; width: auto;">
              </div>
            </div>

            <p class="text-left my-3">
              While at VERITAS, they were able to send their 3 children to some of the exclusive schools in the country.  All the children had finished their secondary education at San Beda Alabang, and molded to their chosen paths and careers:
            </p>

            <div class="row align-items-center my-3">
              <div class="col-lg-4">
                <img :src="section4" alt="" class="border" style="height: 300px; width: auto;">
              </div>
              <div class="col-lg-8">
                <p class="text-left">
                  -Amber Shawn, the eldest son is a graduate of BS Business Administration and Accountancy from UP-Diliman and    immediately passed the CPA Board.  He worked with SGV as Auditor for almost 3 years. He continued his education, Bachelor of Laws at the Ateneo de Manila University and graduated with honors and hurdled the bar examinations successfully.  He is presently employed at V & A Law Villaraza & Angangco Law Center ‘The Firm’ as Corporate Lawyer/Senior Associate.
                </p>
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-lg-4 order-lg-12">
                <img :src="section5" alt="" class="border" style="height: 300px; width: auto;">
              </div>
              <div class="col-lg-8 order-lg-0">
                <p class="text-left">
                  -Adrian Sherwin, the second son is a graduate of Bachelor of Science in Nursing at De la Salle University-Dasmarinas.  He immediately passed the Nursing board examinations and had worked for five years at De la Salle Medical Center, afterwhich, he proceeded for further studies in Sydney, Australia.  He is now a registered Nurse working in The Sutherland Hospital in Sydney, New South Wales, Australia.
                </p>
              </div>

            </div>

            <div class="row align-items-center">
              <div class="col-lg-4">
                <img :src="section6" alt="" class="border" style="height: 300px; width: auto;">
              </div>
              <div class="col-lg-8">
                <p class="text-left">
                  -Arvin Stephen, the third son is a graduate of BS-Management Accounting from De la Salle University-Dasmarinas.  He passed the international board examinations for Certified Management Accountant (CMA).  He continued his education by taking up Bachelor of Laws at San Beda College Alabang wherein he graduated last July, 2021 and hurdled the 2020-2021 bar examinations successfully.
                </p>
              </div>
            </div>

            <p class="text-left my-3">
              Despite their individual success stories, the Gagajena’s had continued to live a simple and modest lifestyle, as Ms. Onnie always advises to her children to live within your means, and spend for only the things you need, and  quoted Proverbs 22:6  “Train up a child in the way he should go: and when he is old, he will not depart from it.” This well exemplifies our VERITAS Culture, our Heritage of nurturing and developing each and every family member with modesty, while staying grounded in each progressive step.
            </p>

            <div class="d-flex justify-content-center flex-wrap">
              <div class="m-1" v-for="sectionItem7 in section7" v-bind:key="sectionItem7">
                <img :src="sectionItem7" alt="" class="border" style="height: 220px; width: auto;">
              </div>
            </div>

            <p class="text-left my-3">
              VERITAS is much revered by Sir Jun as one of the best Manning Agencies in the Philippines, as he stands proud to be of service to Kline vessels under KRBS Kobe, and VERITAS, with its very supportive Management and staff who are always there to assist and support everyone equally, that adds encouragement for all crew/seafarers to achieve excellence in the performance of their duties.
            </p>

            <div class="d-flex justify-content-center flex-wrap">
              <div class="m-1" v-for="sectionItem8 in section8" v-bind:key="sectionItem8">
                <img :src="sectionItem8" alt="" class="border" style="height: 350px; width: auto;">
              </div>
            </div>

            <p class="text-left my-3">
              To the Gagajena family, VERITAS salutes your loyalty and commitment! Raising the bar and setting an example, as we continue to help more seafarers fulfill their dreams for themselves and their families!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VoyageToOurLifeHeritage2022",
  data(){
    return {
      section1 : [
        require(`@/assets/news/2022/jul/VoyageLifetimeHeritage/Picture1.jpg`),
        require(`@/assets/news/2022/jul/VoyageLifetimeHeritage/Picture2.jpg`),
        require(`@/assets/news/2022/jul/VoyageLifetimeHeritage/Picture3.jpg`),
      ],
      section2 : [
        require(`@/assets/news/2022/jul/VoyageLifetimeHeritage/Picture4.jpg`),
        require(`@/assets/news/2022/jul/VoyageLifetimeHeritage/Picture5.jpg`),
        require(`@/assets/news/2022/jul/VoyageLifetimeHeritage/Picture6.jpg`),
      ],
      section3 : [
        require(`@/assets/news/2022/jul/VoyageLifetimeHeritage/Picture7.jpg`),
        require(`@/assets/news/2022/jul/VoyageLifetimeHeritage/Picture8.jpg`),
      ],
      section7 : [
        require(`@/assets/news/2022/jul/VoyageLifetimeHeritage/Picture12.jpg`),
        require(`@/assets/news/2022/jul/VoyageLifetimeHeritage/Picture13.jpg`),
        require(`@/assets/news/2022/jul/VoyageLifetimeHeritage/Picture14.jpg`),
        require(`@/assets/news/2022/jul/VoyageLifetimeHeritage/Picture15.jpg`),
        require(`@/assets/news/2022/jul/VoyageLifetimeHeritage/Picture16.jpg`),
        require(`@/assets/news/2022/jul/VoyageLifetimeHeritage/Picture17.jpg`),
      ],
      section8 : [
        require(`@/assets/news/2022/jul/VoyageLifetimeHeritage/Picture18.jpg`),
        require(`@/assets/news/2022/jul/VoyageLifetimeHeritage/Picture19.jpg`),
      ],
      section4:  require(`@/assets/news/2022/jul/VoyageLifetimeHeritage/Picture9.jpg`),
      section5:  require(`@/assets/news/2022/jul/VoyageLifetimeHeritage/Picture10.jpg`),
      section6:  require(`@/assets/news/2022/jul/VoyageLifetimeHeritage/Picture11.jpg`),

    }
  }
}
</script>

<style scoped>

</style>

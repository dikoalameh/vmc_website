<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Veritas 35th Anniversary Celebration at the Manila Hotel
            </h2>
            <p class="vmc-text-primary-2 letter-spacing-1 mb-0">
              By Veritas Admin — July 28, 2024
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
              Veritas held its 35th Anniversary Celebration at the Manila Hotel –Centennial Hall last July 11, 2024.  Event was well attended by different sectors of government, industry, and other business associates and partners. Congratulatory speeches were given by Asec. Jerome Pampolina of the Department of Migrant Workers (DMW), Mr. Toshihito Inoue, Chairman of International Mariners Management Association of Japan (IMMAJ), Capt. Kazumi Tomi, President of Kagoshima Senpaku Kaisha Ltd., and Capt. Nobuyoshi Hiratsuka, Executive Officer of “K” Line Roro Bulk Ship Management Co. Ltd. (KRBS).
            </p>

            <p class="text-left my-3">
              Veritas President Mr. Jiro Marquez opened his speech with the event’s underlying spirit of profound gratitude, to all that have brought Veritas to 35 years of existence and continued progress.  KRBS Managing Executive Officer Mr. Tadashi Takahashi then led the toast ceremonies, with well wishes for Veritas and with everyone.
            </p>

            <p class="text-left my-3">
              The grand attendance was entertained with several performances to their enjoyment.  Much as the theme goes, several recognitions were given, to all Veritas Principals, Government Agencies and Industry Associations, Business Partners, Staff and Crew Loyalty Awardees.
            </p>

            <p class="text-left my-3">
              Special awards were also given to a notable few, who have left an indelible mark and contributed to Veritas growth and development.  Outstanding awards were given to former employees whose established business practices and standards are still carried on to this day.  These awards were given to Capt. Lexington Calumpang, former Training Manager, Mr. Gilberto Manaloto, former general Affairs Manager, and Ms. Fortunata Pinez, former Finance Manager.
            </p>

            <p class="text-left my-3">
              To add to this distinction, Hall of Fame awards were given to Veritas leaders who paved the way for Veritas and have contributed as well to the Manning Industry.  These awards were given to Capt. Andres Alvaro, former Vice-President (deceased), whose award was received by his wife, Capt. Makoto Kono, former Principals Representative, and Mr. Ericson Marquez, former President and now Chairman of the Board.
            </p>

            <p class="text-left my-3">
              Our very own Chairman Mr. Ericson Marquez gave his message of thanks and appreciation to all that have made Veritas 35 years strong, through loyal and sincere partnerships, specially to our Principals, Crew and Staff who made all this possible.  And to cap the event, a surprise performance was showcased by all Veritas staff, with the tagline – “Pinoy Ako, Veritas Tayo”.
            </p>

            <div class="d-flex justify-content-center flex-wrap">
              <div class="m-1" v-for="sectionItem8 in section8" v-bind:key="sectionItem8">
                <img :src="sectionItem8" alt="" class="border" style="height: 350px; width: auto;">
              </div>
            </div>

            <p class="text-left my-3">
              35 years of partnerships, 35 years of thanks.  Congratulations to all of Veritas Maritime Corporation!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vmc35Anniversary2024",
  data(){
    return {
      section1 : [
        require(`@/assets/news/2024/anniversary/Anniversary35A.jpg`),
        require(`@/assets/news/2024/anniversary/Anniversary35B.png`),
      ],
      section8 : [
        require(`@/assets/news/2024/anniversary/Anniversary35C.png`),
        require(`@/assets/news/2024/anniversary/Anniversary35D.png`),
      ]
    }
  }
}
</script>

<style scoped>

</style>

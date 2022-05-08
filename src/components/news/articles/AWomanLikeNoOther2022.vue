<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              A Woman Like No Other
            </h2>
            <p class="vmc-text-primary-2 letter-spacing-1 mb-0">
              By Veritas Admin — May 08, 2022
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <div class="row">
              <div class="col-md-4 my-2" v-for="natty1 in nattys1" v-bind:key="natty1">
                <img :src="natty1" alt="" class="border">
              </div>
            </div>
            <p class="mt-3 text-left">
              Miss Naty… a woman like no other, who dedicated 31 years of her life at Veritas Maritime Corporation, and still actively mentoring the next generation of leaders, extending her motherly love to all the office staff and crew surrounding her on and off work.  It is but fitting that for today May 8, 2022, as we celebrate Mother’s Day, that we set the stage for one of Veritas pioneer staff that contributed in the success of the company, instilling the family culture and extending her love and care to each and every one.
            </p>
            <p class="text-left">
              Paths crossed as she transferred from another manning company and moved to VERITAS in 1991 as the Finance Manager.  Along with her employment, she introduced her husband to join our VERITAS team, and helped bring in other referred crew who have manned several VERITAS vessels.
            </p>
            <div class="row">
              <div class="col-md-4 my-2" v-for="natty2 in nattys2" v-bind:key="natty2">
                <img :src="natty2" alt="" class="border">
              </div>
            </div>
            <p class="text-left">
              She has three children, namely, Marco, Kristine Ann, and Howie, all successful in their respective fields of work. She had always brought them in gatherings and company events, that kept everyone familiar and part of the VERITAS Family.
            </p>
            <p class="text-left">
              Now, she enjoys taking care of her grandson, and expecting 1 more “apo” to be blessed with this year.
            </p>
            <div class="row">
              <div class="col-md-4 my-2" v-for="natty3 in nattys3" v-bind:key="natty3">
                <img :src="natty3" alt="" class="border">
              </div>
            </div>
            <p class="text-left">
              As she progressed to move up the corporate ladder, Miss Naty, always kept herself grounded and extended her network of friends with all staff and crew families as well. Her demeanor and mild-mannered disposition made it easy to approach her as she was well loved by most.  Her dedication to her work and the company is second to none.  She has consistently been passionate about her job that motivates and drives the people around her to perform and work with enthusiasm.
            </p>
            <p class="text-left">
              In difficult situations, Miss Naty had always been calm and collected, and always find solutions as she never gives up and continues to be persistent in addressing any situation that comes her way.  Change is inevitable, and this is one trait that Miss Naty was always prepared for, as she was always open to changes for as long as it improves the processes and benefits most. She never stops seeking new things to learn and passes it on to the next generation, thus, respect has always been earned as exemplified in her behavior towards work and with others.
            </p>
            <div class="row">
              <div class="col-md-4 my-2" v-for="natty4 in nattys4" v-bind:key="natty4">
                <img :src="natty4" alt="" class="border">
              </div>
            </div>
            <p class="text-left">
              Her fun and wacky moments, lightens the mood for everyone. Every year during Christmas gatherings, we always look forward to her participation as she gives her 100% and never fails to amaze us with her talent.  There never is a dull moment with her.
            </p>
            <p class="text-left">
              Despite her retirement, Miss Naty still comes to office every so often, as she gives a feeling of assurance that no matter how hard the situation we may be facing, we will always end up winning.  A true example of the VERITAS culture, personified at its best.
            </p>
            <div class="row">
              <div class="col-md-4 my-2" v-for="natty5 in nattys5" v-bind:key="natty5">
                <img :src="natty5" alt="" class="border">
              </div>
            </div>
            <p class="text-left font-weight-bold">
              To Miss Naty, and to all mothers of our VERITAS Family, Happy Mother’s Day!!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AWomanLikeNoOther2022",
  data(){
    return {
      nattys1 : [
        require(`@/assets/news/2022/may/Picture15.jpg`),
        require(`@/assets/news/2022/may/Picture5.jpg`),
        require(`@/assets/news/2022/may/Picture2.jpg`),
      ],
      nattys2 : [
        require(`@/assets/news/2022/may/Picture3.jpg`),
        require(`@/assets/news/2022/may/Picture9.jpg`),
        require(`@/assets/news/2022/may/Picture8.jpg`),
      ],
      nattys3 : [
        require(`@/assets/news/2022/may/Picture12.jpg`),
        require(`@/assets/news/2022/may/Picture13.jpg`),
        require(`@/assets/news/2022/may/Picture7.jpg`),
      ],
      nattys4 : [
        require(`@/assets/news/2022/may/Picture6.jpg`),
        require(`@/assets/news/2022/may/Picture14.jpg`),
        require(`@/assets/news/2022/may/Picture4.jpg`),
      ],
      nattys5 : [
        require(`@/assets/news/2022/may/Picture1.jpg`),
        require(`@/assets/news/2022/may/Picture10.jpg`),
        require(`@/assets/news/2022/may/Picture11.jpg`),
      ],

    }
  }
}
</script>

<style scoped lang="scss">

</style>

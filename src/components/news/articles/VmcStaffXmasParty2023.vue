<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              2023 Veritas Maritime Corporation Staff Christmas Party
            </h2>
            <p class="vmc-text-primary-2 letter-spacing-1 mb-0">
              By Veritas Admin — December 20, 2023
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center pt-4">
            <p class="my-3 text-left">
              The Veritas Maritime Corporation staff party was held last 08 December 2023 at Marc 2000 Tower’s Penthouse, with the theme “At the Movies”. The event was attended by a total of 195 participants (84 staff and 111 Family/Guests).
            </p>
            <p class="text-left my-3">
              The event kicked off with a costume or the best “look-a-like” contest, with 3 winners wearing their best character costumes. The contest was followed by special intermission numbers by Staff families, Cadets and SOTs.  Main event focused on the group performances of Veritas Staff with prizes awarded to the winners. Other games and raffle prizes provided more enjoyment for everyone. Event was concluded with a special song tribute to our Chairman and other retired Veritas Staff who were also present in the event.  Joining the celebration and activities were the representatives from “K” Line RoRo Bulk Ship Management Co. Ltd. (KRBS) KOBE, Capt. Nobuyoshi Hiratsuka, Mr. Kazuhiro Kobatake., KRBS ROHQ, Mr. Tadashi Takahashi, Capt. Makoto Kono, Mr. Hitoshi Koshikawa and Capt. Daisuke Yamamoto, and KRBS Beijing, Mr. Liyuan Li. As well as the representatives from Kagoshima Senpaku Kaisha Ltd. (KSK), FT Logistics (Asia) Pte. Ltd, and Sansho Kaiun Co. Ltd.
            </p>

            <div class="d-flex justify-content-center flex-wrap">
              <div class="m-1">
                <img :src="section1" alt="" class="border pl-1" style="height: auto; width: 100%;">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VmcStaffXmasParty2023",
  data(){
    return {
      section1 : require(`@/assets/news/2023/StaffXmasParty.png`)
    }
  }
}
</script>

<style scoped>

</style>

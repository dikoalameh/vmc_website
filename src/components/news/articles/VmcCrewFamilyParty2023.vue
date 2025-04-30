<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              2023 Greater Manila Area Crew and Family Party
            </h2>
            <p class="vmc-text-primary-2 letter-spacing-1 mb-0">
              By Veritas Admin — December 20, 2023
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center pt-4">
            <p class="my-3 text-left">
              The Crew and Family Party for GMA soon followed last 09 December 2023. The event was held at the Century Park Hotel with a record attendance of 609 participants (71 Crew, 538 Family/Guests).
            </p>
            <p class="text-left my-3">
              The party was attended and participated by representatives from “K” Line RoRo Bulk Ship Management Co. Ltd. (KRBS) KOBE, Capt. Nobuyoshi Hiratsuka, Mr. Kazuhiro Kobatake., KRBS ROHQ, Mr. Tadashi Takahashi, Capt. Makoto Kono and KRBS Beijing, Mr. Liyuan Li. As well as the representatives from Kagoshima Senpaku Kaisha Ltd. (KSK), FT Logistics (Asia) Pte. Ltd, and Sansho Kaiun Co. Ltd. The program included a segment on business updates and information sharing, along with the talks from Dra. Maria Luisa Malaca-Sanchez of K Line Clinic. A special recognition was also given to the family of the late Capt. Leonilo Factor, for his contribution and loyalty to Veritas.  Usual games and raffle prizes were given out to everyone’s delight, along with the “Aguinaldo” gift-giving for the children and crew families.  Special performances were also presented by Veritas Staff and the Seafarer’s families, that amazed the crowd with their talents and passion to make the event a memorable one.
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
  name: "VmcCrewFamilyParty2023",
  data(){
    return {
      section1 : require(`@/assets/news/2023/CrewFamilyXmas.png`)
    }
  }
}
</script>

<style scoped>

</style>

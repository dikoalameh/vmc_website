<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Seafarers, Heroes of the Pandemic as Shipping Plays Vital Role in Crisis
            </h2>
            <p class="vmc-text-primary-2 letter-spacing-1 mb-0">
              By Veritas Admin — November 12, 2020
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <img :src="crews" alt="" class="mt-3">
            <small><strong>IMO | </strong>
              Seafarers working on a container ship in Johor Port, Malaysia.</small>
            <p class="mt-3">The global shipping industry has played a vital role in the global response to the COVID-19 pandemic, and demand for its services has limited the annual decline in maritime trade volumes to around 4.1 per cent in 2020, the UN Conference on Trade and Development (UNCTAD) said in its annual report on the shipping industry on Thursday. </p>
            <p>
              “The pandemic has brought to the fore the importance of maritime transport as an essential sector for the continued delivery of critical supplies and global trade in time of crisis, during the recovery stage and when resuming normality”, UNCTAD’s Review of Maritime Transport 2020 said.
            </p>
            <h4 class="font-weight-normal vmc-text-primary-2">‘Depressed’ sector </h4>
            <p>
              Shipping was already “pretty depressed” in 2019, as trade protectionism, slower oil demand and tariff wars, slashed its growth rate to 0.5 per cent, the lowest since the 2008 financial crisis, Shamika Sirimanne, Director of UNCTAD’s Division on Technology and Logistics, told a news conference in Geneva.
            </p>
            <p>
              Those problems persisted in 2020 and were compounded by the pandemic. But the industry had met the challenge head-on.
            </p>
            <p>
              “All in all, maritime transport and logistics kept essential goods and trade flows moving. Ships moved, ports kept open. So we should be thankful to the maritime sector that people still could buy food and medicine and essential goods in our neighbourhood shops, even though we were in a very strict lockdown”, Ms. Sirimanne said.
            </p>
            <p>
              “This brings me to the other point: the unsung heroes who put food on our table. And these are the seafarers. They have been making huge personal sacrifices throughout this pandemic. Large numbers of seafarers were stuck in ships for many months, and they were unable to sign off after long tours of duty to go home.”
            </p>
            <p>
              <strong><i>
                " The unsung heroes ... the seafarers. They have been making huge personal sacrifices throughout this pandemic"  – Shamika Sirimanne, UNCTAD
              </i></strong>
            </p>
            <p>
              Others were prevented from returning to their ships, with dire implications for their earnings.
            </p>
            <p>
              UNCTAD, along with the International Labour Organization (ILO) and the International Maritime Organization (IMO), was calling for seafarers and other marine personnel to be classified as critical workers and to be exempted from travel restrictions, regardless of nationality, she said.
            </p>
            <h4 class="font-weight-normal vmc-text-primary-2">Rebound expected </h4>
            <p>
              Maritime trade volumes are expected to rebound by 4.8 per cent in 2021 if economic growth resumes as the pandemic subsides. But further waves of the pandemic could lead to a steeper decline in shipping, the report said.
            </p>
            <p>
              Jan Hoffmann, Chief of the Trade Logistics Branch in UNCTAD’s Division on Technology and Logistics, said the 2020 downturn might have been expected to be worse, but the pandemic had prompted people to stock up, fuelling demand for maritime transport.
            </p>
            <p>
              He added that the pandemic had also created demand for expedited customs procedures that UNCTAD has long advocated, such as pre-arrival processing, single windows and transit corridors, proving that such trade facilitation measures could contribute positively to health security.
            </p>
            <p class="mb-0">
              The tough trading conditions had also favoured companies that were technologically competitive, the report said.
            </p>
            <img :src="vesselCargo" alt="" class="mt-3">
            <small><strong>IMO | </strong> A container ship unloads its cargo at a port.</small>
            <h4 class="font-weight-normal vmc-text-primary-2 mt-3">Weathering the storm </h4>
            <p>
              “The pandemic has demonstrated that first movers in terms of technological uptake have been able to better weather the storm (for example, commerce and online platforms, those using blockchain solutions and information technology-enabled third-party logistics companies)”, it said.
            </p>
            <p>
              Cybersecurity, and the ability to deal with it, were also becoming increasingly important.
            </p>
            <p>
              The pandemic was prompting companies to focus more on risk management and resilience and tempting them to shorten their supply chains, which would further depress international trade as more goods are produced close to their ultimate market. That trend was being exacerbated by growing consumer demand for customised goods, the report said.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <a href="https://news.un.org/en/story/2020/11/1077462" target="_blank" class="mb-0 mt-3 vmc-text-primary-2" style="opacity: 75%">
              See Original Post By: UN News
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SeafarersHeroesOfPandemic',
  data() {
    return {
      'crews': require(`@/assets/news/SeafarersHeroesOfPandemic_7-9-2021.jpg`),
      'vesselCargo': require(`@/assets/news/SeafarersHeroesOfPandemic2_7-9-2021.jpg`),
    }
  }
};
</script>

<style scoped>

</style>

<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">Crew Updates</h2>
          </div>
        </div>

        <div v-for="article in crewNewsList" :key="article.id" class="row">
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                
                <div class="col-md-5"> <!-- Image container for when theres no provided image -->
                  <img class="card-img" 
                      :src="article.image || require('@/assets/no_image.jpg')" 
                      alt="News Image"
                      style="object-fit: cover; height: 100%; min-height: 250px;">
                  </div>

                <div class="col-md-7">
                  <div class="card-body">
                    
                    <div class="font font-weight-normal mb-1">
                    <h4 class="title-clamp">{{ article.title }}</h4> <!-- Title for Crew Updates -->
                    </div>  

                    <div class="letter-spacing-1">
                    <p class="author-date-clamp">
                      By {{ article.author }} — {{ article.date }} <!-- Date and author -->
                    </p>
                    </div>

                    <div class="d-none d-lg-block">
                      <p class="news-clamp"> {{ article.content }}</p> <!-- Content -->
                    </div>

                    <router-link class="vmc-text-primary-2" :to="'/news/' + article.id">continue reading . . .</router-link> <!-- Link to full article -->

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div v-if="crewNewsList.length === 0" class="row mt-5">
          <div class="col-12 text-center">
            <p class="text-muted">No crew news updates available at the moment.</p> <!-- appears when there are no crew news articles -->
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { cmsMixin } from '@/mixins/cmsMixin';

export default {
  name: 'CrewNews', // <--- 1. Change Name
  mixins: [cmsMixin],
  computed: {
    crewNewsList() {
      // Safety check
      if (!this.cms.newsArticles) return [];
      
      return this.cms.newsArticles
        .filter(article => article.category === 'Crew Updates') // 1. Filter Category
        .sort((a, b) => new Date(b.date) - new Date(a.date));   // 2. Sort Newest First
    }
  }
};
</script>

<style scoped>
/* Keeping your exact style requirements */
.news-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 5; /* Limits text to specified amount of lines so cards stay neat */
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 10px;
}

.author-date-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 1; /* Limits text to specified amount of lines so cards stay neat */
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 10px;
  color: #85a8c7;
}

.title-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limits text to specified number lines. Change this number to fit perfectly. */
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 10px;
}

.vmc-py-big { padding-top: 80px; padding-bottom: 80px; }
.vmc-text-primary { color: #002366; }
.vmc-text-primary-2 { color: #85a8c7; }

</style>



{<!-- <template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
             Crew Updates
            </h2>
          </div>
        </div>

        <div class="row">
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news30" alt="2024 Veritas Crew and Family Parties - Cebu and Bohol">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">2024 Veritas Crew and Family Parties - Iloilo and Bacolod</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — December 01, 2024
                    </p>
                    <p class="d-none d-lg-block">
                      Veritas Maritime Corporation held its annual Crew and Family Parties, in advance celebration of the holiday season, across several Provincial Chapters.  Activities commenced from October 26 to 28, 2024 in Cebu and Bohol, and November 8 to 10, 2024 in Iloilo and Bacolod.
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'VmcCrewFamilyParty2024IloiloBacolod'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news29" alt="2024 Veritas Crew and Family Parties - Cebu and Bohol">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">2024 Veritas Crew and Family Parties - Cebu and Bohol</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — December 01, 2024
                    </p>
                    <p class="d-none d-lg-block">
                      Veritas Maritime Corporation held its annual Crew and Family Parties, in advance celebration of the holiday season, across several Provincial Chapters.  Activities commenced from October 26 to 28, 2024 in Cebu and Bohol, and November 8 to 10, 2024 in Iloilo and Bacolod.
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'VmcCrewFamilyParty2024CebuBohol'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news32" alt="2024 Veritas Crew and Family Parties - Cebu and Bohol">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">2023 Greater Manila Area Crew and Family Party</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — December 20, 2023
                    </p>
                    <p class="d-none d-lg-block">
                      The Crew and Family Party for GMA soon followed last 09 December 2023. The event was held at the Century Park Hotel with a record attendance of 609 participants (71 Crew, 538 Family/Guests).
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'VmcCrewFamilyParty2023'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news28" alt="Covid Cases">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">VOYAGE TO OUR LIFE HERITAGE</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — July 28, 2022
                    </p>
                    <p class="d-none d-lg-block">
                      Mr. Agustin “Jun” Casten Gagajena, Jr., is the youngest of four children of Major Agustin Gagajena, Sr and Norma Casten Gagajena. By origin, his family name reflects his traits as a Risk Taker, Visionary and Unpretentious.
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'VoyageToOurLifeHeritage2022'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news22" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">Veritas Allotees Year End Gathering for Bacolod/Iloilo Panay Island Group</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — November 27, 2021
                    </p>
                    <p class="d-none d-lg-block">
                      SAVE THE DATE! 🥳🎉
                      You are invited to the Veritas Allotees Year End Gathering for Cebu, Bohol, Bicol, CDO, Davao, Metro Manila/Luzon and other Provinces on December 5, 2021 at 1-4pm.

                      Registration is a must! Please click on this link to register:
                      <a href="https://forms.gle/LGQ87nSz9VWQX2Ts9" target="_blank">https://forms.gle/LGQ87nSz9VWQX2Ts9</a>
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'AllotteesCebuBoholBicolcdoDavaoMm2021'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news21" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">Veritas Allotees Year End Gathering for Bacolod/Iloilo Panay Island Group</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — November 25, 2021
                    </p>
                    <p class="d-none d-lg-block">
                      SAVE THE DATE! 🥳🎉
                      You are invited to the Veritas Allotees Year End Gathering for Bacolod/Iloilo Panay Island Group on December 4, 2021 at 1-4pm.

                      Registration is a must! Please click on this link to register:
                      <a href="https://forms.gle/dPkMNhFoCbJBZDEZA" target="_blank">https://forms.gle/dPkMNhFoCbJBZDEZA</a>
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'AllotteesBacolodIloiloPanay2021Gathering'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news13" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">Seamans Wife Insights</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — July 10, 2021
                    </p>
                    <p class="d-none d-lg-block">
                      As a wife of a seafarer, it is not an easy job or task simply because there is a lot of challenges that I encounter in our daily life.
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'SeamansWifeInsights'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news7" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">VMC Crew Experience / Story</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — July 6, 2021
                    </p>
                    <p class="d-none d-lg-block">
                      During this hard time of pandemic, we cannot think more other than our health. It has been everyone's priority since the Covid-19 outbreak started.                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'CrewVeritasStory'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news6" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">Retired Crew Virtual Awarding Ceremony</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — May 27, 2021
                    </p>
                    <p class="d-none d-lg-block">
                      On May 27, 2021, 15 - 31 service years crew in Veritas Maritime Corporation held a retired crew virtual awarding ceremony via zoom.
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'RetiredCrewVirtualAwardingCeremony'}">continue reading . . .</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-2">
            <div class="card">
              <div class="row no-gutters d-flex align-items-center">
                <div class="col-md-5">
                  <img class="card-img" :src="news3" alt="Suresh Dasari Card">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-1">Seafarers, Heroes of the Pandemic as Shipping Plays Vital Role in Crisis</h4>
                    <p class="vmc-text-primary-2 letter-spacing-1">
                      By Veritas Admin — November 12, 2020
                    </p>
                    <p class="d-none d-lg-block">
                      The global shipping industry has played a vital role in the global response to the COVID-19 pandemic, and demand for its services has limited the annual decline in maritime trade volumes to around 4.1 per cent in 2020, the UN Conference on Trade and Development (UNCTAD) said in its annual report on the shipping industry on Thursday.
                    </p>
                    <router-link class="vmc-text-primary-2" :to="{name: 'SeafarersHeroesOfPandemic'}">continue reading . . .</router-link>
                  </div>
                </div>
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
  name: 'CrewNews',
  data() {
    return {
      'news3': require(`@/assets/news/SeafarersHeroes_home.jpg`),
      'news6': require(`@/assets/keyvisuals/retirees_63021.jpg`),
      'news7': require(`@/assets/news/2014E015_covid_7-6-2021.jpg`),
      'news13': require(`@/assets/news/tagaveritasako_7-9-2021.jpg`),
      'news21': require(`@/assets/programs/allottees/2021/2021AllotteeVisayas.jpg`),
      'news22': require(`@/assets/programs/allottees/2021/2021AllotteeOthers.jpg`),
      'news28': require(`@/assets/news/2022/jul/VoyageLifetimeHeritage/Picture2.jpg`),
      'news29': require(`@/assets/news/2024/CebuBohol2024.jpg`),
      'news30': require(`@/assets/news/2024/IloiloBacolod2024.jpg`),
      'news32': require(`@/assets/news/2023/CrewFamilyXmas.png`),
    }
  }
};
</script>

<style scoped>

</style> -->}

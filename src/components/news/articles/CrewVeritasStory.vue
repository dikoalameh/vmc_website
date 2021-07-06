<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              VMC Crew Experience / Story
            </h2>
            <p class="vmc-text-primary-2 letter-spacing-1 mb-0">
              By Veritas Admin — July 6, 2021
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <img :src="crew" alt="" class="my-3" style="max-width: 500px">
            <p class="text-left">During this hard time of pandemic, we cannot think more other than our health. It has been everyone's priority since the Covid-19 outbreak started.</p>
            <p class="text-left">I am Eric Jr P. Drilon, considered as a Covid-19 survivor, highly reccommend the actions with sense of urgency of my Company- Veritas in helping me through this rough time of my life. They have been with me since day 1 of my recovering journey. "Thank you" is an understatement for the help and efforts you have given me. To the staffs of the Veritas, frontliners and everyone who assisted me all through out, thank you very much, keep safe, God bless and more power.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CrewVeritasStory',
  data() {
    return {
      'crew': require(`@/assets/news/2014E015_covid_7-6-2021.jpg`),
    }
  }
};
</script>

<style scoped>

</style>

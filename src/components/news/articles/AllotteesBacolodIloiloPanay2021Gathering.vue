<template>
  <div class="news">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Veritas Allotees Year End Gathering for Bacolod/Iloilo Panay Island Group
            </h2>
            <p class="vmc-text-primary-2 letter-spacing-1 mb-0">
              By Veritas Admin — November 25, 2021
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 my-3">
            <p>SAVE THE DATE! 🥳🎉</p>
            <p>You are invited to the Veritas Allotees Year End Gathering for Bacolod/Iloilo Panay Island Group on December 4, 2021 at 1-4pm. </p>
            <p>
              Registration is a must! Please click on this link to register:
              <a href="https://forms.gle/dPkMNhFoCbJBZDEZA" target="_blank">https://forms.gle/dPkMNhFoCbJBZDEZA</a>
            </p>
            <p>Be ready for a fun-filled afternoon of raffles and games! Join our TikTok challenge too for a chance to win fabulous prizes:</p>
            <p class="font-weight-bold mb-0">Mechanics:</p>
            <ol>
              <li>There will be 2 categories - Individual and Group</li>
              <li>Record a TikTok video. Your video should be a Christmas theme.</li>
              <li>Max of 1 minute video.</li>
              <li>Feel free to use costumes or props for additional points.</li>
              <li>The organizing committee will screen all entries and select those qualified for the semi-final round. Only shortlisted videos will be shown during the program. Winners will be selected by voting.</li>
            </ol>
            <p>
              See you in Zoom! Click on this link to join.
              <a href="https://zoom.us/j/97226042477?pwd=OUdCOTR3bHAzd2JXOU9kYVEzU0tEdz09" target="_blank">
                https://zoom.us/j/97226042477?pwd=OUdCOTR3bHAzd2JXOU9kYVEzU0tEdz09
              </a>
            </p>
            <p>Meeting ID: 972 2604 2477</p>
            <p>Passcode: Veritas</p>
            <p>Register now!</p>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-md-6 my-2" v-for="image in imgs" v-bind:key="image">
            <img :src="image" alt="" class="border">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllotteesBacolodIloiloPanay2021Gathering',
  data() {
    return {
      imgs: [
        require(`@/assets/programs/allottees/2021/2021AllotteeVisayasInvitation.jpg`),
        require(`@/assets/programs/allottees/2021/2021AlloteeVisayasTiktok.jpg`),
      ]
    }
  }
};
</script>

<style scoped>

</style>

<template>
  <div class="vmc-cadets">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Crew Development Program (All Crew)
            </h2>
          </div>
          <div class="col-md-12">
            <p class="pr-1 mb-0">
              With its commitment to the development and upgrading of the seaman profession, Veritas launched its Crew Development Program in late 1993 to provide a continuing educational and upgrading program aimed at ensuring the development of Veritas seafarers into becoming competent and reliable Marine Officers.  The Crew Development Program has resulted to increase in crew’s efficiency and performance.  The program has been an invaluable help in their aspirations for promotion and passing the Philippine Licensing Examinations for Deck and Engine Officers.  The seminars and courses integral in the program are:
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-3 order-md-10 my-3">
            <img :src="promotion" alt="">
          </div>
          <div class="col-md-9  order-md-0">
            <h4 class="font-weight-light">Crew Upgrading / Promotion Program /(in-house)</h4>
            <p>
              This in-house training program is designed to enhance and correct noted performances and reported deficiencies of ex-crew and who have served on board any of the VMC manned ships with the aim of improving their performance for the next vessel assignments as based on the revised STCW 95 and ISM SEP requirements.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p>
              This seminar also aims to mold and develop the crew into becoming qualified and competent officers and crew in the performance of new functions as required for the next rank. The program provides to the participants the opportunity to enhance their theoretical and technical knowledge as based on the revised STCW 95, and ISM requirements.
            </p>
            <p>
              Each seminar is tailored to answer to specific training needs of participants based on their individual training needs analyses and evaluations.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-3 my-3">
            <img :src="cook" alt="">
          </div>
          <div class="col-md-9">
            <h4 class="font-weight-light">Cooks’ Development Program</h4>
            <p>
              Veritas started its Steward Development Program in 2001 primarily to develop a new breed of young messmen and cooks.  In 2003, Veritas goes steps further with the launching of its Cooks’ Development Program.
            </p>
            <p>
              VERITAS MARITIME CORPORATION faces the challenges of growth and development especially in supplying qualified and competent grew to its expanding fleets.  Part of its thrust is the development of cooks and stewards capable of meeting the standards required for international crewing.
            </p>
            <p class="pr-1">
              Thus, Veritas Maritime Corporation introduces a two-thrust development program for the Steward Department – 1) the COOKS UPGRADING PROGRAM  - for development of skills of Cooks and Second Cooks, and 2) the COOK CADET Educational Sponsorship / FAST TRACK Program for students aiming for careers in the Steward Department (as Cooks).
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-3 order-md-10 my-3">
            <img :src="rating" alt="">
          </div>
          <div class="col-md-9  order-md-0">
            <p>
              Veritas started its Ratings Development Program in 2008.  Veritas felt the need to develop crew who will stay to become top-quality No. 1 Oilers unlike regular engine crew whose goals are towards becoming Engine officers.  In the Deck department, this program will develop top-notch Bosuns.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrainingPrograms',
  data() {
    return {
      'promotion': require(`@/assets/crews/promotionTraining1.jpg`),
      'cook': require(`@/assets/no_image.jpg`),
      'rating': require(`@/assets/crews/shipboardTraining.jpg`),
    }
  }
};
</script>

<style scoped>

</style>

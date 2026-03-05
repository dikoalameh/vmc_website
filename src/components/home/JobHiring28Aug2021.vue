<template>
  <div class="job-hiring">
    <!-- Modal -->
    <div class="modal fade border-0" id="JobHiring" tabindex="-1" role="dialog" aria-labelledby="JobHiringTitle" aria-hidden="true" data-keyboard="false">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content border-0 mx-2">
          <div class="modal-header vmc-bg-prime-5 border-0">
            <h4 class="modal-title text-center w-100 font-weight-normal vmc-text-white letter-spacing-1" id="JobHiringTitle">Urgent Hiring</h4>
          </div>
          <div class="modal-body">
            <!-- Main contents of the Hiring pop up -->

         
            <div v-for="(job, index) in cms.jobList" :key="index" class="mb-4">
              <h4 class="font-weight-normal vmc-text-primary-2 mt-3 text-left">{{ job.title }}</h4>
              <ol class="text-left">
                <li v-for="(req, rIndex) in (job.requirements ? job.requirements.split('\n') : [])" :key="rIndex" class="pl-2">{{ req }}</li>
              </ol>
            </div>
            

            <!-- End of pup up info -->
          </div>
          <div class="modal-footer vmc-bg-dark-1 border-top-0">
            <router-link type="button" :to="{path: '/career'}"
                    class="btn vmc-btn-circle vmc-btn-prime w-100"
                    data-dismiss="modal">
              See Other Company Job Openings
            </router-link>

            <button type="button"
                    class="btn vmc-btn-circle vmc-btn-secondary w-100"
                    data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cmsMixin } from '@/mixins/cmsMixin';
export default {
  name: 'JobHiring28Aug2021',
  
  mixins: [cmsMixin], 
};
</script>

<style scoped>

</style>

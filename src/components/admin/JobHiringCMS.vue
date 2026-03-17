<template>
  <div class="cms-container">
    <ToastCMS ref="toast" />
    <div class="sticky-controls">
      <div class="toggle-wrapper d-flex px-3">
        <label class="switch">
          <input type="checkbox" class="w-0 h-0" @click="toastNotif" v-model="isEnabled" @change="toastNotif">
          <span class="slider round"></span>
        </label>
        <span class="toggle-label ml-3">Enable Job Hiring Popup</span>
      </div>
      <div class="job-lists d-flex align-items-center justify-content-between px-3">
        <div class="job-header text-dark">Job Openings List</div>
        <button class="vmc-bg-prime-4 border-0 text-white px-2 py-1 rounded" @click="addContainer">
          Add Job
        </button>
      </div>
    </div>

    <form action="" id="jobhiring" @submit="saveAllChanges">
      <div class="job-section">
        <div class="py-2">
          <div class="grid-header">
            <div class="text-dark mt-4" v-for="(container, index) in containers" :key="index">
              <div class="px-3">
                <div class="d-flex align-items-center justify-content-between text-dark">
                  <span class="job-header-2 text-dark">Job # {{ index + 1 }}</span>
                  <button type="button" class="vmc-bg-prime-6 border-0 text-white px-2 py-1 rounded"
                    @click="removeContainer(index)">
                    Remove
                  </button>
                </div>
                <div class="input-group mt-3">
                  <input type="text" class="input-field w-100 text-dark p-2" placeholder=""
                    v-model="container.jobtitle">
                  <label class="floating-label">Job Title</label>
                </div>
                <div class="form-group mt-3">
                  <label class="text-dark">Requirements (Press Enter for new bullet point):</label><br>
                  <textarea rows="5" class="form-input w-100 p-1 text-dark" placeholder="Requirements for the job..."
                    v-model="container.requirements"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="px-3 mb-4">
      <button type="submit" form="jobhiring" class="vmc-bg-prime-4 text-white border-0 px-3 py-1 rounded">
        Save All Changes
      </button>
    </div>
  </div>
</template>

<script>
import ToastCMS from '../ToastCMS.vue';
export default {
  name: "JobHiringCMS",
  components: {
    ToastCMS
  },
  data() {
    return {
      containers: [],
      originalContainerInputs: [],
      isEnabled: false,
      originalIsEnabled: {}
    };
  },
  methods: {
    // FUNCTION TO DISPLAY THE TOAST WHEN ENABLING THE POPUP
    toastNotif() {
      if (!this.isEnabled) {
        this.$refs.toast.showToast("Disabled pop up", "error")
      }
      else {
        this.$refs.toast.showToast("Enabled pop up", "success")
      }
    },

    // FUNCTION TO ADD CONTAINER
    addContainer() {
      this.containers.push({
        id: Date.now(),
        jobtitle: '',
        requirements: '',
      });
      // WILL DISPLAY THIS TOAST MESSAGE WHEN ADDING THE CONTAINER
      this.$refs.toast.showToast(`Job # ${this.containers.length} form added`, "success");
    },

    // FUNCTION TO REMOVE CONTAINER
    removeContainer(index) {
      this.containers.splice(index, 1);
      // WILL DISPLAY THIS TOAST MESSAGE WHEN REMOVING THE CONTAINER
      this.$refs.toast.showToast(`Job # ${index + 1} form removed`, "error");
    },

    saveAllChanges(e) {
      e.preventDefault();
      // IF NO CHANGES WERE MADE AFTER SAVING
      if (!this.hasChanges) {
        this.$refs.toast.showToast("Nothing to save", "warning");
        return;
      }

      // SAVE DATA TO LOCAL STORAGE
      localStorage.setItem("jobHiringData", JSON.stringify(this.containers));
      localStorage.setItem("jobHiringEnabled", JSON.stringify(this.isEnabled));

      this.$refs.toast.showToast("Saved all changes.", "success");

      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  },

  mounted() {
    // GET THE SAVED LOCAL STORAGE DATA
    const savedJobs = localStorage.getItem("jobHiringData");
    const savedToggle = localStorage.getItem("jobHiringEnabled");

    if (savedJobs) {
      this.containers = JSON.parse(savedJobs);
      this.originalContainerInputs = JSON.parse(savedJobs);
    }

    if (savedToggle) {
      this.isEnabled = JSON.parse(savedToggle);
      this.originalIsEnabled = JSON.parse(savedToggle);
    }
  },

  computed: {
    // PREVENTS TO SAVE WHEN CHANGES HAS NOT BE MADE
    hasChanges() {
      return (
        JSON.stringify(this.containers) !== JSON.stringify(this.originalContainerInputs) ||
        JSON.stringify(this.isEnabled) !== JSON.stringify(this.originalIsEnabled)
      );
    }
  }
};
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
}

hr {
  border-top: 1px solid black;
}

.sticky-controls {
  position: sticky;
  z-index: 50;
  background-color: white;
}

@media (min-width: 330px) {
  .toggle-wrapper {
    margin-top: 0;
  }
  .toggle-wrapper,
  .job-lists {
    padding: 15px 0;
    border-bottom: 1px solid #ccc;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 26px;
  }

  .switch input {
    opacity: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 19px;
    width: 19px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked+.slider {
    background-color: #2196F3;
  }

  input:focus+.slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked+.slider:before {
    -webkit-transform: translateX(23px);
    -ms-transform: translateX(23px);
    transform: translateX(23px);
  }

  /* TOGGLE SLIDER */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  /* INPUT CSS */
  .job-section {
    border-radius: 8px;
  }

  .job-header {
    font-size: 17px;
  }

  .job-header-2 {
    font-size: 18px;
  }

  .job-header,
  .job-header-2 {
    font-weight: 600;
  }

  .form-group label {
    font-size: 16px;
  }

  textarea {
    resize: none;
  }

  input,
  textarea {
    font-size: 15px;
    outline: none;
  }

  button {
    font-size: 16px;
  }

  input {
    height: 36px;
  }

  .input-group {
    position: relative;
    display: flex;
  }

  .input-field {
    border: 1px solid gray;
    border-radius: 4px !important;
    width: 100%;
    outline: none;
  }

  .floating-label {
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%);
    color: gray;
    background-color: white;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  .input-field:focus~.floating-label,
  .input-field:not(:placeholder-shown)~.floating-label {
    top: 0;
    left: 8px;
    transform: translateY(-50%);
    font-size: 12px;
  }

  .grid-header>div {
    width: 100%;
  }

  .sticky-controls {
    top: 60px;
  }
}

@media (min-width: 750px) {
  .job-header {
    font-size: 20px;
  }
}

@media (min-width: 992px) {
  .grid-header {
    display: flex;
    flex-wrap: wrap;
  }

  .grid-header>div {
    width: 50% !important;
    box-sizing: border-box;
  }

  .job-header {
    font-size: 20px;
  }
}

@media (min-width: 1200px) {
  .cms-container {
    margin-left: 310px;
    width: calc(100% - 310px);
    margin-top: 82px;
  }

  .kv-wrapper {
    margin: none;
  }

  .toggle-wrapper {
    margin-top: 0;
  }

  .sticky-controls {
    top: 82px;
  }
}
</style>
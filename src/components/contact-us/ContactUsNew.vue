<template>
  <div class="contact">
    <div class="container-fluid vmc-py-big">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Connect To Us
            </h2>
          </div>
          <div class="col-md-6">
            <h4 class="font-weight-light mb-1">Address</h4>
            <p>15 Floor, MARC2000 Tower 1973 Taft Ave., Malate, Manila Philippines 1004</p>
            <a href="https://goo.gl/maps/PWLBE4UL9ECrVMW37" target="_blank" class="btn vmc-btn-circle vmc-btn-prime-2 px-3 mx-1">
              Google Maps
            </a>
            <a href="https://www.waze.com/en/live-map/directions/philippines/metro-manila/malate/veritas-maritime-corporation?utm_campaign=waze_website&utm_medium=website_menu&utm_source=waze_website&to=place.ChIJt48LqIHJlzMRYCKYCZFTix4" target="_blank" class="btn vmc-btn-circle vmc-btn-prime-2 px-4 mx-1">
              Waze Map
            </a>
            <h4 class="font-weight-light mb-1 mt-3">Telephone Number</h4>
            <table>
              <tr>
                <th>PCC Division</th>
                <th class="px-2"> : </th>
                <td>(632) 85362775</td>
              </tr>
              <tr>
                <th>BULK Division</th>
                <th class="px-2"> : </th>
                <td>(632) 85268041</td>
              </tr>
              <tr>
                <th>DOCS Division</th>
                <th class="px-2"> : </th>
                <td>(632) 85241691</td>
              </tr>
              <tr>
                <th>Training Division</th>
                <th class="px-2"> : </th>
                <td>(632) 53100317</td>
              </tr>
              <tr>
                <th>Accounting Dept</th>
                <th class="px-2"> : </th>
                <td>(632) 85243661</td>
              </tr>
              <tr>
                <th></th>
                <th class="px-2"> : </th>
                <td>(632) 85362757</td>
              </tr>
              <tr>
                <th>Exec. Offices</th>
                <th class="px-2"> : </th>
                <td>(632) 53101319</td>
              </tr>
              <tr>
                <th>Admin Dept</th>
                <th class="px-2"> : </th>
                <td>(632) 85261034</td>
              </tr>
            </table>
            <h4 class="font-weight-light mb-1 mt-3">Fax Number</h4>
            <p>(632) 85261029</p>
            <h4 class="font-weight-light mb-1">Veritas Hotline</h4>
            <p class="mb-0">0917-511-1372</p>
            <p>0947-996-0107</p>
          </div>
          <div class="col-md-6">
            <h4 class="font-weight-light mb-1">E-mail Address</h4>
            <p class="mb-0"><a class="vmc-text-primary-2" href="mailto:vmcgroup@veritas.com.ph">vmcgroup@veritas.com.ph</a></p>
            <p class=""><a class="vmc-text-primary-2" href="mailto:vmccomm@veritas.com.ph">vmccomm@veritas.com.ph</a></p>

            <h4 class="font-weight-light mb-1">Facebook Page</h4>
            <table>
              <tr>
                <th>Veritas Crew</th>
                <th class="px-2"> : </th>
                <td>
                  <a href="https://www.facebook.com/veritas.maritime.587"
                     target="_blank" class="vmc-text-primary-2">
                    https://www.facebook.com/veritas.maritime.587</a>
                </td>
              </tr>
            </table>

            <h4 class="font-weight-light mb-1 mt-3">Send us comments / feedback :</h4>
            <form @submit.prevent="sendFeedback" ref="sendFeedbackForm" method="post">
              <div class="form-group mb-1">
                <label for="FullName" class="mb-0">Full Name: <sup class="vmc-text-danger">*</sup></label>
                <input class="form-control" id="FullName"
                       required aria-required="true"
                       v-model.trim="$v.newComment.name.$model"
                       :class="{'is-invalid': $v.newComment.name.$error, 'is-valid': !$v.newComment.name.$invalid}"
                >
                <div class="invalid-feedback small">
                  <span v-if="!$v.newComment.name.required">Name is required. </span>
                  <span v-if="!$v.newComment.name.minLength">Name must have at least {{$v.newComment.name.$params.minLength.min}}. </span>
                </div>
              </div>
              <div class="form-group mb-1">
                <label for="EmailAddress" class="mb-0">Email Address: <sup class="vmc-text-danger">*</sup></label>
                <input class="form-control" id="EmailAddress"
                       required aria-required="true"
                       v-model.trim="$v.newComment.email.$model"
                       :class="{'is-invalid': $v.newComment.email.$error, 'is-valid': !$v.newComment.email.$invalid}"
                >
                <div class="invalid-feedback small">
                  <span v-if="!$v.newComment.email.required">Email is required. </span>
                  <span v-if="!$v.newComment.email.email">Please enter a valid email address. </span>
                </div>
              </div>
              <div class="form-group mb-1">
                <label for="ContactNumber" class="mb-0">Contact Number: <sup class="vmc-text-danger">*</sup></label>
                <input class="form-control" id="ContactNumber"
                       required aria-required="true"
                       v-model.trim="$v.newComment.contact_number.$model"
                       :class="{'is-invalid': $v.newComment.contact_number.$error, 'is-valid': !$v.newComment.contact_number.$invalid}"
                >
                <div class="invalid-feedback small">
                  <span v-if="!$v.newComment.contact_number.required">Contact number is required. </span>
                  <span v-if="!$v.newComment.contact_number.numeric">Contact field accepts number only. </span>
                  <span v-if="!$v.newComment.contact_number.minLength">Contact number must have at least {{$v.newComment.contact_number.$params.minLength.min}}. </span>
                  <span v-if="!$v.newComment.contact_number.maxLength">Contact number must have at most {{$v.newComment.contact_number.$params.maxLength.max}}. </span>
                </div>
              </div>
              <div class="form-group mb-1">
                <label for="Message" class="mb-0">
                  Feedback / Comments: <sup class="vmc-text-danger">*</sup>
                </label>
                <textarea name="Message" id="Message"
                          class="form-control" rows="4" required
                          v-model.trim="$v.newComment.message.$model"
                          :class="{'is-invalid': $v.newComment.message.$error, 'is-valid': !$v.newComment.message.$invalid}"
                >
                </textarea>
                <div class="invalid-feedback small">
                  <span v-if="!$v.newComment.message.required">Message is required. </span>
                </div>
              </div>
              <button type="submit" class="btn vmc-btn-circle vmc-btn-prime-2 px-5">SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row no-gutters">
        <div class="col-md-12 mb-0 pb-0" id="GoogleMapContainer">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.5044557253113!2d120.9890083153022!3d14.570307181723464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c981a80b8fb7%3A0x1e8b539109982260!2sVeritas%20Maritime%20Corporation!5e0!3m2!1sen!2sph!4v1620362498790!5m2!1sen!2sph" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {email, maxLength, minLength, numeric, required} from 'vuelidate/lib/validators';
Vue.use(VueAxios, axios)

export default {
  name: 'ContactUsNew',
  data() {
    return {
      newComment : {
          name : '',
          email : '',
          contact_number : '',
          message : '',
      }
    };
  },
  validations: {
    newComment: {
      name: {
        required,
        minLength: minLength(3)
      },
      contact_number: {
        required,
        numeric,
        minLength: minLength(5),
        maxLength: maxLength(16)
      },
      email: {
        required,
        email
      },
      message: {
        required
      }
    }
  },
  methods: {
    sendFeedback() {
      Swal.fire({
        title: 'Are you sure?',
        text: 'This will directly contact Veritas!',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, send it!',
        confirmButtonColor: '#84a7c6',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.value) {
          // window.location.href =
          //     `mailto:shantycajulao@gmail.com?subject=Name: ${this.fullName} — Contact Number: ${this.contactNumber}&body=Message: %0D%0A${this.emailMessage}`
          Vue.axios.post('http://vmc_website_api.test/api/public/comments',this.newComment)
          .then((res)=> {
            Swal.fire(
                'Success',
                res.data,
                'success',
            )
          })

          this.newComment = ''
          this.$nextTick(() => { this.$v.$reset(); });
        }
      })
    },
    // sendComment(e) {
    //   Vue.axios.post('http://vmc_website_api.test/api/public/comments',this.newComment)
    //   .then((res)=> {
    //     console.log(res.data)
    //   })
    //   console.log(this.newComment)
    //   e.preventDefault();
    // }
  }
};
</script>

<style scoped>
.error-message *{
  color: var(--vmc-danger-5);
  opacity: .5;
  font-weight: bold;
}

.swal2-confirm .swal2-styled {
  border-radius: 100px;
  background-color: var(--vmc-primary-3);
}
#GoogleMapContainer {
  line-height: 0;
}
</style>

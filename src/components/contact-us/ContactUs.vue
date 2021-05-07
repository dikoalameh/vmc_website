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
              <tr>
                <th>Veritas Staff</th>
                <th class="px-2"> : </th>
                <td>
                  <a href="https://www.facebook.com/groups/2479528432363079"
                     target="_blank" class="vmc-text-primary-2">
                    https://www.facebook.com/groups/2479528432363079</a>
                </td>
              </tr>
            </table>

            <h4 class="font-weight-light mb-1 mt-3">Send us feedback :</h4>
            <form @submit.prevent="sendFeedback" ref="sendFeedbackForm">
              <div class="form-group" >
                <label for="Name" class="mb-0">Name : <sup class="vmc-text-danger">*</sup></label>
                <input type="text" class="form-control" id="Name" placeholder="" required
                       v-model.trim="$v.fullName.$model"
                       :class="{'is-invalid': $v.fullName.$error, 'is-valid': !$v.fullName.$invalid}">
                <div class="invalid-feedback small">
                  <span v-if="!$v.fullName.required">Name is required. </span>
                  <span v-if="!$v.fullName.minLength">Name must have at least {{$v.fullName.$params.minLength.min}}. </span>
                </div>
              </div>
              <div class="form-group">
                <label for="ContactNumber" class="mb-0">Contact Number : <sup class="vmc-text-danger">*</sup></label>
                <input type="text" class="form-control" id="ContactNumber" placeholder="" required
                       v-model.trim="$v.contactNumber.$model"
                       :class="{'is-invalid': $v.contactNumber.$error, 'is-valid': !$v.contactNumber.$invalid}">
                <div class="invalid-feedback small">
                  <span v-if="!$v.contactNumber.required">Contact number is required. </span>
                  <span v-if="!$v.contactNumber.numeric">Contact field accepts number only. </span>
                  <span v-if="!$v.contactNumber.minLength">Contact number must have at least {{$v.contactNumber.$params.minLength.min}}. </span>
                  <span v-if="!$v.contactNumber.maxLength">Contact number must have at most {{$v.contactNumber.$params.maxLength.max}}. </span>
                </div>
              </div>
<!--              <div class="form-group">-->
<!--                <label for="Email">Email Address : <sup class="vmc-text-danger">*</sup></label>-->
<!--                <input type="email" class="form-control" id="Email" placeholder="" required-->
<!--                       v-model.trim="$v.emailAddress.$model"-->
<!--                       :class="{'is-invalid': $v.emailAddress.$error, 'is-valid': !$v.emailAddress.$invalid}">-->
<!--                <div class="invalid-feedback small">-->
<!--                  <span v-if="!$v.emailAddress.required">Email is required. </span>-->
<!--                  <span v-if="!$v.emailAddress.email">Please enter a valid email address. </span>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="form-group">-->
<!--                <label for="Subject">Subject : <sup class="vmc-text-danger">*</sup></label>-->
<!--                <input type="text" class="form-control" id="Subject" placeholder="" required-->
<!--                       v-model.trim="$v.emailSubject.$model"-->
<!--                       :class="{'is-invalid': $v.emailSubject.$error, 'is-valid': !$v.emailSubject.$invalid}">-->
<!--                <div class="invalid-feedback small">-->
<!--                  <span v-if="!$v.emailSubject.required">Subject field is required. </span>-->
<!--                  <span v-if="!$v.emailSubject.minLength">Subject must have at least {{$v.emailSubject.$params.minLength.min}}. </span>-->
<!--                  <span v-if="!$v.emailSubject.maxLength">Subject must have at most {{$v.emailSubject.$params.maxLength.max}}. </span>-->
<!--                </div>-->
<!--              </div>-->
              <div class="form-group">
                <label for="Message" class="mb-0">Message : <sup class="vmc-text-danger">*</sup></label>
<!--                <textarea class="form-control" id="Message" rows="6" required-->
<!--                          v-model="emailMessage"></textarea>-->
                <textarea class="form-control" id="Message" rows="3" required
                          v-model.trim="$v.emailMessage.$model"
                          :class="{'is-invalid': $v.emailMessage.$error, 'is-valid': !$v.emailMessage.$invalid}">
                </textarea>
<!--                <div class="valid-feedback small">Great message!</div>-->
                <div class="invalid-feedback small">
                  <span v-if="!$v.emailSubject.required">Message is required. </span>
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
import { required, minLength, maxLength, numeric, email } from 'vuelidate/lib/validators'
import Swal from 'sweetalert2'
export default {
  name: "ContactUs",
  data() {
    return {
      fullName      : '',
      contactNumber : '',
      emailMessage  : '',
    };
  },
  validations: {
    fullName: {
      required,
      minLength: minLength(3)
    },
    contactNumber: {
      required,
      numeric,
      minLength: minLength(7),
      maxLength: maxLength(15)
    },
    emailAddress: {
      required,
      email
    },
    emailSubject: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(100)
    },
    emailMessage: {
      required
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
          window.location.href =
              `mailto:shantycajulao@gmail.com?subject=Name: ${this.fullName} — Contact Number: ${this.contactNumber}&body=Message: %0D%0A${this.emailMessage}`
          Swal.fire(
              'Email opened',
              'Opened your email to validate your email and message',
              'success',
          )
          this.fullName = ''
          this.contactNumber = ''
          this.emailMessage = ''
          this.$nextTick(() => { this.$v.$reset(); });
        }
      })
    },

  }
}
</script>

<style scoped>
.invalid-feedback {
  color: var(--vmc-danger-5);
}
.swal2-confirm .swal2-styled {
  border-radius: 100px;
  background-color: var(--vmc-primary-3);
}
#GoogleMapContainer {
  line-height: 0;
}
</style>

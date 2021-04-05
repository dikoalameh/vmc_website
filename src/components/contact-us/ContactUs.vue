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
            <a href="https://www.google.com/search?q=15%20Floor%2C%20MARC2000%20Tower%201973%20Taft%20Ave.%2C%20Malate%2C%20Manila%20Philippines%201004&oq=15+Floor%2C+MARC2000+Tower+1973+Taft+Ave.%2C+Malate%2C+Manila+Philippines+1004&aqs=chrome..69i57.207j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALeKk020ufVwJqtSruR2j7u143t4ysbFmQ:1617402927167&rflfq=1&num=10&rldimm=4725167268310940416&lqi=CkgxNSBGbG9vciwgTUFSQzIwMDAgVG93ZXIgMTk3MyBUYWZ0IEF2ZS4sIE1hbGF0ZSwgTWFuaWxhIFBoaWxpcHBpbmVzIDEwMDRIz7LShuiVgIAIWm0KETE1IGZsb29yIG1hcmMyMDAwEAAQARACGAIYAxgEGAUYBhgHGAgiRDE1IGZsb29yIG1hcmMyMDAwIHRvd2VyIDE5NzMgdGFmdCBhdmUgbWFsYXRlIG1hbmlsYSBwaGlsaXBwaW5lcyAxMDA0kgETY29uZG9taW5pdW1fY29tcGxleA&ved=2ahUKEwjmsrq3z-DvAhUDHaYKHatiBvUQvS4wAHoECAYQLw&rlst=f#rlfi=hd:;si:4725167268310940416,l,CkgxNSBGbG9vciwgTUFSQzIwMDAgVG93ZXIgMTk3MyBUYWZ0IEF2ZS4sIE1hbGF0ZSwgTWFuaWxhIFBoaWxpcHBpbmVzIDEwMDRIz7LShuiVgIAIWm0KETE1IGZsb29yIG1hcmMyMDAwEAAQARACGAIYAxgEGAUYBhgHGAgiRDE1IGZsb29yIG1hcmMyMDAwIHRvd2VyIDE5NzMgdGFmdCBhdmUgbWFsYXRlIG1hbmlsYSBwaGlsaXBwaW5lcyAxMDA0kgETY29uZG9taW5pdW1fY29tcGxleA;mv:[[14.5708019,120.9947965],[14.564648000000002,120.9906563]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
               target="_blank" class="vmc-text-primary-2">
              15 Floor, MARC2000 Tower 1973 Taft Ave., Malate, Manila Philippines 1004</a>
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
            <h4 class="font-weight-light mb-1">Telefax Number</h4>
            <p>(632) 53101319</p>
            <h4 class="font-weight-light mb-1">Veritas Hotline</h4>
            <p class="mb-0">0917-511-1372</p>
            <p>0947-996-0107</p>
            <h4 class="font-weight-light mb-1">E-mail Address</h4>
            <p class="mb-0"><a class="vmc-text-primary-2" href="mailto:vmcgroup@veritas.com.ph">vmcgroup@veritas.com.ph</a></p>
            <p class="mb-0"><a class="vmc-text-primary-2" href="mailto:veritas_mc@pldtdsl.net">veritas_mc@pldtdsl.net</a></p>
          </div>
          <div class="col-md-6">
            <h4 class="font-weight-light mb-1">Send us feedback :</h4>
            <form @submit.prevent="sendFeedback">
              <div class="form-group" >
                <label for="Name">Name : <sup class="vmc-text-danger">*</sup></label>
                <input type="text" class="form-control" id="Name" placeholder="" required
                       v-model.trim="fullName">
                <small>Please enter a name!</small>
              </div>
              <div class="form-group">
                <label for="ContactNumber">Contact Number : <sup class="vmc-text-danger">*</sup></label>
                <input type="text" class="form-control" id="ContactNumber" placeholder="" required
                       v-model="contactNumber">
                <small>Please enter a valid contact number!</small>
              </div>
              <div class="form-group">
                <label for="Email">Email Address : <sup class="vmc-text-danger">*</sup></label>
                <input type="email" class="form-control" id="Email" placeholder="" required
                       v-model="emailAddress">
                <small>Please enter a valid email address!</small>
              </div>
              <div class="form-group">
                <label for="Subject">Subject : <sup class="vmc-text-danger">*</sup></label>
                <input type="text" class="form-control" id="Subject" placeholder="" required
                       v-model="emailSubject">
                <small>Please enter a subject!</small>
              </div>
              <div class="form-group">
                <label for="Message">Message : <sup class="vmc-text-danger">*</sup></label>
                <textarea class="form-control" id="Message" rows="6" required
                          v-model="emailMessage"></textarea>
                <small>Please enter a message!</small>
              </div>
              <button type="submit" class="btn vmc-btn-circle vmc-btn-prime-2 px-5">SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      fullName      : '',
      contactNumber : '',
      emailAddress  : '',
      emailSubject  : '',
      emailMessage  : '',
    };
  },
  methods: {
    sendFeedback() {

    },
    validateInput() {
    }
  }
}
</script>

<style scoped>
.invalid .form-control {
  border-color : var(--vmc-danger-5);
}
.invalid small {
  color: var(--vmc-danger-5);
}
</style>
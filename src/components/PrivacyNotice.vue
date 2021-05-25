<template>
  <div class="privacy-notice">
    <!-- Modal -->
    <div class="modal fade border-0" id="PrivacyNotice" tabindex="-1" role="dialog" aria-labelledby="PrivacyNoticeTitle" aria-hidden="true" data-backdrop="static" data-keyboard="false">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content border-0">
          <div class="modal-header vmc-bg-prime-5 border-0">
            <h4 class="modal-title text-center w-100 font-weight-normal vmc-text-white letter-spacing-1" id="PrivacyNoticeTitle">Privacy Notice</h4>
          </div>
          <div class="modal-body" style="height: 500px; overflow-y: auto">
            <p>
              Veritas Maritime Corporation (VMC) is committed to protect and respect your personal data privacy. We are at the forefront of implementing and complying with the Data Privacy Act of 2012. This Privacy Notice concerns personal data submitted by any applicant and employed personnel during online or paper application process, personal data collected by VMC as part of the crewing / recruitment process, personal data collected by VMC as part of a previous employment process and personal data submitted in the Candidate and Employment Pool.
            </p>
            <p>
              Under the Data Privacy Act of 2012, individuals whose personal information is collected and processed are called data subjects. The company is duty bound to observe and respect your privacy rights, including your right to information, right to access, right to correct, right to remove, right to damages and right to data portability.
            </p>
            <p>
              VMC may collect Personal Information of a Data Subject only upon signing his or her consent and upon filing the application form. The Personal Information collected shall be processed solely in connection with the Data Subject’s employment. All Personal information collected have been approved by the management of VMC and its Principal Employer under the specified reason.
            </p>
            <p>
              All personal data is being stored in a data based system called VERIPRO. A 3rd party company is contracted to manage and set security controls, to safeguard the rights of our personnel and seafarers. Access of 3rd party provider to Personal Information is protected by an OUTSOURCE CONTRACT AGREEMENT.
            </p>
            <p>
              Hardcopies are kept as well within the office 201 Files, for secured reference. In accordance with Philippines Data Privacy Act of 2012, we observe reasonable procedures to prevent unauthorized access to, and the misuse of your personal data.
            </p>
            <p>
              VMC transfers personal information to other 3rd party entities for the purpose of employment with the company, particularly to our Principal, Government Agencies and Port Agents as part of the employment process. As mandated by our National requirements, all OFW must submit specified personal information to different agencies like MARINA, OWWA and POEA to process employment contracts. Other arrangements on accommodations and other embarkation processing that will need selected personal information will be processed and complied with relevant data protection and legislation at all times.
            </p>
            <p>
              All personal data are securely stored, both hard and softcopy references, for the whole duration of employment, with a retention of 10 YEARS after separation or retirement with the Company. Unless requested with due instruction, deletion and disposal of your personal data will commence upon lapse of the said 10 Year period.
            </p>
            <p>
              If you have further questions or concerns, you may contact the following details :
            </p>
            <div class="row">
              <div class="col-sm-5 font-weight-bold d-flex justify-content-between">
                <span>Company Name/ PIC</span>
                <span>:</span>
              </div>
              <div class="col-sm-7">Veritas Maritime Corporation</div>

              <div class="col-sm-5 font-weight-bold d-flex justify-content-between">
                <span>Telephone No.</span>
                <span>:</span>
              </div>
              <div class="col-sm-7"><a href="tel:+632 85243661">+632 85243661</a></div>

              <div class="col-sm-5 font-weight-bold d-flex justify-content-between">
                <span>DPO Email Address</span>
                <span>:</span>
              </div>
              <div class="col-sm-7">
                <p class="mb-0"><a href="mailto:dpo@veritas.com.ph">dpo@veritas.com.ph</a></p>
                <p><a href="mailto:peterfadul@veritas.com.ph">peterfadul@veritas.com.ph</a></p>
              </div>
            </div>
            <p class="mb-0">
              You may also visit or send official communication to the DPO's office address:
              <strong><a href="https://goo.gl/maps/4csJjSj8sEnTX9Hv5" target="_blank"> 15th Floor, March 2000 Tower 1973 Taft Avenue, Malate, Manila.</a></strong>
            </p>
          </div>
          <div class="modal-footer vmc-bg-dark-1 border-top-0">
            <button type="button"
                    class="btn vmc-btn-circle vmc-btn-secondary w-100"
                    data-dismiss="modal"
                    @click="acceptPrivacyNotice">
              I Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyNotice',
  methods: {
    acceptPrivacyNotice() {
      sessionStorage.setItem("accept","yes");
    },

  },
};
</script>

<style scoped>
 h1 {
   font-size: 30px;
 }
 h2 {
   font-size: 25px;
 }
</style>

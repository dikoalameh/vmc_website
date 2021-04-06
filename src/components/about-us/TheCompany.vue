<template>
  <div id="Company">
    <div class="container-fluid vmc-py-big" >
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="col-lg-8">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Company
            </h2>
            <b>VERITAS MARITIME CORPORATION</b> is a joint business venture between
            <ul>
              <li>Mercury Shipping Corporation Manila</li>
              <li>Taiyo Nippon Kisen Co. Ltd., Japan </li>
            </ul>

            <h2 class="h1 vmc-text-primary vmc-heading">
              Why Veritas was established?
            </h2>
            <ul id="VMCEstablishedReason">
              <li>To supply qualified seafarers to man ocean going vessels for international trade.</li>
              <li>To provide Crew Management to Shipowners,</li>
              <li>In addition to the manning services, to provide support services in the form of administrative, accounting and financial services:  </li>
              <ul>
                <li>Orientation of Senior Officers of any nationality joining Veritas-manned vessel</li>
                <li>Budgeting and accounting of vessel funds</li>
                <li>Crew Training and upgrading seminars</li>
                <li>PNI Handling and management</li>
                <li>Supply of safety and personal gears, recreational materials and other vessel supplies requested</li>
                <li>Other support services requested by Principals  </li>
              </ul>
            </ul>
          </div>
          <div class="col-lg-4 col-md-7">
            <img :src="marc2000Tower" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 mb-4 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Quality Crew Recruitment
            </h2>
            <p>To ensure recruitment of quality seafarers for every vessel VERITAS follows very stringent procedures in crew hiring and strict adherences to standard hiring qualifications per rank applying to new hires and ex-crew.</p>
          </div>
          <div class="col-lg-12 text-center">
            <h2 class="h1 vmc-text-primary vmc-heading">
              Mission Statement
            </h2>
            <p>VERITAS MARITIME CORPORATION aims to achieve the Company's stability, credibility and success as a leader in the shipmanning industry, and ensures profitability for its stakeholders, by providing highly qualified and competent seafarers under internationally-accepted standards, to the satisfaction of our Principals and Shipowners through timely, quality and cost-effective service and good management of all resources, as it continues to grow and develop while enhancing the skills, knowledge and well-being of its Corporate members, in an atmosphere of fairness, peace, harmony and compassion.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big" >
      <div class="container text-center">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-12">
            <h2 class="h1 vmc-text-primary vmc-heading mb-4">
              Core Values
            </h2>
          </div>
          <div class="col-md-6 col-lg-4 mb-2">
            <font-awesome-icon icon="hand-holding-heart" class="fa-5x" />
            <h4 class="vmc-text-primary-2 font-weight-normal my-3">HONESTY</h4>
            <p>We value openness and expect truthfulness with each other, with our employees and crew, with our vendors and customers, as reflected in our business records and transactions.</p>
          </div>
          <div class="col-md-6 col-lg-4 mb-2">
            <font-awesome-icon icon="handshake" class="fa-5x" />
            <h4 class="vmc-text-primary-2 font-weight-normal my-3">INTEGRITY</h4>
            <p class="px-2">We act in accordance with our moral and ethical values, as the foundation of our individual and corporate actions that drives our organization to succeed.</p>
          </div>
          <div class="col-md-6 col-lg-4 mb-2">
            <font-awesome-icon icon="thumbs-up" class="fa-5x" />
            <h4 class="vmc-text-primary-2 font-weight-normal my-3">QUALITY SERVICE</h4>
            <p>We meet or exceed expectations of customers, in providing our reliable service without compromising quality, and continuously improving to achieve service excellence. </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid vmc-py-big vmc-bg-dark-1">
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="col-lg-8 order-lg-5">
            <h2 class="h1 vmc-text-primary vmc-heading">
              History
            </h2>
            <p>Established in 1989, Veritas Maritime has grown steadily in stature and reputation in the Philippine crew management business. Today, with a pool over 1500 qualified and competent officers and ratings, Veritas Maritime Corporation can provide full crew line up and crew management services to Internationl clients as well as the TNKC Group. Vessel types under manning include drybulk vessels of all sizes, cape size,general cargo, between deckers, and pure car carriers. Veritas employs clearly defined procedures and attains high standards in all aspects of recruiting, screening, evaluation, training, upgrading and performance monitoring through the rigorous application of a fully documnented management system, as required by the company's ISO 9001-2000 quality assurance system.</p>
            <p>Veritas' own software programming staff enables the company to keep abreast with IT developments and ensures it remains flexible and readily adaptable to principals requirements.</p>
            <p>Veritas has been particularly successful in developing a loyalty culture, which extends to the family and next of kin. Consequently crew retention exceeds 90% in all ranks. This careful attention to the human factor allied with an extensive and structured cadet development program ensures the company will remain at the forefront of Philippine manning in the years ahead.</p>
          </div>
          <div class="col-lg-4 col-md-7 order-lg-0">
            <img :src="marc2000Tower" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCompany",
  data() {
    return {
    'marc2000Tower': require(`@/assets/about/Marc2000tower.jpg`)
    }
  }
}
</script>

<style scoped>
#VMCEstablishedReason li:nth-child(n+4) {
  /*margin-left: 30px;*/

}
</style>
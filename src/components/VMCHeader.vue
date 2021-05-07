<template>
  <header class="fixed-top shadow-sm bg-white">
    <nav class="navbar navbar-expand-lg navbar-light container py-0">
      <div class="navbar-brand">
        <div class="row d-flex align-items-center">
          <div class="col-sm-auto">
            <a href="/"><img :src="vmcLogo" alt="" style="width: 85px;"></a>
          </div>
          <div class="col-sm-auto px-0 d-none d-sm-inline-block">
            <a href="/" style="text-decoration: none">
              <p class="mb-0 text-center vmc-text-primary" id="VMCMeaning">VERITAS MARITIME CORPORATION</p>
              <p class="mb-0 text-center vmc-text-primary-2" id="VMCTag">QUALITY SERVICE, QUALITY CREW</p>
            </a>
          </div>
        </div>
      </div>
      <button class="navbar-toggler border-0 p-0" type="button" data-toggle="collapse" data-target="#VMCNavigation" aria-controls="VMCNavigation" aria-expanded="false" aria-label="Toggle navigation">
        <span class="vmc-text-primary-child"><font-awesome-icon icon="bars" style="zoom: 1.5;"/></span>
      </button>
      <div class="collapse navbar-collapse">
        <div class="row ml-auto pl-0 mr-0">
          <div class="col-sm-12 ml-auto text-right" id="VMCCallToAction">
            <font-awesome-icon icon="phone-alt" class="mx-2"/>
            <span style="font-weight: 500" class="vmc-text-primary-2">Hotlines: </span>
            <a href="#" class="btn btn-sm vmc-btn-circle vmc-btn-secondary text-white mx-1">
              Globe: 0917-511-1372
            </a>
            <a href="#" class="btn btn-sm vmc-btn-circle vmc-btn-secondary text-white mx-1">
              Smart: 0947-996-0107
            </a>
<!--            <a href="tel:0917-511-1372" class="btn btn-sm vmc-btn-circle vmc-btn-secondary text-white mx-1">-->
<!--              Globe: 0917-511-1372-->
<!--            </a>-->
<!--            <a href="tel:0947-996-0107" class="btn btn-sm vmc-btn-circle vmc-btn-secondary text-white mx-1">-->
<!--              Smart: 0947-996-0107-->
<!--            </a>-->
          </div>
        </div>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg navbar-light container py-0" id="NavigationContent">
      <div class="row w-100 ml-0 px-0">
        <div class="col-12 vmc-bg-prime-5 rounded">
          <div class="collapse navbar-collapse" id="VMCNavigation">
            <ul class="navbar-nav mx-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <router-link :to="{path: '/home'}" class="nav-link" style="width: 77px">Home</router-link>
              </li>
              <li class="nav-item dropdown">
                <router-link class="nav-link dropdown-toggle" :to="{path: '/about/'}" event="" id="AboutUsLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 125px;">
                  About Us
                </router-link>
                <div class="dropdown-menu" aria-labelledby="AboutUsLink">
                  <router-link class="dropdown-item" :to="{name: 'TheCompany'}">
                    The Company
                  </router-link>
                  <router-link class="dropdown-item" :to="{name: 'OurPrincipals'}">
                    Our Principals
                  </router-link>
                </div>
              </li>
              <li class="nav-item dropdown">
<!--                <router-link class="nav-link" :to="{name: 'News'}" style="width: 77px">News</router-link>-->
                <router-link class="nav-link dropdown-toggle" :to="{path: '/news/'}" event="" id="NewsLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 95px;">
                  News
                </router-link>
                <div class="dropdown-menu" aria-labelledby="NewsLink">
                  <router-link class="dropdown-item" :to="{name: 'AllNews'}">
                    All News
                  </router-link>
                  <router-link class="dropdown-item" :to="{name: 'CompanyNews'}">
                    Company News
                  </router-link>
                  <router-link class="dropdown-item" :to="{name: 'CrewNews'}">
                    Crew Updates
                  </router-link>
                  <router-link class="dropdown-item" :to="{name: 'GovernmentAdvisories'}" style="width: 222px;">
                    Government Advisories
                  </router-link>
                  <router-link class="dropdown-item" :to="{name: 'PrincipalMemo'}">
                    Principal Memo
                  </router-link>
                </div>
              </li>
              <li class="nav-item dropdown">
                <router-link class="nav-link dropdown-toggle" :to="{path: '/programs/'}" event="" id="ProgramsLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 125px;">
                  Programs
                </router-link>
                <div class="dropdown-menu dropright" aria-labelledby="ProgramsLink">

                  <div id="CompanyProgramSection" class="dropdown">
                    <router-link class="nav-link dropdown-toggle" :to="{path: '/programs/company/'}" event="" id="CompanyLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 74px;">
                      Company
                    </router-link>
                    <div class="dropdown-menu ml-0" aria-labelledby="CompanyLink">
                      <router-link class="dropdown-item" :to="{name: 'CSRActivities'}">
                        CSR Activities
                      </router-link>
                      <router-link class="dropdown-item" style="width: 210px" :to="{name: 'OfficePrograms'}">
                        Office Programs
                      </router-link>
                      <router-link class="dropdown-item" :to="{name: 'Allottees'}">
                        Allottees
                      </router-link>
                    </div>
                  </div>

                  <div id="CrewSection" class="dropdown">
                    <router-link class="nav-link dropdown-toggle" :to="{path: '/programs/crew/'}" event="" id="CrewLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 74px;">
                      Crew
                    </router-link>
                    <div class="dropdown-menu ml-0" aria-labelledby="CrewLink">
                      <router-link class="dropdown-item" :to="{name: 'VeritasCadets'}">
                        Veritas Cadets
                      </router-link>
                      <router-link class="dropdown-item" :to="{name: 'InHouseTraining'}">
                        In House Training
                      </router-link>
                      <router-link class="dropdown-item" :to="{name: 'TrainingPrograms'}">
                        Training Programs
                      </router-link>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'Schedules'}" style="width: 119px">Schedules</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'Career'}" style="width: 87px">Career</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'Contact'}" style="width: 128px">Contact Us</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "VMCHeader",
  data() {
    return {
      'vmcLogo': require(`@/assets/veritas_logo.png`)
    }
  }
}
</script>

<style scoped>
#VMCNavigation a {
  padding: .75rem 1rem;
  color: var(--vmc-dark-0);
  letter-spacing: 1px;
}
#VMCNavigation a:hover {
  color: var(--vmc-secondary-5);
}

#VMCNavigation a.router-link-exact-active, #VMCNavigation a.router-link-active {
  font-weight: bold;
  color: var(--vmc-secondary-5);
}
.dropdown-menu {
  margin: 0;
  padding: 0;
  border-radius: 0;
  border: 0;
  background: var(--vmc-primary-5);
}
.dropdown:hover > .dropdown-menu {
  display: block;
}
.dropdown a[aria-expanded="true"]{
  color: var(--vmc-secondary-5);
}
.dropdown-item:hover, .dropdown-item:active, .dropdown-item:visited, .dropdown-item:focus{
  background: var(--vmc-primary-5);
}
#VMCCallToAction {
  background: var(--vmc-dark-1);
  border-radius: 100px;
  padding: 5px;
  display: flex;
  align-items: center;
}
#VMCCallToAction * {
  color: var(--vmc-primary-3);
}
@media (min-width: 576px) {
  #NavigationContent {
    margin-bottom: 0;
  }
  #VMCMeaning {
    font-size:19px;
    font-weight: 500;
    line-height: 1;
  }

  #VMCTag {
    font-size:16px;
    font-weight: 500;
    line-height: 1;
  }
}

@media (min-width: 768px) {
  #NavigationContent {
    margin-bottom: 0;
  }
  #VMCMeaning {
    font-size:24px;
    font-weight: 500;
    line-height: 1;
  }

  #VMCTag {
    font-size:20px;
    font-weight: 500;
    line-height: 1;
  }
}

@media (min-width: 992px) {
  #NavigationContent {
    margin-bottom: -25px;
  }
  #VMCMeaning {
    font-size:24px;
    font-weight: 500;
    line-height: 1;
  }

  #VMCTag {
    font-size:20px;
    font-weight: 500;
    line-height: 1;
  }
}

@media (min-width: 1200px) {
  #NavigationContent {
    margin-bottom: -25px;
  }
  #VMCMeaning {
    font-size:24px;
    font-weight: 500;
    line-height: 1;
  }

  #VMCTag {
    font-size:20px;
    font-weight: 500;
    line-height: 1;
  }
}
</style>

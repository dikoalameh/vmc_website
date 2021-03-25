<template>
  <header class="fixed-top shadow-sm bg-white">
    <nav class="navbar navbar-expand-lg navbar-light container py-md-0">
      <a class="navbar-brand" href="/" style="font-size: 24px;">
        <img :src="vmcLogo" alt="" style="width: 85px; margin-right: 1rem;">
        <span class="d-none d-sm-inline-block" >Veritas Maritime Corporation</span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#VMCNavigation" aria-controls="VMCNavigation" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="VMCCallToAction">
        <div class="row ml-auto">
          <div class="col-sm-12 ml-auto text-right">
            <span class="h6">Hotline: </span>
            <a href="tel:0917-511-1372" class="btn btn-sm vmc-btn-circle vmc-btn-outline-prime mx-1">
              Globe: 0917-511-1372
            </a>
            <a href="tel:0947-996-0107" class="btn btn-sm vmc-btn-circle vmc-btn-outline-prime mx-1">
              Smart: 0947-996-0107
            </a>
          </div>
        </div>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg navbar-light container py-0" style="margin-bottom: -25px">
      <div class="row w-100 ml-0 px-0">
        <div class="col-12 vmc-bg-prime-5">
          <div class="collapse navbar-collapse" id="VMCNavigation">
            <ul class="navbar-nav mx-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <router-link to="/" class="nav-link" style="width: 80px">Home</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="AboutUsLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 125px;">
                  About Us
                </a>
                <div class="dropdown-menu" aria-labelledby="AboutUsLink">
                  <router-link class="dropdown-item" to="/about">The Company</router-link>
                  <a class="dropdown-item" href="#" style="width: 210px">Organizational Chart</a>
                  <a class="dropdown-item" href="#">Our Principals</a>
                </div>
              </li>
<!--              <li class="nav-item">-->
<!--                <router-link class="nav-link" to="/about" style="width: 114px">About Us</router-link>-->
<!--              </li>-->
              <li class="nav-item">
                <router-link class="nav-link" to="/news" style="width: 77px">News</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/programs" style="width: 113px">Programs</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="ProgramsLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 125px;">
                  Programs
                </a>
                <div class="dropdown-menu" aria-labelledby="ProgramsLink">
                  <a class="dropdown-item" href="#">CSR Activities</a>
                  <a class="dropdown-item" href="#" style="width: 210px">Office Programs</a>
                  <a class="dropdown-item" href="#">Allottees</a>
                </div>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/crew" style="width: 74px">Crew</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/schedule" style="width: 119px">Schedules</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/announcement" style="width: 168px">Announcements</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/career" style="width: 87px">Career</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact" style="width: 128px">Contact Us</router-link>
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
  padding: 1rem;
  color: var(--vmc-dark-0);
  letter-spacing: 1px;
}

#VMCNavigation a:hover {
  font-weight: bold;
  color: var(--vmc-secondary-5);
}

#VMCNavigation a.router-link-exact-active {
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
  font-weight: bold;
  color: var(--vmc-secondary-5);
}
</style>
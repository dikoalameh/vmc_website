<template>
  <footer>
    <div class="container-fluid vmc-bg-prime-5">
      <div class="container">
        <div class="row py-4 d-flex">
          <div class="col-lg-9">
            <ul class="nav" id="FooterNav">
              <li class="nav-item">
                <router-link class="nav-link pl-0" :to="{path: '/home'}">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'TheCompany'}">About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/news">News</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/programs">Programs</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/schedule">Schedules</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/career">Career</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact">Contact Us</router-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 center-on-small-right mb-2">
            <span class="white-icon-color">
              See us on:
              <a href="https://www.facebook.com/VeritasMaritimeCorporation"
                 target="_blank" style="padding: 7px 10px 5px; background-color: #4267B2; border-radius: 100px">
              <font-awesome-icon :icon="[ 'fab', 'facebook-f' ]"
                                 mask="circle"
                                  />
            </a>
            </span>
          </div>
          <div class="col-lg-6 center-on-small-left">
            <p class="mb-0" style="font-size:14px; letter-spacing: .5pt; color: #f8f9f9;">&#169; 2021 VERITAS MARITIME CORPORATION. All Rights Reserved.</p>
          </div>
          <div class="col-lg-6 center-on-small-right">
            <router-link class="small"
                         :to="{name: 'CookiePolicy'}"
                         style="letter-spacing: .5pt; color: #f8f9f9;">
              Cookies Policy
            </router-link>
            <span class="text-white small" style="letter-spacing: .5pt; color: #f8f9f9;">
              | Total Visitor(s): <strong class="text-white">{{visitor}}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'VMCFooter',
  data() {
    return {
      visitor : '',
    }
  },
  mounted() {
    Vue.axios.get('http://vmc_website_api.test/api/public/visitor-count',this.newComment)
    .then((res)=> {
      this.visitor = res.data
    })
  }
};
</script>

<style scoped>
#FooterNav a {
  padding: .5rem;
  color: var(--vmc-dark-0);
}

#FooterNav a:hover {
  color: var(--vmc-secondary-5);
}

#FooterNav a.router-link-exact-active, #FooterNav a.router-link-active {
  font-weight: bold;
  color: var(--vmc-secondary-5);
}
#FooterNav {
  justify-content: center;
}
.center-on-small-left {
  text-align: center;
}
.center-on-small-right {
  text-align: center;
}
.white-icon-color, .white-icon-color * {
  color: white;
}
@media (min-width: 576px) {
  #FooterNav {
    justify-content: center;
  }
  .center-on-small-left {
    text-align: center;
  }
  .center-on-small-right {
    text-align: center;
  }
}
@media (min-width: 768px) {
  #FooterNav {
    justify-content: center;
  }

  .center-on-small-left {
    text-align: center;
  }

  .center-on-small-right {
    text-align: center;
  }
}

@media (min-width: 992px) {
  #FooterNav {
    justify-content: start;
  }
  .center-on-small-left {
    text-align: left;
  }
  .center-on-small-right {
    text-align: right;
  }
}

@media (min-width: 1200px) {
  #FooterNav {
    justify-content: start;
  }
  .center-on-small-left {
    text-align: left;
  }
  .center-on-small-right {
    text-align: right;
  }
}
</style>

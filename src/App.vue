<template>
  <div id="app">
    <router-view/>
    <privacy-notice />
  </div>
</template>
<script>

// @ is an alias to /src
import PrivacyNotice from './components/PrivacyNotice';
import $ from 'jquery';

export default {
  components: {
    'privacy-notice': PrivacyNotice,
  },
  data() {
    return {
      'acceptedValue': sessionStorage.getItem("accept"),
    }
  },
  methods: {
    checkPrivacyNoticeIfAccepted() {
      if (sessionStorage.getItem("accept")) $('#PrivacyNotice').modal('hide');
      else $('#PrivacyNotice').modal('show');
    }
  },
  mounted() {
    this.checkPrivacyNoticeIfAccepted();
  }
}
</script>

<style scoped>
* {
  font-family: 'Roboto', "Noto Sans SC", "Open Sans", sans-serif;
}
</style>

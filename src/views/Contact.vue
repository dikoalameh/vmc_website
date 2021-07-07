<template>
  <div class="contact">
    <vmc-header />
    <page-heading page-title-name="CONTACT US" image-link="contactus/contact_us_bg.jpg"/>
    <router-view></router-view>
    <vmc-footer />
  </div>
</template>

<script>
import VMCHeader from '../components/VMCHeader';
import VMCFooter from '../components/VMCFooter';
import PageHeading from '../components/PageHeading';

export default {
  name: 'Contact',
  components: {
    'vmc-header':VMCHeader,
    'vmc-footer':VMCFooter,
    'page-heading': PageHeading,
  }
};
</script>

<style scoped>

</style>

<template>
  <div class="about">
    <vmc-header />
    <page-heading page-title-name="ABOUT VERITAS" image-link="blue_background.jpg"/>
    <router-view></router-view>
    <vmc-footer />
  </div>
</template>
<script>
import PageHeading from '../components/PageHeading';
import VMCHeader from '../components/VMCHeader';
import VMCFooter from '../components/VMCFooter';

export default {
  name: "About",
  components: {
    'vmc-header':VMCHeader,
    'vmc-footer':VMCFooter,
    'page-heading': PageHeading,
  }
}
</script>

<style scoped>

</style>

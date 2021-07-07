<template>
  <div class="crew">
    <vmc-header />
    <page-heading page-title-name="CAREERS" image-link="careers/career_bg.jpg"/>
    <router-view></router-view>
    <vmc-footer />
  </div>
</template>

<script>
import VMCHeader from '../components/VMCHeader';
import VMCFooter from '../components/VMCFooter';
import PageHeading from '../components/PageHeading';

export default {
  name: "Career",
  components: {
    'vmc-header':VMCHeader,
    'vmc-footer':VMCFooter,
    'page-heading': PageHeading,
  }
}
</script>

<style scoped>

</style>

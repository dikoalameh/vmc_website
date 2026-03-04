<template>
  <div class="news">
    <vmc-header />
    <page-heading page-title-name="NEWS & UPDATE" image-link="news/news_bg_7-7-2021.jpg" />
    <router-view></router-view>
    <vmc-footer />
  </div>
</template>

<script>
import VMCHeader from '../components/VMCHeader';
import VMCFooter from '../components/VMCFooter';
import PageHeading from '../components/PageHeading';

export default {
  name: "News",
  components: {
    'vmc-header': VMCHeader,
    'vmc-footer': VMCFooter,
    'page-heading': PageHeading,
  }
}
</script>

<style scoped></style>

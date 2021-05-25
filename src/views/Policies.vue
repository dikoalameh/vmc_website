<template>
  <div class="contact">
    <vmc-header />
    <router-view></router-view>
    <vmc-footer />
  </div>
</template>

<script>
import VMCHeader from '../components/VMCHeader';
import VMCFooter from '../components/VMCFooter';

export default {
  name: 'Policies',
  components: {
    'vmc-header':VMCHeader,
    'vmc-footer':VMCFooter,
  }
};
</script>

<style scoped>

</style>

<template>
  <div class="company">
    <vmc-header />
    
    <!-- We removed the global page-heading so the child pages can display their own unique headers! -->
    <router-view></router-view>
    
    <vmc-footer />
  </div>
</template>

<script>
import VMCHeader from '../components/VMCHeader';
import VMCFooter from '../components/VMCFooter';

export default {
  name: 'Company',
  components: {
    'vmc-header': VMCHeader,
    'vmc-footer': VMCFooter
  }
};
</script>

<style scoped>
</style>
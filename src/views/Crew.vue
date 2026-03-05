<template>
  <div class="crew">
    <vmc-header />
    
    <!-- We removed the global page-heading so the Training and Cadet pages can display their own! -->
    <router-view></router-view>
    
    <vmc-footer />
  </div>
</template>

<script>
import VMCHeader from '../components/VMCHeader';
import VMCFooter from '../components/VMCFooter';

export default {
  name: "Crew",
  components: {
    'vmc-header': VMCHeader,
    'vmc-footer': VMCFooter
  }
}
</script>

<style scoped>
</style>
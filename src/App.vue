<template>
  <div id="app">
    <vmc-header />
    <router-view/>
    <vmc-footer />
  </div>
</template>
<script>
// @ is an alias to /src
import VMCHeader from '/src/components/VMCHeader';
import VMCFooter from '/src/components/VMCFooter';

export default {
  components: {
    'vmc-header':VMCHeader,
    'vmc-footer':VMCFooter,
  }
}
</script>

<style>

</style>

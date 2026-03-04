<template>
  <div class="auth">
    <vmc-sidebar />
    <vmc-mobile-header />
    <vmc-header />
    <router-view></router-view>
  </div>
</template>

<script>
import VMCSidebarCMS from '../components/VMCSidebarCMS';
import VMCMobileHeaderCMS from '../components/VMCMobileHeaderCMS';
import VMCHeaderCMS from '../components/VMCHeaderCMS';

export default {
  name: "adminCMS",
  components: {
    'vmc-sidebar': VMCSidebarCMS,
    'vmc-mobile-header': VMCMobileHeaderCMS,
    'vmc-header': VMCHeaderCMS
  }
};
</script>

<style>
button {
  outline: none;
  transition: 0.3s;
}

.vmc-bg-prime-6:hover {
  background-color: var(--vmc-primary-8);
}

.vmc-bg-prime-5:hover {
  background-color: var(--vmc-primary-7)
}

.vmc-bg-prime-4:hover {
  background-color: var(--vmc-primary-6)
}

@media (min-width: 1200px) {}
</style>

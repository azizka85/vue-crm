<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import AuthLayout from '@/layouts/AuthLayout'
import MainLayout from '@/layouts/MainLayout'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'auth') + '-layout'
    }
  },
  components: {
    AuthLayout, MainLayout
  }
}
</script>

<style lang="scss">
  @import url('~materialize-css/dist/css/materialize.min.css');
  @import url('assets/index.css');
</style>

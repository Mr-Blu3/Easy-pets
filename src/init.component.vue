<template>
  <div class="wrapper">
    <div v-if="$route.path.substring(1, 6) !== 'admin'">
      <front-header-component /><router-view /><front-footer-component />
    </div>

    <div v-else>
      <admin-header-component /><router-view /><admin-footer-component />
    </div>
  </div>
</template>

<script>

import FrontHeaderComponent from './front/components/header'
import FrontFooterComponent from './front/components/footer'
import AdminHeaderComponent from './admin/components/header'
import AdminFooterComponent from './admin/components/footer'

export default {
  name: 'init-component',
  components: {'front-header-component': FrontHeaderComponent, 'front-footer-component': FrontFooterComponent, 'admin-header-component': AdminHeaderComponent, 'admin-footer-component': AdminFooterComponent}
}

</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .wrapper {

  }
  .container {
    padding: 0 10px;
  }
</style>

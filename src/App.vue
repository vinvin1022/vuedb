<template>
  <div id="rootApp">
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/tabbar'
export default {
  name: 'app',
  components:{
    Tabbar
  }
}
</script>
<style lang="scss" src="./assets/css/common.scss"></style>


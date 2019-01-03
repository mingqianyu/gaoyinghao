<template>
  <div>
    <div class="nav">
      <img src="../../../../assets/logo.jpg" alt="">
      <p>中科院期刊微信公众号管理系统</p>
    </div>
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="horizontal"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      style="display: flex; width: 100%;"
    >
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
<style scoped>
  .nav {
    display: flex;
    height: 80px;
    align-items: center;
    background: url(../../../../assets/titleBg.jpg)
  }
  .nav p {
    font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 28px;
    color: #000000;
  }
</style>

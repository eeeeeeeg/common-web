<template>
  <div style="display:flex;flex-direction:row;">
      <Menu></Menu>
      <el-container>
        <el-header>
          xxx 管理系统
        </el-header>
        <el-main>
          <transition name="el-zoom-in-top">
            <router-view/>
          </transition>
        </el-main>
        <el-footer>版权所有</el-footer>
      </el-container>
  </div>
</template>

<script>
import Menu from '../menu/index'

export default {
  name: 'ProcessDomainList',
  data(){
        return {
            
        }
    },
  components: {
    Menu
  },
  methods: {

  },
  created() {

  },
  filters:{
  }
}
</script>

<style scoped>
.el-container {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 100%;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: calc(100vh - 120px);
}
.el-menu {
  background-color: #d3dce6;
}
</style>
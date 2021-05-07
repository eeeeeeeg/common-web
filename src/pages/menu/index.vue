<template>
<div id="menu">
<div class="collapse_btn" @click="isCollapse = !isCollapse">
  <i class="el-icon-s-unfold" v-if="isCollapse"></i>
  <i class="el-icon-s-fold" v-else></i>
</div>
<el-menu 
  router 
  :default-active="$route.path"
  class="el-menu-vertical-demo" 
  @open="handleOpen" 
  @close="handleClose" 
  :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
    <el-menu-item-group>
      <span slot="title">分组一</span>
      <el-menu-item index="/home">表单页面</el-menu-item>
      <el-menu-item index="/layout">布局展示</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">选项4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
  </el-menu-item>
</el-menu>
</div>
</template>
 
<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        height: calc(100vh - 60px);
    }
    .el-menu--collapse {
        width: 64px;
        height: calc(100vh - 60px);
    }
    
</style>

<script>
  export default {
    name:'Menu',
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
    #menu{
        position: relative;
    }
    .collapse_btn {
      z-index: 1;
      position: absolute;
      bottom: 10px;
      right: 5px;
      width: 40px;
      height: 40px;
      border-radius: 20px;
      box-shadow: 0px 0px 6px #ccc;
      background-color: #fff;
      transition: .2s all;
      cursor: pointer;
      color: rgba(0, 102, 153, 1);
      text-align: center;
      line-height: 40px;
      
    }
    .el-icon-s-unfold,
    .el-icon-s-fold {
      font-size: 20px;
    }
</style>
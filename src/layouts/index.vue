<template>
  <div class="app-wrapper">
    <!-- 侧边栏 -->
    <sidebar class="sidebar-container">sidebar</sidebar>
    <!-- 右侧内容区 -->
    <div class="main-container">
      <!-- 顶部导航栏 -->
      <navbar />
      <!-- 内容区 -->
      <app-main />
    </div>
  </div>
</template>

<script setup>
  import AppMain from './components/AppMain.vue';
  import NavBar from './components/Navbar.vue';
  import sidebar from './components/Sidebar/index.vue';
</script>

<style lang="scss" scoped>
@import '../styles/mixin.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
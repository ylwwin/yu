<template>
  <div class="page-root">
    <top-bar></top-bar>
    <div class="page-menu">
      <left-menu></left-menu>
    </div>
    <main class="page-content">
      <router-view/>
    </main>
    <bottom-bar></bottom-bar>
  </div>
</template>
<script>
import TopBar from "@/components/layout/TopBar";
import BottomBar from "@/components/layout/BottomBar";
import LeftMenu from "@/components/layout/LeftMenu";
export default {
  components: {
    "top-bar": TopBar,
    "bottom-bar": BottomBar,
    "left-menu": LeftMenu
  }
};
</script>

<style lang="scss" scoped>
.page-root {
  position: relative;
  background: #ecf0f2;
  .page-content {
    min-height: 800px;
    width: 72%;
    margin: 0 auto;
    padding-top: 60px;
  }
  .page-menu {
    position: fixed;
    left: 14%;
    top: 120px;
    margin-left: -54px;
  }
}
</style>


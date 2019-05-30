<template>
  <div class="page-root">
    <top-bar></top-bar>
    <main class="page-content">
      <router-view/>
    </main>
    <bottom-bar></bottom-bar>
  </div>
</template>
<script>
import TopBar from "@/components/layout/TopBar";
import BottomBar from "@/components/layout/BottomBar";

export default {
  components: {
    "top-bar": TopBar,
    "bottom-bar": BottomBar
  }
};
</script>

<style lang="scss" scoped>
.page-root {
  position: relative;
  background: #ecf0f2;
  .page-content {
    position: relative;
    width: 1000px;
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


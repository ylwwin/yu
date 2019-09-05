<template>
  <div class="page-root">
    <header v-if="!$route.meta.nohead">
      <top-bar />
    </header>
    <main>
      <router-view />
    </main>
    <footer v-if="!$route.meta.detail">
      <bottom-bar />
    </footer>
  </div>
</template>
<script>
import TopBar from "@/components/layout/terminal/TopBar";
import BottomBar from "@/components/layout/terminal/BottomBar";
export default {
  components: {
    "top-bar": TopBar,
    "bottom-bar": BottomBar
  },
  data() {
    return { active: 0 };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.page-root {
  position: relative;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background: #f6f8fa;
  header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 40px;
    background: rgb(249, 250, 250);
    border-bottom: 1px solid rgb(240, 240, 240);
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.02);
    z-index: 999;
  }
  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: #fff;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.02);
    z-index: 999;
  }
  main {
    padding-top: 40px;
  }
}
</style>


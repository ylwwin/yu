<template>
  <div class="page-root">
    <top-bar />
    <main>
      <router-view />
    </main>
    <bottom-input v-if="$route.meta.detail" />
    <bottom-bar v-else />
  </div>
</template>
<script>
import TopBar from "@/components/layout/terminal/TopBar";
import BottomBar from "@/components/layout/terminal/BottomBar";
import BottomInput from "@/components/layout/terminal/BottomInput";
export default {
  components: {
    "top-bar": TopBar,
    "bottom-bar": BottomBar,
    "bottom-input": BottomInput
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
  main {
    padding-bottom: 48px;
    min-height: calc(100vh - 48px);
    overflow: auto;
    background: #f6f8fa;
  }
}
</style>


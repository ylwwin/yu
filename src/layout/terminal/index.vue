<template>
  <div class="page-root">
    <top-bar v-if="!$route.meta.nohead" />
    <main>
      <router-view />
    </main>
    <bottom-input v-if="$route.meta.detail" />
    <bottom-bar v-if="$route.meta.bar" />
    <bottom-submit v-if="$route.meta.submit" />
  </div>
</template>
<script>
import TopBar from "@/components/layout/terminal/TopBar";
import BottomBar from "@/components/layout/terminal/BottomBar";
import BottomInput from "@/components/layout/terminal/BottomInput";
import BottomSubmit from "@/components/layout/terminal/BottomSubmit";
export default {
  components: {
    "top-bar": TopBar,
    "bottom-bar": BottomBar,
    "bottom-input": BottomInput,
    "bottom-submit": BottomSubmit
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
  }
}
</style>


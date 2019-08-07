<template>
  <div class="page-root">
    <top-bar></top-bar>
    <main class="page-content">
      <router-view/>
    </main>
    <bottom-bar></bottom-bar>
    <my-dialog title="登录" :value="show"/>
  </div>
</template>
<script>
import TopBar from "@/components/layout/TopBar";
import BottomBar from "@/components/layout/BottomBar";
import dialog from "@/components/layout/Dialog";
import Bus from "@/utils/bus";
export default {
  components: {
    "top-bar": TopBar,
    "bottom-bar": BottomBar,
    "my-dialog": dialog
  },
  data() {
    return {
      show: false
    };
  },
  mounted() {
    Bus.$on("showLoginBox", () => {
      this.show = true;
    });
    Bus.$on("closeLoginBox", () => {
      this.show = false;
    });
  }
};
</script>

<style lang="scss" scoped>
.page-root {
  position: relative;
  background: #f6f8fa;
  .page-content {
    position: relative;
    width: 1000px;
    margin: 0 auto;
    // padding-top: 20px;
  }
  .page-menu {
    position: fixed;
    left: 14%;
    top: 120px;
    margin-left: -54px;
  }
}
</style>


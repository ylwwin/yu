<template>
  <div class="page-root">
    <van-nav-bar left-arrow @click-left="onClickLeft">
      <span slot="left" class="nav-text">
        <van-icon name="arrow-left" size="16px" />返回
      </span>
      <span slot="title" class="nav-text">{{this.$route.meta.title}}</span>
    </van-nav-bar>
    <main>
      <router-view />
    </main>
  </div>
</template>
<script>
import { NavBar, Icon } from "vant";
export default {
  components: { [NavBar.name]: NavBar, [Icon.name]: Icon },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
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
.nav-text {
  font-size: 12px;
  .van-icon {
    vertical-align: middle;
    margin-top: -2px;
    color: #aaa;
  }
}
</style>


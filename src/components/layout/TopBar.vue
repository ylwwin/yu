<template>
  <div class="top-root-box">
    <div class="top-content">
      <div class="item float-left logo">
        <img src="static/images/yllsvg.png">
      </div>
      <div class="item float-left menu">
        <top-menu></top-menu>
      </div>
      <div class="item float-right tools">
          <i>x</i>
          <i>x</i>
          <i>x</i>
      </div>
    </div>
  </div>
</template>
<script>
import TopMenu from "@/components/bussiness/TopMenu";
export default {
  components: { "top-menu": TopMenu }
};
</script>

<style lang="scss" scoped>
.top-root-box {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  background: #fff;
  box-shadow: 0 0 4px 2px rgba(0,0,0,.03);
  z-index: 999;
  .top-content {
    width: 1200px;
    margin: 0 auto;
    .item {
      height: 60px;
      box-sizing: border-box;
      margin-right: 20px;
    }
    .logo {
      img {
        height: 44px;
        margin-top: 8px;
      }
    }
  }
}
</style>

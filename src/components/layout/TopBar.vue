<template>
  <div class="top-root-box">
    <div class="top-content">
      <div class="item float-left logo">
        <router-link to="/">
          <img src="static/images/yllsvg.png" />
        </router-link>
      </div>
      <div class="item float-left menu">
        <top-menu></top-menu>
      </div>
      <div class="item float-right tools">
        <span class="sign-in" @click="showLoginBox">登录</span>
        <span class="sign-up" @click="toRegister">注册</span>
      </div>
      <div class="item float-right search">
        <input type="text" placeholder="搜索" />
        <i class="icon-sousuo"></i>
      </div>
    </div>
  </div>
</template>
<script>
import Bus from "@/utils/bus";
import TopMenu from "@/components/bussiness/TopMenu";
export default {
  components: { "top-menu": TopMenu },
  methods: {
    toRegister() {
      this.$router.push("register");
    },
    showLoginBox() {
      Bus.$emit("showLoginBox");
    }
  }
};
</script>

<style lang="scss" scoped>
.top-root-box {
  width: 100%;
  height: 60px;
  background: #fff;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.03);
  z-index: 999;
  .top-content {
    width: 1000px;
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
    .tools {
      line-height: 60px;
      font-size: 14px;
      .sign-in,
      .sign-up {
        cursor: pointer;
      }
      .sign-in {
        color: #62d2a2;
        margin-right: 8px;
      }
      .sign-up {
        color: #f38181;
      }
    }
    .search {
      position: relative;
      height: 60px;
      padding: 15px 0;
      input {
        height: 28px;
        width: 100px;
        outline: none;
        padding-left: 28px;
        border: 1px solid #d5d5d5;
        transition: all 0.21s ease-in;
        box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.02) inset;
        font-size: 12px;
      }
      input:focus {
        width: 180px;
        border: 1px solid #abdcff;
      }
      input:focus ~ i {
        color: #abdcff;
      }
      i {
        position: absolute;
        left: 4px;
        top: 18px;
        font-size: 24px;
        color: #d5d5d5;
      }
    }
  }
}
</style>

<template>
  <van-tabbar v-model="active" active-color="#F38181" inactive-color="#000">
    <van-tabbar-item to="/funs/all">
      <van-icon name="home-o" size="20px" />
    </van-tabbar-item>
    <van-tabbar-item>
      <van-icon name="search" size="20px" @click="tobeContinue" />
    </van-tabbar-item>
    <van-tabbar-item to="/makefun">
      <!-- <van-icon name="add" size="26px" color="rgb(245,40,40)" /> -->
      <div class="logo-box">
        <span>yu</span>
      </div>
    </van-tabbar-item>
    <van-tabbar-item @click="tobeContinue">
      <van-icon name="friends-o" size="20px" />
    </van-tabbar-item>
    <van-tabbar-item to="/me">
      <van-icon name="user-o" size="18px" />
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem, Toast, Icon } from "vant";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Icon.name]: Icon,
    [Toast.name]: Toast
  },
  data() {
    return {
      active: 0,
      focus: false,
      showSearch: false,
      history: [
        { label: "热搜1" },
        { label: "热搜12" },
        { label: "热搜1s" },
        { label: "热搜321" },
        { label: "热搜1e" },
        { label: "热搜s1" },
        { label: "热搜f1" },
        { label: "热搜231" },
        { label: "热搜1123" },
        { label: "热搜11" }
      ]
    };
  },
  methods: {
    tobeContinue() {
      Toast.loading({
        icon: "ellipsis",
        message: "敬请期待",
        duration: 1000
      });
    }
  },
  watch: {
    $route(to, from) {
      if (to.path.startsWith("/funs/")) this.active = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.logo-box {
  position: relative;
  border: 1px solid #f38181;
  padding: 1px 2px 4px;
  line-height: 12px;
  margin-top: -2px;
  color: #999;
  border-radius: 2px;
  box-shadow: 0 0 1px 1px rgba(243, 129, 129, .21);
  span {
    display: block;
    transform: scale(0.88);
  }
}
.logo-box::after {
  content: "+";
  position: absolute;
  right: -5px;
  top: -7px;
  background: #fff;
  font-size: 14px;
  line-height: 12px;
  color: #62d2a2;
}
</style>

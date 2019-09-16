<template>
  <van-tabbar v-model="active" active-color="#F38181" inactive-color="#000">
    <van-tabbar-item icon="home-o" to="/funs/all">首页</van-tabbar-item>
    <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
    <van-tabbar-item to="/makefun">
      <van-icon name="add-o" size="26px" color="rgb(240,40,40)" />
    </van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/friends">朋友</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/me">我</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem, Icon } from "vant";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Icon.name]: Icon
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
  }
};
</script>

<style lang="scss" scoped>
.top-root-box {
  position: relative;
  height: 40px;
  padding: 0 4px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  background: #fff;
  .item {
    float: left;
    line-height: 40px;
    embed {
      margin-top: 4px;
    }
  }
  .left {
    width: 10%;
    height: 100%;
  }
  .center {
    width: 80%;
    text-align: center;
    em,
    embed {
      vertical-align: middle;
    }
    em {
      font-size: 14px;
      color: #aaa;
    }
    embed {
      margin-top: -6px;
    }
  }
  .right {
    width: 10%;
    i {
      color: #e5e5e5;
    }
  }
}
</style>

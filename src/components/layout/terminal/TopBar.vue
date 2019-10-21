<template>
  <van-sticky>
    <ul class="menus">
      <li
        v-for="menu in menus"
        :key="menu.link"
        :class="{'active':menu.link == active}"
        @click="active = menu.link"
      >
        <router-link :to="menu.link" :style="'color:'+menu.color">{{menu.label}}</router-link>
      </li>
    </ul>
  </van-sticky>
</template>
<script>
import { Sticky } from "vant";
export default {
  components: {
    [Sticky.name]: Sticky
  },
  data() {
    return {
      active: "/funs/all",
      menus: [
        { label: "最新", link: "/funs/all", color: "#F38181" },
        { label: "美图", link: "/funs/pictures", color: "#62d2a2" },
        { label: "段子", link: "/funs/jok", color: "#Aa96da" },
        { label: "随笔", link: "/funs/note", color: "#3f72af" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.menus {
  width: 100%;
  height: 40px;
  background: rgb(249, 250, 250);
  border-bottom: 1px solid #eee;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.04);
  z-index: 999;
  list-style-type: none;
  li {
    position: relative;
    float: left;
    width: 25%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 12px;
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  li::after {
    position: absolute;
    content: "";
    width: 0;
    height: 2px;
    background: #f38181;
    bottom: 4px;
    left: 50%;
    margin-left: 0;
    transition: width .21s ease-in-out;
  }
  li.active::after {
    margin-left: -6px;
    width: 12px;
  }
}
</style>

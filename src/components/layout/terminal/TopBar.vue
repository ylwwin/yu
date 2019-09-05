<template>
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
</template>
<script>
export default {
  data() {
    return {
      active: "#1",
      menus: [
        { label: "最新", link: "/funs/all", color: "#F38181" },
        { label: "段子", link: "/funs/jok", color: "#Aa96da" },
        { label: "美图", link: "/funs/pictures", color: "#62d2a2" },
        { label: "随笔", link: "/funs/note", color: "#3f72af" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.menus {
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
  li.active::after {
    position: absolute;
    content: "";
    width: 12px;
    height: 2px;
    background: #f38181;
    left: 50%;
    margin-left: -6px;
    bottom: 4px;
  }
}
</style>

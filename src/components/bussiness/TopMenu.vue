<template>
  <ul>
    <li
      v-for="item in menus"
      :key="item.link"
      :class="{'active':active==item.link}"
      @click="goto(item.link)"
      :style="'color:'+ item.color"
    >{{item.label}}</li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      active: "#1",
      menus: [
        { label: "美图", link: "#1", color: "#F38181" },
        { label: "段子", link: "#2", color: "#Aa96da" },
        { label: "视频", link: "#3", color: "#62d2a2" },
        { label: "随笔", link: "#4", color: "#3f72af" }
      ]
    };
  },
  methods: {
    goto(link) {
      this.active = link;
      this.$router.push(link);
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  li {
    position: relative;
    float: left;
    height: 60px;
    background: #fff;
    text-align: center;
    line-height: 60px;
    cursor: pointer;
    padding: 0 20px;
  }
  li::after {
    position: absolute;
    content: "";
    width: 0;
    height: 2px;
    left: 50%;
    bottom: 0;
    background: #aaa;
    transition: all .21s ease-in-out;
  }
  li.active::after {
    width: 100%;
    left: 0;
  }
}
</style>

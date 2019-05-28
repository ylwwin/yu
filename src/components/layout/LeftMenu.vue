<template>
  <ul>
    <li
      v-for="item in menus"
      :key="item.link"
      :class="{'active':active==item.link}"
      @click="goto(item.link)"
    >{{item.label}}</li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      active: "#1",
      menus: [
        { label: "美图", link: "#1" },
        { label: "段子", link: "#2" },
        { label: "视频", link: "#3" },
        { label: "随笔", link: "#4" }
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
    width: 48px;
    height: 42px;
    margin-top: 8px;
    background: #fff;
    text-align: center;
    line-height: 42px;
    cursor: pointer;
  }
  li.active {
    position: relative;
    background: #fe6464;
    color: #fff;
  }
  li.active::before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background: #fe6464;
    border-radius: 2px;
    transform: rotate(45deg);
    z-index: 2;
    left: 42px;
    top: 16px;
  }
  li.active:hover,
  li.active:hover::after {
    background: #f55;
  }
}
</style>

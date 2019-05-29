<template>
  <div class="coponent-root">
    <ul>
      <li v-for="item in filters" :key="item.field">{{item.label}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filters: [
        { label: "刚刚发的", value: "#1" },
        { label: "叫的最凶", value: "#2" },
        { label: "随便看看", value: "#3" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.coponent-root {
  display: inline-block;
  li {
    float: left;
    height: 50px;
    line-height: 50px;
    list-style-type: none;
    margin: 0 12px;
    font-size: 16px;
    color: #aaa;
    cursor: pointer;
  }
  li:hover {
    color: #fe6464;
  }
}
</style>
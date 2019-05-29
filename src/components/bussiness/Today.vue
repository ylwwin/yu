<template>
  <div class="coponent-root">
    <div class="left">
      <span>今日更新</span>
      <h3>99+</h3>
    </div>
    <div class="right">
      <span>2019</span>
      <i>星期二</i>
      <h3>05/28</h3>
    </div>
  </div>
</template>
<script>
export default {
  computed: {}
};
</script>

<style lang="scss" scoped>
.coponent-root {
  display: inline-block;
  background: #fff;
  padding: 2px 12px;
  border-radius: 2px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.02);
  .left,
  .right {
    float: left;
    text-align: center;
    span {
      font-size: 12px;
      color: #aaa;
    }
    i {
      font-size: 12px;
      color: #777;
      font-style: normal;
    }
    h3 {
      font-size: 18px;
      color: #666;
    }
  }
  .left {
    padding-right: 12px;
  }
  .right {
    padding-left: 12px;
    border-left: 1px solid #eee;
  }
}
</style>


<template>
  <div class="component-root">
    <div class="left">
      <span>每日签到</span>
    </div>
    <div class="right">
      <span>西安</span>
      <h3>39°</h3>
      <em>空气优</em>
    </div>
    <div class="right">
      <i>XX</i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.component-root {
  position: relative;
  width: 100%;
  height: 120px;
  background: #fff;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 2px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.02);
  .left,
  .right {
    float: left;
    text-align: center;

    h3 {
      font-size: 18px;
      color: #777;
    }
  }
  .left {
    padding-right: 12px;
    span {
      display: block;
      width: 42px;
      height: 42px;
      background: #fe6464;
      border-radius: 2px;
      padding: 8px;
      color: #fff;
    }
  }
  .right {
    padding-left: 12px;
  }
}
</style>
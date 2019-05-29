<template>
  <div class="coponent-root">
    <div class="title">
      <h1>
        <i>XXX</i>
        <span>ylwwin</span>
      </h1>
      <h2>单身狗靠狗脱单</h2>
    </div>
    <div class="content">
      <img src="static/images/fun1.gif">
    </div>
    <div class="diss"></div>
    <div class="tools"></div>
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
  margin-top: 12px;
  padding: 8px 16px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  background: #fff;
  .title {
    h1,
    h2 {
      font-style: normal;
      font-weight: normal;
    }
    h1 {
      font-size: 16px;
      line-height: 48px;
    }
    h2 {
      font-size: 18px;
      line-height: 42px;
    }
  }
  .content {
    img {
      height: 320px;
    }
  }
}
</style>
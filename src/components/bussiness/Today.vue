<template>
  <div class="coponent-root">
    <div class="left">
      <span>今日更新</span>
      <h3>99+</h3>
    </div>
    <div class="right">
      <span>{{year}}</span>
      <i>{{day}}</i>
      <h3>{{date}}</h3>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    day: function() {
      const days = ["日", "一", "二", "三", "四", "五", "六"];
      return `星期${days[new Date().getDay()]}`;
    },
    year: function() {
      return new Date().getFullYear();
    },
    date: function() {
      let d = new Date();
      return `${(d.getMonth() + 1).toString().padStart(2, "0")}/${d
        .getDate()
        .toString()
        .padStart(2, "0")}`;
    }
  },
  data() {
    return {};
  }
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


<template>
  <div class="coponent-root">
    <div class="title">
      <h1>
        <i class="icon-tupian"></i>
        <span>ylwwin</span>
      </h1>
      <h2>单身狗靠狗脱单</h2>
    </div>
    <div class="content">
      <img src="static/images/fun1.gif">
    </div>
    <div class="diss float-left">
      <i class="icon-redu"></i>
      <span>单身狗靠狗脱单, 啊哈哈哈哈哈哈哈哈~</span>
    </div>
    <div class="tools float-left">
      <div class="float-right">
        <i class="icon-zan"></i>
        <i class="icon-duihua"></i>
        <i class="icon-shoucang"></i>
      </div>
    </div>
    <div class="clear-both"></div>
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
  padding: 8px 16px 24px;
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
      i,
      span {
        vertical-align: middle;
      }
      i {
        font-size: 32px;
      }
      span {
        height: 32px;
        display: inline-block;
        font-size: 14px;
        line-height: 32px;
      }
    }
    h2 {
      font-size: 16px;
      line-height: 42px;
    }
  }
  .content {
    img {
      height: 320px;
    }
  }
  .diss {
    width: 60%;
    i,
    span {
      vertical-align: middle;
    }
    i {
      font-size: 28px;
      color: rgb(252, 166, 7);
    }
    span {
      height: 28px;
      display: inline-block;
      font-size: 12px;
      line-height: 28px;
    }
  }
  .tools {
    width: 40%;
    i {
      margin: 0 4px;
      font-size: 24px;
      cursor: pointer;
    }
  }
}
</style>
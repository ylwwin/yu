


<template>
  <div class="top-root-box">
    <div class="item left">
      <embed
        src="/static/images/search.svg"
        width="32"
        height="32"
        type="image/svg+xml"
        style="float:left"
      />
    </div>
    <div class="item center">
      <embed
        src="/static/images/create.svg"
        width="54"
        height="54"
        type="image/svg+xml"
      />
    </div>
    <div class="item right">
      <embed
        src="/static/images/user.svg"
        width="32"
        height="32"
        type="image/svg+xml"
        style="float:left"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      focus: false,
      history: [
        { label: "热搜1" },
        { label: "热搜12" },
        { label: "热搜1s" },
        { label: "热搜321" },
        { label: "热搜1e" },
        { label: "热搜s1" },
        { label: "热搜f1" },
        { label: "热搜231" },
        { label: "热搜1123" },
        { label: "热搜11" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.top-root-box {
  position: relative;
  height: 40px;
  padding: 0 4px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  background: #fff;
  .item {
    float: left;
    line-height: 40px;
    embed {
      margin-top: 4px;
    }
  }
  .left {
    width: 10%;
    height: 100%;
  }
  .center {
    width: 80%;
    text-align: center;
    em, embed{
      vertical-align: middle;
    }
    em {
      font-size: 14px;
      color: #aaa;
    }
    embed{
      margin-top: -6px;
    }
  }
  .right {
    width: 10%;
    i {
      color: #e5e5e5;
    }
  }
}
</style>

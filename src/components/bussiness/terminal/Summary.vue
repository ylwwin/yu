<template>
  <div>
    <div class="header">
      <img src="/static/images/avatar.jpg" />
      <span>{{content.author}}</span>
      <em>{{content.date}}</em>
    </div>
    <div class="content">
      <p>
        <span @click="viewDetail">{{content.title}}</span>
      </p>
      <img :src="content.imgUrl" />
    </div>
    <div class="footer">
      <div class="hot-diss">
        <embed src="/static/images/hot.svg" width="32" height="32" type="image/svg+xml" />
        <span>{{content.title}}</span>
      </div>
      <div class="tools">
        <embed src="/static/images/praise.svg" width="32" height="32" type="image/svg+xml" />
        <b>{{content.zan}}</b>
        <embed src="/static/images/diss.svg" width="32" height="32" type="image/svg+xml" />
        <b>{{content.diss}}</b>
        <embed src="/static/images/link.svg" width="32" height="32" type="image/svg+xml" />
        <span @click="viewDetail" class="float-right link">浏览全文</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["content"],
  methods: {
    viewDetail() {
      this.$router.push("/detail");
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 32px;
  img,
  span,
  em {
    float: left;
    height: 32px;
    line-height: 32px;
  }
  img {
    margin-top: 2px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.04);
  }
  span {
    margin-left: 8px;
    font-size: 14px;
    color: #666;
  }
  em {
    float: right;
    font-size: 12px;
    color: #777;
  }
}
.content {
  width: 100%;
  p {
    font-size: 14px;
    line-height: 36px;
  }
  img {
    max-height: 120px;
  }
}
.footer {
  width: 100%;
  line-height: 32px;
  .hot-diss {
    embed,
    span {
      display: inline-block;
      vertical-align: middle;
    }
    embed {
      height: 32px;
    }
    span {
      font-size: 14px;
    }
  }
  .tools {
    line-height: 24px;
    embed,
    b {
      display: inline-block;
      height: 32px;
      vertical-align: top;
    }
    b,
    span {
      font-size: 12px;
    }
    b {
      line-height: 34px;
      margin: 0 12px 0 -8px;
      font-size: 14px;
      color: #8f8e8a;
    }
  }
}
</style>



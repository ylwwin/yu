<template>
  <div>
    <div class="header">
      <i class="cubeic-person"></i>
      <span>{{content.author}}</span>
      <em>{{content.date}}</em>
    </div>
    <div class="content">
      <p>
        <span @click="viewDetail">{{content.title}}</span>
      </p>
      <img :src="content.imgUrl">
    </div>
    <div class="footer">
      <div class="diss">
        <i class="cubeic-hot"></i>
        <span>{{content.title}}</span>
      </div>
      <div class="tools">
        <embed src="/static/images/praise.svg" width="32" height="32" type="image/svg+xml">
        <span>{{content.zan}}</span>
        <embed src="/static/images/diss.svg" width="32" height="32" type="image/svg+xml">
        <span>{{content.diss}}</span>
        <embed src="/static/images/link.svg" width="32" height="32" type="image/svg+xml">
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
  i,
  span,
  em {
    display: inline-block;
    height: 32px;
  }
  i {
    font-size: 20px;
    width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #e5e5e5;
    color: #e5e5e5;
  }
  span {
    font-size: 14px;
    margin-left: 12px;
    color: #666;
  }
  em {
    float: right;
    line-height: 32px;
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
    max-height: 240px;
  }
}
.footer {
  width: 100%;
  line-height: 32px;

  .diss {
    i {
      color: rgba(240, 40, 40, 0.72);
    }
    span {
      font-size: 14px;
    }
  }
  .tools {
    line-height: 24px;
    embed,span{
      display: inline-block;
      height: 32px;
      vertical-align: top;
    }
    span{
      line-height: 34px;
      margin: 0 12px 0 -8px;
      font-size: 14px;
      color: #666;
    }
  }
}
</style>



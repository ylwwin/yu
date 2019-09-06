<template>
  <van-panel style="margin: 8px 0;">
    <div slot="header" class="header">
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
    <div slot="footer" class="footer">
      <y-icon src="/static/images/praise.svg" />
      <span>{{content.zan}}</span>
      <y-icon src="/static/images/diss.svg" />
      <span>{{content.diss}}</span>
      <y-icon src="/static/images/link.svg" />
      <span @click="viewDetail" class="float-right link">浏览全文</span>
    </div>
  </van-panel>
</template>
<script>
import { Panel } from "vant";
export default {
  components: { [Panel.name]: Panel },
  props: ["content"],
  methods: {
    viewDetail() {
      this.$router.push("/detail");
    }
  }
};
</script>
<style lang="scss" scoped>
.content,
.header {
  padding: 8px 16px;
  box-sizing: border-box;
}
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

.hot-diss {
  div,
  span {
    display: inline-block;
    vertical-align: middle;
  }
  div {
    height: 32px;
  }
  span {
    font-size: 14px;
  }
}
.footer {
  line-height: 24px;
  div,
  span {
    display: inline-block;
    height: 32px;
    vertical-align: top;
  }
  span {
    font-size: 12px;
    line-height: 34px;
    margin: 0 12px 0 -8px;
  }
}
</style>



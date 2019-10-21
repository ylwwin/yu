<template>
  <van-panel style>
    <div slot="header" class="header">
      <div class="left">
        <img src="/static/images/avatar.jpg" />
        <p>
          <span>{{content.author}}</span>
          <em>{{content.date}}</em>
        </p>
      </div>
      <div class="right">
        <y-icon src="/static/images/praise.svg" />
        <span>{{content.zan}}</span>
        <y-icon src="/static/images/diss.svg" />
        <span>{{content.diss}}</span>
        <y-icon src="/static/images/link.svg" />
      </div>
    </div>
    <div class="content">
      <p @click="viewDetail(content.id)">{{content.title}}</p>
      <van-grid :column-num="3" :gutter="0">
        <van-grid-item
          v-for="(img, index) in content.imgs.slice(0, 3)"
          :key="img"
          @click="viewDetail(content.id)"
        >
          <van-image :src="img" />
          <b
            class="more-link"
            v-if="content.imgs.length > 3 && index == 2"
          >&plus;{{ content.imgs.length - 3 }}</b>
        </van-grid-item>
      </van-grid>
    </div>
  </van-panel>
</template>
<script>
import { Panel, Grid, GridItem, Image } from "vant";
export default {
  components: {
    [Panel.name]: Panel,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Image.name]: Image
  },
  props: ["content"],
  methods: {
    viewDetail(id) {
      this.$router.push({ path: "/detail", query: { id: id } });
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
  display: flex;
  width: 100%;
  .left {
    width: calc(100% - 128px);
    height: 32px;
    img,
    p {
      vertical-align: top;
      display: inline-block;
    }
    img {
      width: 32px;
      height: 32px;
      border-radius: 2px;
      box-shadow: 1px 1px rgba(0, 0, 0, 0.04);
    }
    p {
      line-height: 12px;
      span {
        font-size: 14px;
        color: #666;
      }
      em {
        display: block;
        line-height: 24px;
        transform: scale(0.88);
        transform-origin: left;
        font-size: 12px;
        font-style: normal;
        color: #999;
      }
    }
  }
  .right {
    width: 128px;
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
      margin: 0 0 0 -8px;
    }
  }
}
.content {
  width: 100%;
  p {
    font-size: 14px;
    line-height: 36px;
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

.more-link {
  position: absolute;
  left: 2%;
  top: 2%;
  width: 96%;
  height: 96%;
  text-align: center;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.32);
  padding-top: 50%;
  box-sizing: border-box;
  font-size: 18px;
  color: #fff;
}
</style>



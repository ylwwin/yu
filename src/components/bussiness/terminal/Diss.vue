<template>
  <van-panel style="margin: 8px 0; padding:8px;">
    <div slot="header" class="header">
      <y-icon src="/static/images/diss.svg" style="float:left" />
      <span style="float:left">
        <b>{{dissCount}}</b>&nbsp;条评论
      </span>
    </div>
    <div class="content">
      <section class="single-diss" v-for="item of disList" :key="item.id">
        <div class="title">
          <img :src="item.avatar" />
          <b>{{item.name}}</b>
          <span>
            <y-icon src="/static/images/praise.svg" />
            <i>{{item.count}}</i>
          </span>
        </div>
        <div class="content">{{item.content}}</div>
      </section>
    </div>
    <!-- <div slot="footer" class="footer"></div> -->
  </van-panel>
</template>
<script>
import { Panel } from "vant";
export default {
  components: { [Panel.name]: Panel },
  data() {
    return {
      dissCount: 10,
      disList: [
        {
          id: "7",
          count: 12,
          name: "ylwwin",
          content: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          avatar: "/static/images/avatar.jpg"
        },
        {
          id: "1",
          count: 12,
          name: "ylwwin",
          content: "哈哈哈哈哈哈哈哈",
          avatar: "/static/images/avatar.jpg"
        },
        {
          id: "2",
          count: 12,
          name: "ylwwin",
          content: "呵呵哈哈哈红火火恍恍惚惚哈哈哈",
          avatar: "/static/images/avatar.jpg"
        },
        {
          id: "3",
          count: 12,
          name: "ylwwin",
          content: "哈哈哈哈哈哈哈哈哈",
          avatar: "/static/images/avatar.jpg"
        },
        {
          id: "4",
          count: 12,
          name: "ylwwin",
          content:
            "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          avatar: "/static/images/avatar.jpg"
        },
        {
          id: "5",
          count: 12,
          name: "ylwwin",
          content: "哈哈哈哈哈哈哈哈哈",
          avatar: "/static/images/avatar.jpg"
        },
        {
          id: "6",
          count: 12,
          name: "ylwwin",
          content: "红红火火恍恍惚惚哈哈哈",
          avatar: "/static/images/avatar.jpg"
        }
      ]
    };
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 42px;
  line-height: 32px;
  span {
    font-size: 12px;
    color: #5f5f5f;
  }
}
section.single-diss {
  position: relative;
  div.title {
    font-size: 14px;
    img,
    b,
    span {
      vertical-align: middle;
    }
    img {
      width: 24px;
      height: 24px;
      margin-right: 4px;
      border-radius: 100%;
    }
    b {
      font-weight: normal;
      text-shadow: 1px 1px rgba(0, 0, 0, 0.12);
    }
    span {
      position: absolute;
      right: 4px;
      top: -4px;
      div,
      i {
        vertical-align: middle;
      }
      i {
        margin: 0 12px 0 -10px;
        font-style: normal;
        font-size: 12px;
      }
    }
  }
  div.content {
    margin: 4px 28px 12px;
    line-height: 24px;
    font-size: 12px;
    letter-spacing: 1px;
  }
}
</style>

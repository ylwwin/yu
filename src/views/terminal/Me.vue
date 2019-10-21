<template>
  <div style="overflow-x: hidden;">
    <div class="user-bg van-hairline--bottom"></div>
    <div class="user-logo">
      <img src="/static/images/avatar.jpg" />
      <b>ylwwin</b>
      <span @click="signIn">
        <van-icon name="sign" size="18px" />
        <i>签到</i>
      </span>
    </div>
    <van-row class="user-links">
      <van-col span="6" v-for="tool in tools" :key="tool.title" @click="goTo(tool.link)">
        <van-icon :name="tool.icon" />
        <p>{{tool.title}}</p>
      </van-col>
    </van-row>
    <van-cell-group title="功能列表">
      <van-cell icon="records" title="编辑资料" is-link />
      <van-cell icon="setting-o" title="设置" is-link />
      <van-cell icon="gift-o" title="关于我们" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup, Toast } from "vant";
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      tools: [
        { icon: "smile-comment-o", title: "消息", link: "/messages" },
        { icon: "star-o", title: "收藏", link: "/collections" },
        { icon: "new-o", title: "足迹", link: "/footmark" }
      ]
    };
  },
  methods: {
    goTo(link) {
      this.$router.push(link);
    },
    signIn() {
      const toast = Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        // loadingType: "spinner",
        message: "倒计时 3 秒",
        icon: "/static/images/loadding.svg",
        className: "loadding-box"
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = `倒计时 ${second} 秒`;
        } else {
          clearInterval(timer);
          Toast.clear();
        }
      }, 1000);
    }
  }
};
</script>

<style lang="scss">
.user {
  &-bg {
    width: 100%;
    height: 160px;
    z-index: -1;
    background: #f2f4f6;
    box-shadow: 0 0 40px 10px rgba(0, 0, 0, 0.04) inset;
    border-bottom: 1px solid #e6e8ea;
  }
  &-logo {
    width: 100%;
    height: 60px;
    margin-top: -40px;
    z-index: 0;
    padding: 8px 20px;
    box-sizing: border-box;
    img,
    b,
    span {
      vertical-align: top;
    }
    img {
      width: 48px;
      height: 48px;
      border-radius: 4px;
    }
    b {
      margin-left: 12px;
      font-weight: normal;
    }
    span {
      float: right;
      font-size: 12px;
      line-height: 18px;
      color: rgb(240, 40, 40);
      padding: 0 12px 4px;
      border-radius: 2px;
      .van-icon,
      i {
        vertical-align: middle;
      }
      i {
        font-style: normal;
      }
    }
    span:active {
      transform: translateY(1px);
    }
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    margin-top: 12px;
    color: rgb(60, 60, 75);
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
.loadding-box {
  background: rgba(0, 0, 0, 0.42);
  padding: 4px;
  border-radius: 2px;
}
</style>
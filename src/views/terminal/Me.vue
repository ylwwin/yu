<template>
  <div style="overflow-x: hidden;">
    <div class="user-bg van-hairline--bottom"></div>
    <div class="user-logo">
      <img src="/static/images/avatar.jpg" />
      <b>ylwwin</b>
      <span>
        <van-icon name="sign" size="18px" />
        <i>签到</i>
      </span>
    </div>
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="new-o" />
        <p>动态</p>
      </van-col>
      <van-col span="6">
        <van-icon name="smile-comment-o" />
        <p>消息</p>
      </van-col>
      <van-col span="6">
        <van-icon name="edit" />
        <p>编辑资料</p>
      </van-col>
      <van-col span="6">
        <van-icon name="star-o" />
        <p>收藏</p>
      </van-col>
    </van-row>
    <van-cell-group title="功能列表">
      <van-cell icon="records" title="全部订单" is-link />
      <van-cell icon="records" title="编辑资料" is-link />
      <van-cell icon="setting-o" title="设置" is-link />
      <van-cell icon="gift-o" title="关于我们" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from "vant";
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
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
      text-shadow: 1px 1px rgba(0, 0, 0, 0.18);
    }
    span {
      float: right;
      font-size: 12px;
      line-height: 18px;
      // border: 1px solid rgb(240, 40, 40);
      color: rgb(240, 40, 40);
      padding: 2px 8px;
      border-radius: 2px;
      .van-icon,
      i {
        vertical-align: middle;
      }
      i {
        // margin-left: -2px;
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
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
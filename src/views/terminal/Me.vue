<template>
  <div style="overflow:auto;">
    <div class="info-box">
      <div class="left">
        <img src="/static/images/avatar.jpg" />
      </div>
      <div class="center">
        <b>yllllll</b>
        <van-tag color="#ffe1e1" text-color="#ad0000" size="mini">Lv 2</van-tag>
      </div>
      <div class="right">
        <van-button type="danger" size="small" round icon="edit">签&nbsp;到</van-button>
      </div>
    </div>
    <van-grid square :column-num="4">
      <van-grid-item icon="new-o" text="动态" info="123" />
      <van-grid-item icon="smile-comment-o" text="消息" />
      <van-grid-item icon="friends-o" text="好友" />
      <van-grid-item icon="records" text="编辑资料" />
      <van-grid-item icon="flower-o" text="收藏" />
      <van-grid-item icon="flag-o" text="足迹" />
      <van-grid-item />
      <van-grid-item />
    </van-grid>
    <van-cell-group title="分组">
      <van-cell title="单元格" is-link />
      <van-cell title="单元格" is-link />
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" />
    </van-cell-group>
  </div>
</template>
<script>
import { Cell, CellGroup, Panel, Button, Grid, GridItem, Tag } from "vant";
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Panel.name]: Panel,
    [Button.name]: Button,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Tag.name]: Tag
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.info-box {
  display: flex;
  width: 100%;
  padding: 40px 0 24px;
  background: #fff;
  div.left,
  div.center,
  div.right {
    height: 80px;
    padding: 16px 0 16px 12px;
    box-sizing: border-box;
  }
  div.left {
    width: 60px;
    img {
      width: 48px;
      height: 48px;
      border-radius: 100%;
    }
  }
  div.center {
    width: calc(100% - 160px);
    line-height: 28px;
    font-size: 14px;
    b {
      display: block;
    }
  }
  div.right {
    width: 100px;
    padding-top: 24px;
  }
}
</style>
<template>
  <div>
    <van-divider
      content-position="left"
      hairline
      :style="{ color: '#3f3f3f', padding: '0 8px', fontSize:'12px' }"
    >选择一个类型叭</van-divider>
    <van-row type="flex" justify="center">
      <van-col :span="22">
        <van-tag
          mark
          v-for="tag in tags"
          :key="tag.value"
          :color="tag.color"
          style="margin-right: 16px"
          :plain="active != tag.value"
          @click="active = tag.value"
          size="medium"
        >{{tag.label}}</van-tag>
      </van-col>
    </van-row>
    <van-divider
      content-position="left"
      hairline
      :style="{ color: '#3f3f3f', padding: '0 8px', fontSize:'12px'  }"
    >撩人的文字</van-divider>
    <van-row type="flex" justify="center">
      <van-col :span="24">
        <van-field
          v-model="content"
          placeholder="写点什么吧~"
          type="textarea"
          rows="5"
          clearable
          arrow-direction="right"
        />
      </van-col>
    </van-row>

    <van-divider
      content-position="left"
      hairline
      :style="{ color: '#3f3f3f', padding: '0 8px', fontSize:'12px' }"
    >酷酷的图片</van-divider>
    <van-row type="flex" justify="center">
      <van-col :span="22">
        <van-uploader v-model="fileList" multiple />
      </van-col>
    </van-row>
  </div>
</template>
<script>
import { Uploader, Field, Panel, Row, Col, Divider, Tag } from "vant";
export default {
  components: {
    [Uploader.name]: Uploader,
    [Field.name]: Field,
    [Panel.name]: Panel,
    [Row.name]: Row,
    [Col.name]: Col,
    [Divider.name]: Divider,
    [Tag.name]: Tag
  },
  data() {
    return {
      fileList: [],
      content: "",
      active: "0",
      tags: [
        { label: "段子", value: "0", color: "#Aa96da" },
        { label: "美图", value: "1", color: "#62d2a2" },
        { label: "随笔", value: "2", color: "#3f72af" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.van-divider::before {
  display: none;
}
</style>
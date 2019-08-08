<template>
  <div>
    <div class="margin-bottom-12 diss-title-box">
      <embed
        src="/static/images/diss.svg"
        width="32"
        height="32"
        type="image/svg+xml"
        style="float:left"
      />
      <span style="float:left">
        <b>{{dissCount}}</b>&nbsp;条评论
      </span>
    </div>
    <div class="margin-bottom-12 diss-input-box">
      <textarea rows="3" v-model="diss" maxlength="120"></textarea>
      <a class="btn default">发表评论</a>
      <span>{{dissLen}}/120</span>
    </div>
    <div class="margin-bottom-12 diss-list-box"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dissCount: 3,
      diss: ""
    };
  },
  computed: {
    dissLen: function() {
      return this.diss.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.margin-bottom-12{
  margin-bottom: 12px;
}
.diss-title-box {
  width: 100%;
  height: 32px;
  line-height: 32px;
  span {
    font-size: 12px;
    color: #5f5f5f;
  }
}
.diss-input-box {
  position: relative;
  textarea,
  a {
    height: 40px;
    display: inline-block;
    vertical-align: top;
  }
  textarea {
    width: 82%;
    padding: 2px;
    box-sizing: border-box;
    outline: none;
  }
  textarea:focus {
    border: 1px solid rgb(149, 213, 238);
  }
  a {
    margin-left: 2%;
    padding: 4px 2px 0;
    box-sizing: border-box;
    width: 12%;
    font-size: 12px;
    text-align: center;
  }
  span {
    position: absolute;
    right: 19%;
    font-size: 12px;
    color: rgb(149, 213, 238);
    z-index: 999;
    bottom: 2px;
  }
  a:active {
    transform: translateY(1px);
  }
}
</style>

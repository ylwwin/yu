<template>
  <div class="diss-input-box">
    <span @click="goBack" class="link">返回</span>
    <textarea rows="3" v-model="diss" maxlength="120"></textarea>
    <div class="btn default" @click="onSubmit">
      <b>发&nbsp;布</b>
      <span>{{dissLen}}/{{wordLimit}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      diss: "",
      wordLimit: 120
    };
  },
  computed: {
    dissLen: function() {
      return this.diss.length;
    }
  },
  methods: {
    goBack() {
      console.log(1);
      this.$router.go(-1);
    },
    onSubmit() {
      alert(1);
    }
  }
};
</script>
<style lang="scss" scoped>
.diss-input-box {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background: rgb(249, 250, 250);
  border-top: 1px solid rgb(240, 240, 240);
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.02);
  padding: 4px;
  z-index: 999;
  span.link,
  textarea,
  div {
    height: 40px;
    display: inline-block;
    vertical-align: top;
  }
  span.link {
    width: 50px;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    text-align: center;
  }
  textarea {
    width: calc(100% - 120px);
    padding: 2px;
    box-sizing: border-box;
    outline: none;
    border: 1px solid #e5e5e5;
  }
  textarea:focus {
    border: 1px solid #95d5ee;
  }
  div {
    width: 50px;
    font-size: 12px;
    text-align: center;
    b {
      font-weight: normal;
      line-height: 28px;
    }
    span {
      display: block;
      width: 100%;
      transform: scale(0.72);
      line-height: 4px;
    }
  }
  div:active,
  span:active {
    transform: translateY(1px);
  }
}
</style>
<template>
  <div class="diss-input-box">
    <span @click="goBack" class="link">返回</span>
    <div class="btn default" @click="onSubmit">发&nbsp;布</div>
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
  div {
    height: 40px;
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
  }
  span.link {
    width: 50px;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    text-align: center;
  }
  div {
    width: calc(100% - 64px);
    font-size: 12px;
    text-align: center;
    line-height: 40px;
  }
  div:active,
  span:active {
    transform: translateY(1px);
  }
}
</style>
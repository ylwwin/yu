<template>
  <div class="diss-root-box">
    <div class="diss-title-box">
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
    <div class="diss-input-box">
      <a @click="goBack" href="javascript:void(0)">
        <embed src="/static/images/return.svg" width="50" height="40" type="image/svg+xml" />
      </a>
      <textarea rows="3" v-model="diss" maxlength="120"></textarea>
      <a class="btn default">
        <b>发&nbsp;布</b>
        <span>{{dissLen}}/{{wordLimit}}</span>
      </a>
    </div>
    <div class="diss-list-box">
      <ul>
        <li v-for="i of 10" :key="i">
          <b>user:</b>
          <span>吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dissCount: 10,
      diss: "",
      wordLimit: 120
    };
  },
  computed: {
    dissLen: function() {
      return this.diss.length;
    }
  },
  methods:{
    goBack(){
      alert(1);
      this.$router.replace("/funs");
    }
  }
};
</script>

<style lang="scss" scoped>
.margin-bottom-12 {
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
.diss-list-box {
  margin-bottom: 80px;
  font-size: 12px;
}
.diss-input-box {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background: rgb(249, 250, 250);
  border-top: 1px solid rgb(240, 240, 240);
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.02);
  padding: 4px;
  textarea,
  a {
    height: 32px;
    display: inline-block;
    vertical-align: top;
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
  a {
    width: 50px;
    font-size: 12px;
    text-align: center;
  }
  b {
    font-weight: normal;
    line-height: 22px;
  }
  span {
    display: block;
    width: 100%;
    height: 16px;
    transform: scale(0.72);
    line-height: 0;
  }
  a:active {
    transform: translateY(1px);
  }
}
</style>

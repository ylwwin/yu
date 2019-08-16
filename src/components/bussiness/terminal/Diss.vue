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
      <textarea rows="3" v-model="diss" maxlength="120"></textarea>
      <a class="btn default">发表评论</a>
      <p>{{dissLen}}/120</p>
    </div>
    <div class="diss-list-box">
      <ul>
        <li>
          <b>user:</b>
          <span>吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼</span>
        </li>
        <li>
          <b>user:</b>
          <span>吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼</span>
        </li>
        <li>
          <b>user:</b>
          <span>吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼</span>
        </li>
        <li>
          <b>user:</b>
          <span>吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼</span>
        </li>
        <li>
          <b>user:</b>
          <span>吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼</span>
        </li>
        <li>
          <b>user:</b>
          <span>吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼</span>
        </li>
        <li>
          <b>user:</b>
          <span>吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼</span>
        </li>
        <li>
          <b>user:</b>
          <span>吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼</span>
        </li>
        <li>
          <b>user:</b>
          <span>吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼</span>
        </li>
        <li>
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
}
.diss-input-box {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background: rgb(249, 250, 250);
  border-top: 1px solid rgb(240, 240, 240);
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.02);
  padding: 8px;
  textarea,
  a {
    height: 40px;
    display: inline-block;
    vertical-align: top;
  }
  textarea {
    width: 80%;
    padding: 2px;
    box-sizing: border-box;
    outline: none;
  }
  textarea:focus {
    border: 1px solid rgb(149, 213, 238);
  }
  a {
    margin-left: 2%;
    padding: 4px 8px 0;
    box-sizing: border-box;
    width: 12%;
    font-size: 12px;
    text-align: center;
  }
  p {
    font-size: 12px;
    color: rgb(151, 182, 194);
  }
  a:active {
    transform: translateY(1px);
  }
}
</style>

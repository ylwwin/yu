<template>
  <div class="bottom-root-box">
    <div class="bottom-content">
      <b>鱼乐了 yll.fun</b>
      <router-link to="#1">关于我们</router-link>
      <router-link to="#2">联系我们</router-link>
      <router-link to="#3">用户协议</router-link>
      <router-link to="#4">免责声明</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bottom-root-box {
  background: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 240px;
  margin-top: 20px;
  .bottom-content {
    width: 1000px;
    margin: 0 auto;
    text-align: center;
    font-size: 14px;
    line-height: 42px;
    b,
    a {
      font-weight: normal;
      color: #999;
    }
  }
}
</style>


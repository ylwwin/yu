<template>
  <ul>
    <li>
      <router-link to="#" class="active">美图</router-link>
    </li>
    <li>
      <router-link to="#">段子</router-link>
    </li>
    <li>
      <router-link to="#">视频</router-link>
    </li>
    <li>
      <router-link to="#">随笔</router-link>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
ul {
  list-style-type: none;
  li {
    width: 48px;
    height: 42px;
    margin-top: 8px;
    background: #fff;
    text-align: center;
    line-height: 42px;
    a {
      display: block;
      width: 100%;
      height: 100%;
      font-size: 14px;
      color: #3f3f3f;
      border-radius: 2px;
      position: relative;
    }
    a.active {
      background: #fe6464;
      color: #fff;
    }
    a.active::before {
      position: absolute;
      content: "";
      width: 10px;
      height: 10px;
      background: #fe6464;
      border-radius: 2px;
      transform: rotate(45deg);
      z-index: 2;
      left: 42px;
      top: 16px;
    }
    a.active:hover,
    a.active:hover::after {
      background: #f55;
    }
  }
}
</style>

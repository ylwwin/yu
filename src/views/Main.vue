<template>
  <div class="main-root">
    <div class="left-main">
      <today></today>
      <filters></filters>
      <i class="icon-xingqiu"></i>
      <div class="content">
        <fun v-for="item in funs" :key="item.id"></fun>
      </div>
    </div>
    <div class="right-main">
      <weather></weather>
      <ranking></ranking>
    </div>
    <div class="clear-both"></div>
  </div>
</template>
<script>
import today from "@/components/bussiness/Today";
import filters from "@/components/bussiness/Filters";
import ranking from "@/components/bussiness/ranking";
import weather from "@/components/bussiness/weather";
import fun from "@/components/bussiness/Fun";
export default {
  components: { today, filters, ranking, weather, fun },
  data() {
    return {
      funs: [{ id: 1 }, { id: 2 }]
    };
  }
};
</script>

<style lang="scss" scoped>
.main-root {
  padding: 20px 0;
  width: 100%;
  .left-main,
  .right-main {
    float: left;
  }
  .left-main {
    width: calc(100% - 310px);
    .icon-xingqiu {
      float: right;
      margin-right: 20px;
      line-height: 50px;
      font-size: 28px;
      transition: all .48s ease-in-out;
      cursor: pointer;
    }
    .icon-xingqiu:hover {
      color: #f38181;
      transform: rotate(360deg);
    }
  }
  .right-main {
    width: 300px;
    margin-left: 10px;
  }
}
</style>


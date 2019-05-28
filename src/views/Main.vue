<template>
  <div class="main-root">
    <div class="left-main">
      <today></today>
      <filters></filters>
    </div>
    <div class="right-main">right</div>
  </div>
</template>
<script>
import today from "@/components/bussiness/Today";
import filters from "@/components/bussiness/Filters";
export default {
  components: { today, filters }
};
</script>

<style lang="scss" scoped>
.main-root {
  padding: 20px 0;
  .left-main,
  .right-main {
    display: inline-block;
  }
  .left-main {
    width: 68%;
  }
  .right-main {
    width: 30%;
    margin-left: 1%;
  }
}
</style>


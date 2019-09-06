<template>
  <div>
    <fun :content="fun" />
    <diss />
  </div>
</template>
<script>
import fun from "@/components/bussiness/terminal/Content";
import diss from "@/components/bussiness/terminal/Diss";
export default {
  components: { fun, diss },
  data() {
    return {
      fun: {
        title: "单身狗靠狗脱单",
        date: "2019-06-11 09:30",
        author: "ylwwin",
        imgUrl: "static/images/fun1.gif",
        diss: 10,
        zan: 20
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.main-view-box {
  width: 100%;
  box-sizing: border-box;
  .content-box,
  .diss-box {
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.08);
    padding: 8px;
    margin: 8px 0;
    background: #fff;
  }
  .diss-box {
    min-height: 120px;
  }
}
</style>

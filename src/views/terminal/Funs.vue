<template>
  <div class="main-view-box">
    <ul>
      <li v-for="item in list" :key="item.title">
        <fun :content="item"></fun>
      </li>
    </ul>
  </div>
</template>
<script>
import fun from "@/components/bussiness/terminal/Content";
export default {
  components: { fun },
  data() {
    return {
      list: [
        {
          title: "单身狗靠狗脱单",
          date: "2019-06-11 09:30",
          author: "ylwwin",
          imgUrl: "static/images/fun1.gif",
          diss: 10,
          zan: 20
        },
        {
          title: "单身狗靠狗脱单2",
          date: "2019-06-11 09:30",
          author: "ylwwin",
          imgUrl: "static/images/fun1.gif",
          diss: 10,
          zan: 20
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.main-view-box {
  width: 100%;
  padding-bottom: 40px;
  ul {
    width: 100%;
    li {
      background: #fff;
      width: calc(100% - 24px);
      margin: 12px;
      padding: 12px;
      border-radius: 2px;
      box-sizing: border-box;
      box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.08);
    }
  }
}
</style>

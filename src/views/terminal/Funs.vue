<template>
  <div class="main-view-box">
    <ul>
      <li v-for="fun in funs" :key="fun.id">
        <fun :content="fun"></fun>
      </li>
    </ul>
  </div>
</template>
<script>
import fun from "@/components/bussiness/terminal/Summary";
export default {
  components: { fun },
  data() {
    return {
      funs: [
        {
          id: 1,
          title: "单身狗靠狗脱单",
          date: "2019-06-11 09:30",
          author: "ylwwin",
          imgUrl: "/static/images/fun1.gif",
          diss: 10,
          zan: 20
        },
        {
          id: 2,
          title: "单身狗靠狗脱单2",
          date: "2019-06-11 09:30",
          author: "ylwwin",
          imgUrl: "/static/images/fun1.gif",
          diss: 10,
          zan: 20
        },
        {
          id: 3,
          title: "单身狗靠狗脱单2",
          date: "2019-06-11 09:30",
          author: "ylwwin",
          imgUrl: "/static/images/fun1.gif",
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
      width: 100%;
      margin-bottom: 8px;
      padding: 8px;
      border-radius: 2px;
      box-sizing: border-box;
      box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.08);
    }
  }
}
</style>

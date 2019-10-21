<template>
  <van-pull-refresh v-model="isLoading" @refresh="query">
    <fun :content="fun" v-for="fun in funs" :key="fun.id"></fun>
  </van-pull-refresh>
</template>
<script>
import fun from "@/components/bussiness/terminal/Summary";
import { Toast, PullRefresh } from "vant";
export default {
  components: { fun, [PullRefresh.name]: PullRefresh },
  data() {
    return {
      category: "",
      isLoading: false,
      funs: [],
      data: [
        {
          id: 1,
          title: "单身狗靠狗脱单",
          date: "2019-06-11 09:30",
          author: "ylwwin",
          imgs: [
            "/static/images/apple-1.jpg",
            "/static/images/fun1.gif",
            "/static/images/apple-2.jpg",
            "/static/images/apple-3.jpg",
            "/static/images/apple-3.jpg"
          ],
          diss: 10,
          zan: 20
        },
        {
          id: 2,
          title: "单身狗靠狗脱单2",
          date: "2019-09-20 09:30",
          author: "ylwwin",
          imgs: ["/static/images/fun1.gif"],
          diss: 10,
          zan: 20
        },
        {
          id: 3,
          title: "单身狗靠狗脱单2",
          date: "2019-09-24 09:30",
          author: "ylwwin",
          imgs: ["/static/images/apple-2.jpg", "/static/images/fun1.gif"],
          diss: 10,
          zan: 20
        },
        {
          id: 4,
          title: "单身狗靠狗脱单2",
          date: "2019-09-24 10:55",
          author: "ylwwin",
          imgs: ["/static/images/apple-2.jpg", "/static/images/fun1.gif"],
          diss: 10,
          zan: 20
        }
      ]
    };
  },
  methods: {
    query() {
      this.funs = [];
      const toast = Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        loadingType: "spinner",
        message: "加载中"
      });

      let second = 1;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = `倒计时 ${second} 秒`;
        } else {
          clearInterval(timer);
          Toast.clear();
          this.isLoading = false;
          this.funs = this.data.map(fun => {
            fun.date = this.transDate(fun.date);
            return fun;
          });
        }
      }, 500);
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },
    transDate(dateStr) {
      let funDate = new Date(dateStr),
        x = new Date().getTime() - funDate.getTime(),
        result;
      if (x < 10 * 60 * 1000) return "刚刚";
      else if (x < 60 * 60 * 1000) return "1小时内";
      else if (x < 24 * 60 * 60 * 1000) return "1天内";
      else if (x < 30 * 24 * 60 * 60 * 1000) return "1月内";
      else return "很久以前";
    }
  },
  mounted() {
    this.query();
  },
  watch: {
    $route: function(to) {
      this.category = to.params.category;
      this.query();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

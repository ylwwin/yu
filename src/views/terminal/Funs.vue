<template>
  <div>
    <fun :content="fun" v-for="fun in funs" :key="fun.id"></fun>
  </div>
</template>
<script>
import fun from "@/components/bussiness/terminal/Summary";
import { Panel } from "vant";
export default {
  components: { fun, [Panel.name]: Panel },
  data() {
    return {
      category: "",
      funs: []
    };
  },
  methods: {
    query() {
      this.funs = [
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
      ];
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

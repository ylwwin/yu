<template>
  <div>
    <fun :content="queryContent(this.$route.query.id)" />
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
      funs: [
        {
          id: 1,
          title: "单身狗靠狗脱单",
          date: "2019-06-11 09:30",
          author: "ylwwin",
          imgs: [
            "/static/images/apple-1.jpg",
            "/static/images/fun1.gif",
            "/static/images/apple-2.jpg",
            "/static/images/apple-3.jpg"
          ],
          diss: 10,
          zan: 20
        },
        {
          id: 2,
          title: "单身狗靠狗脱单2",
          date: "2019-06-11 09:30",
          author: "ylwwin",
          imgs: ["/static/images/fun1.gif"],
          diss: 10,
          zan: 20
        },
        {
          id: 3,
          title: "单身狗靠狗脱单2",
          date: "2019-06-11 09:30",
          author: "ylwwin",
          imgs: ["/static/images/apple-2.jpg", "/static/images/fun1.gif"],
          diss: 10,
          zan: 20
        }
      ]
    };
  },
  methods: {
    queryContent(id) {
      return this.funs.find(fun => id === fun.id);
    }
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

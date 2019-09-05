<template>
  <div class="diss-root-box">
    <div class="diss-title-box">
      <y-icon src="/static/images/diss.svg" style="float:left" />
      <span style="float:left">
        <b>{{dissCount}}</b>&nbsp;条评论
      </span>
    </div>
    <div class="diss-list-box">
      <ul>
        <li v-for="item of disList" :key="item.id">
          <section class="single-diss">
            <div class="title">
              <img :src="item.avatar" />
              <b>{{item.name}}</b>
              <span>
                <y-icon src="/static/images/praise.svg" />
                <i>{{item.count}}</i>
              </span>
            </div>
            <div class="content">{{item.content}}</div>
          </section>
        </li>
      </ul>
    </div>
    <div class="diss-input-box">
      <!-- <y-icon src="/static/images/return.svg" :width="50" :height="40" v-on:y-click="goBack" /> -->
      <span @click="goBack" class="link">返回</span>
      <textarea rows="3" v-model="diss" maxlength="120"></textarea>
      <div class="btn default" @click="onSubmit">
        <b>发&nbsp;布</b>
        <span>{{dissLen}}/{{wordLimit}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dissCount: 10,
      diss: "",
      wordLimit: 120,
      disList: [
        {
          id: "7",
          count: 12,
          name: "ylwwin",
          content: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          avatar: "/static/images/avatar.jpg"
        },
        {
          id: "1",
          count: 12,
          name: "ylwwin",
          content: "哈哈哈哈哈哈哈哈",
          avatar: "/static/images/avatar.jpg"
        },
        {
          id: "2",
          count: 12,
          name: "ylwwin",
          content: "呵呵哈哈哈红火火恍恍惚惚哈哈哈",
          avatar: "/static/images/avatar.jpg"
        },
        {
          id: "3",
          count: 12,
          name: "ylwwin",
          content: "哈哈哈哈哈哈哈哈哈",
          avatar: "/static/images/avatar.jpg"
        },
        {
          id: "4",
          count: 12,
          name: "ylwwin",
          content:
            "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          avatar: "/static/images/avatar.jpg"
        },
        {
          id: "5",
          count: 12,
          name: "ylwwin",
          content: "哈哈哈哈哈哈哈哈哈",
          avatar: "/static/images/avatar.jpg"
        },
        {
          id: "6",
          count: 12,
          name: "ylwwin",
          content: "红红火火恍恍惚惚哈哈哈",
          avatar: "/static/images/avatar.jpg"
        }
      ]
    };
  },
  computed: {
    dissLen: function() {
      return this.diss.length;
    }
  },
  methods: {
    goBack() {
      console.log(1);
      this.$router.go(-1);
    },
    onSubmit() {
      alert(1);
    }
  }
};
</script>

<style lang="scss" scoped>
.margin-bottom-12 {
  margin-bottom: 12px;
}
.diss-title-box {
  width: 100%;
  height: 42px;
  line-height: 32px;
  span {
    font-size: 12px;
    color: #5f5f5f;
  }
}
.diss-list-box {
  margin-bottom: 80px;
  font-size: 12px;
  section.single-diss {
    position: relative;
    div.title {
      img,
      b,
      span {
        vertical-align: middle;
      }
      img {
        width: 24px;
        height: 24px;
        border-radius: 100%;
        background: #f2f4f6;
      }
      b {
        color: #5f5f5f;
        margin-left: 4px;
      }
      span {
        position: absolute;
        right: 4px;
        top: -4px;
        div,
        i {
          vertical-align: middle;
        }
        i {
          margin: 0 16px 0 -10px;
          font-style: normal;
          color: #666;
        }
      }
    }
    div.content {
      margin: 0 12px 12px 24px;
      padding: 4px;
      line-height: 20px;
    }
  }
}
.diss-input-box {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background: rgb(249, 250, 250);
  border-top: 1px solid rgb(240, 240, 240);
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.02);
  padding: 4px;
  z-index: 999;
  span.link,
  textarea,
  div {
    height: 32px;
    display: inline-block;
    vertical-align: top;
  }
  span.link {
    width: 50px;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    text-align: center;
  }
  textarea {
    width: calc(100% - 120px);
    padding: 2px;
    box-sizing: border-box;
    outline: none;
    border: 1px solid #e5e5e5;
  }
  textarea:focus {
    border: 1px solid #95d5ee;
  }
  div {
    width: 50px;
    font-size: 12px;
    text-align: center;
    b {
      font-weight: normal;
      line-height: 20px;
    }
    span {
      display: block;
      width: 100%;
      transform: scale(0.72);
      line-height: 4px;
    }
  }
  div:active,
  span:active {
    transform: translateY(1px);
  }
}
</style>

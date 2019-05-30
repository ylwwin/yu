<template>
  <div class="component-root">
    <div class="tips">
      <span
        v-for="item in types"
        :key="item.key"
        :class="{'active': active == item.key}"
        @click="active = item.key"
      >{{item.label}}</span>
    </div>
    <div class="list">
      <ul>
        <li v-for="item in list" :key="item.id">
          <i v-if="item.id == 1" style="background: #f38181">{{item.id}}</i>
          <i v-else-if="item.id == 2" style="background: orange">{{item.id}}</i>
          <i v-else-if="item.id == 3" style="background: #1fab89">{{item.id}}</i>
          <i v-else>{{item.id}}</i>
          <span :title="item.title">{{item.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "today",
      types: [
        { label: "今日最热", key: "today" },
        { label: "本周最热", key: "week" },
        { label: "全站最热", key: "all" }
      ],
      list: [
        {
          id: 1,
          title:
            "东北天冷没洗澡被南方男朋友分手东北天冷没洗澡被南方男朋友分手【多图】"
        },
        {
          id: 2,
          title: "日本一个女孩分享了一个用自己经血制作的血色煎蛋【多图】"
        },
        { id: 3, title: "美国人物杂志评选了中国十大演技最烂演员【多图】" },
        { id: 4, title: "天理难容 天理难容" },
        { id: 5, title: "医院真的是暴露人类上限和下限的剧场 ​​​​" },
        { id: 6, title: "冬天想在这样的屋子里瘫一整天！" },
        { id: 7, title: "周润发首谈捐50亿身家原因。" },
        { id: 8, title: "全班95%孩子不认识白蜡烛 老师傻眼!" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.component-root {
  position: relative;
  width: 100%;
  background: #fff;
  margin-top: 20px;
  .tips {
    width: 100%;
    height: 32px;
    border-bottom: 1px solid #e5e5e5;
    span {
      display: inline-block;
      width: 33%;
      line-height: 32px;
      text-align: center;
      font-size: 14px;
      cursor: pointer;
    }
    span.active {
      width: 34%;
      color: #f38181;
      border-bottom: 1px solid #f38181;
    }
  }
  .list {
    padding: 8px 12px;
    width: 100%;
    box-sizing: border-box;
    ul {
      width: 100%;
      list-style-type: none;
      li {
        width: 100%;
        margin-bottom: 8px;
        border-bottom: 1px solid #e5e5e5;
        line-height: 24px;
        i,
        span {
          display: inline-block;
        }
        i {
          width: 18px;
          height: 18px;
          margin-top: 3px;
          vertical-align: top;
          border-radius: 100%;
          background: #aaa;
          line-height: 18px;
          text-align: center;
          font-style: normal;
          font-size: 12px;
          color: #fff;
        }
        span {
          width: calc(100% - 24px);
          height: 24px;
          font-size: 14px;
          color: #3f3f3f;
          white-space: nowrap;
          overflow: hidden;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
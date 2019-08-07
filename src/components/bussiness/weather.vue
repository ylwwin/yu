<template>
  <div class="component-root">
    <remote-js src="http://pv.sohu.com/cityjson?ie=utf-8"></remote-js>
    <div class="left">
      <span>每日签到</span>
    </div>
    <div class="right">
      <!-- <span>{{weather.city}}</span> -->
      <h3>39°</h3>
      <!-- <em :title="weather.data[0].air_level">空气{{weather.data[0].air_level}}</em> -->
    </div>
    <div class="right">
      <i>{{ip}}</i>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    "remote-js": {
      render(createElement) {
        return createElement("script", {
          attrs: { type: "text/javascript", src: this.src }
        });
      },
      props: {
        src: { type: String, required: true }
      }
    }
  },
  data() {
    return {
      ip: "",
      weather: {}
    };
  },
  mounted() {

  }
};
</script>

<style lang="scss" scoped>
.component-root {
  position: relative;
  width: 100%;
  height: 160px;
  background: #fff;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 2px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.02);
  .left,
  .right {
    float: left;
    text-align: center;

    h3 {
      font-size: 18px;
      color: #777;
    }
  }
  .left {
    padding-right: 12px;
    span {
      display: block;
      width: 42px;
      height: 42px;
      background: #fe6464;
      border-radius: 2px;
      padding: 8px;
      color: #fff;
    }
  }
  .right {
    padding-left: 12px;
  }
}
</style>
<template>
  <div class="y-icon" @click="yClick">
    <embed :src="src" :width="width" :height="height" type="image/svg+xml" />
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 32
    },
    height: {
      type: Number,
      default: 32
    },
    yClick: {
      type: Function,
      required: false,
      default: function() {
        return function() {
          console.log(src);
        };
      }
    }
  }
};
</script>
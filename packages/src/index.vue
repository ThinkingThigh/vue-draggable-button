<template>
  <div id="pic" class="backIcon">
    <slot></slot>
    <slot name="list" v-bind:isTop="isTop"></slot>
  </div>
</template>
<style scoped type="text/css">
.backIcon {
  display: block;
  position: fixed;
  left: 80%;
  top: 80%;
  z-index: 9999;
  touch-action: none;
  width: 68px;
  height: 68px;
}

.backIcon img {
  width: 100%;
  height: 100%;
}
</style>
<script>
export default {
  name: "draggableButton",
  data() {
    return {
      isTop: true,
      position: { x: 0, y: 0 },
      nx: "",
      ny: "",
      dx: "",
      dy: "",
      xPum: "",
      yPum: "",
      x: "",
      y: "",
    };
  },
  created() {},
  mounted() {
    let moveDiv = document.querySelector("#pic");
    this.w = document.documentElement.clientWidth || document.body.clientWidth;
    this.h =
      document.documentElement.clientHeight || document.body.clientHeight;
    this.x = moveDiv.offsetWidth;
    this.y = moveDiv.offsetHeight;
    moveDiv.addEventListener("touchstart", this.down, { passive: false });
    moveDiv.addEventListener("touchmove", this.move, { passive: false });
  },
  methods: {
    // 实现移动端拖拽
    down() {
      let moveDiv = document.querySelector("#pic");
      var touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      this.position.x = touch.clientX;
      this.position.y = touch.clientY;
      this.dx = moveDiv.offsetLeft; //左偏移量
      this.dy = moveDiv.offsetTop; //上移量
    },
    move() {
      this.$emit("updateIsShowPop", false);
      let moveDiv = document.querySelector("#pic");
      var touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      // 阻止默认事件，防止body滑动
      event.preventDefault();
      this.nx = touch.clientX - this.position.x;
      this.ny = touch.clientY - this.position.y;
      this.xPum = this.dx + this.nx;
      this.yPum = this.dy + this.ny;
      // 边界判断
      this.xPum = this.xPum > 0 ? this.xPum : 0;
      this.yPum = this.yPum > 0 ? this.yPum : 0;
      this.xPum = this.xPum > this.w - this.x ? this.w - this.x : this.xPum;
      this.yPum = this.yPum > this.h - this.y ? this.h - this.y : this.yPum;

      moveDiv.style.left = this.xPum + "px";
      moveDiv.style.top = this.yPum + "px";
      this.isTop = this.yPum > window.innerHeight / 2;
    },
  },
};
</script>

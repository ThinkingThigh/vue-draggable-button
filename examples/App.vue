<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <draggable-button :isClick.sync="btnIsClick">
      <img alt="Vue logo" :draggable="false" @click="clickHandler" src="./assets/logo.png" />
      <div @click.stop="clickHandler">drag it ↑</div>
    </draggable-button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  data() {
    return {
      btnIsClick: false,
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    clickHandler() {
      if (this.btnIsClick) {
        alert("Hi!");
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

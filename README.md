# vue-draggable-button

A draggable button for Vue.


# Usage

## Install

```bash
npm i vue-draggable-button
```

## Example

You can use it like this 


main.js
```
import Vue from 'vue'
import App from './App.vue'
import draggableButton from 'vue-draggable-button';
Vue.config.productionTip = false

Vue.use(draggableButton);

new Vue({
  render: h => h(App),
}).$mount('#app')
```
App.vue

```
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <draggable-button>
      <img alt="Vue logo" @click="clickHandler" src="./assets/logo.png">
      <div @click="clickHandler">drag it ↑</div>
    </draggable-button>
  </div>
</template>
```



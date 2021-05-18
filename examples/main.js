import Vue from 'vue'
import App from './App.vue'
import draggableButton from '../packages/index';
Vue.config.productionTip = false

Vue.use(draggableButton);

new Vue({
  render: h => h(App),
}).$mount('#app')

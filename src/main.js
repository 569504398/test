
// 将vue,App,route,store目录全部引入
// <!-- App组件父组件的集合体,父组件在引入子组件 -->
//main在引入APP就能包含所有组件
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  {request}  from "network/request"

Vue.config.productionTip = false
//  添加一个公共的原型方法
Vue.prototype.$bus=new Vue();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')





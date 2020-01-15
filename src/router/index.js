import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 懒加载,将打包的文件进行分离
const   Home =()=>import("views/home/index.vue");
const   Sort =()=>import("views/sort/index.vue");
const   Profile =()=>import("views/profile/index.vue");
const   Car =()=>import("views/car/index.vue");
const   Detail =()=>import("views/detail/Detail.vue");




// 路由对应子部分公共的上地址
const routes = [
   {
     path:"",
     redirect:"/home"
   },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/sort',
    component: Sort
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/car',
    component: Car
  },
  {
    path: '/detail/:id',
    component: Detail
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router

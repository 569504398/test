

<template>
  <div id="app">
            <!-- 让detail组件被销毁,重新发送请求,将它除外,它会到路由找到对应的组件,再去找组件名与这个exclude名字对应  -->
           <keep-alive  exclude="Detail">
                   <router-view/>        
           </keep-alive>
            
         <main-tabbar></main-tabbar>                 
  </div>
  
</template>
<script>
import   mainTabbar  from  "components/content/main/MainTabbar.vue"

export default {
        
        components:{
                mainTabbar,

        }
}
</script>
<style>
    @import "./assets/css/base.css";
</style>

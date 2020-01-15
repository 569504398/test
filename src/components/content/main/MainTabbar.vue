      
      <template>
         
                        <tabbar>
                                          <tabbar-item path="/home"  activeColor="blue"> 
                                            <!-- 用来被替换  slot里面的name属性 ,没有name属性就是不存在-->
                                          <img  slot="tabbar-icon"  src="~assets/img/logo.png" alt="">
                                         <img   slot="tabbar-icon-1" src="~assets/img/tabbar1.jpg" alt="">
                                            <span slot="tabbar-text"> 首页  </span>           
                                          </tabbar-item>             
                         
                                          <tabbar-item path="/car"  activeColor="blue"> 
                                          <!-- <router-link to="/car"> -->
                                      <img  slot="tabbar-icon" src="~assets/img/logo.png" alt="">
                                      <img  slot="tabbar-icon-1"  src="~assets/img/tabbar2.jpg" alt="">
                                        <span slot="tabbar-text"  >购物车</span>         
                                           <!-- </router-link>    -->
                                           </tabbar-item> 
          
                                        <tabbar-item path="/sort"    activeColor="blue"> 
                                       <!-- <router-link to="/sort"> -->
                                              <img  slot="tabbar-icon"  src="~assets/img/logo.png" alt="">
                                           <img slot="tabbar-icon-1"  src="~assets/img/tabbar3.jpg" alt="">
                                            <span slot="tabbar-text" >分类</span> 
                                       <!-- </router-link > -->
                                       </tabbar-item> 

                                        <tabbar-item path="/profile"  activeColor="blue"> 
                                           <!-- <router-link to="/profile"> -->
                                        <img slot="tabbar-icon"  src="~assets/img/logo.png" alt="">
                                        <img slot="tabbar-icon-1"  src="~assets/img/tabbar4.jpg" alt="">
                                          <span  slot="tabbar-text" >我的</span>
                                            <!-- </router-link>         -->
                                         </tabbar-item> 
                        
                          </tabbar>
                  
    </template>
    <script>
                import tabbar from "components/common/tabbar/Tabbar";
                import tabbarItem  from "components/common/tabbar/TabbarItem";       
                export  default {
                      components:{
                            tabbar,
                            tabbarItem
                      }
                }
    </script>
    <style scoped>
    
    </style>

  
<template>
        <div class="swiper">
                      <swiper :options="swiperOption" v-if="images.length>0"  >    
                        <!-- 用插槽来站位 将<swiper-slide>组件拿到对应组件里面来添加内容,将公共的部分提取出来,不公共的用slot来站位, -->
                    <slot></slot>
                    <div class="swiper-pagination"  slot="pagination"></div>        
                    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>  -->
                    <div class="swiper-scrollbar"   slot="scrollbar"></div> 
                     </swiper>
                
        </div>
</template>
<script>
// 将安装的插件swiper单独进行封装,因为它是完全独立
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
export default {
           props:{     
         images:{
                        type:Array,
                                default(){
                                return  []
                                }
                        },
                },
        data(){
                return {
                        // https://swiperjs.com/api/来设置参数   
                         swiperOption:{
                                 //显示圆点
                                 pagination: {
                                        el: '.swiper-pagination'
                                        },
                                //可以让图片循环拉动
                                loop : true,
                                  //用于控制图片自动切换的时间
                                  autoplay:{
                                        delay:4000
                                  },
                                //   图片移动速度
                                  speed:400
                         }
                               
                }
        }
}
</script>
<style scoped>
      
</style>
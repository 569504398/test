<template>
              <swiper  :images="pics">
                             <swiper-slide  v-for="val  in pics" >
                                         <img  :src="val" alt="" @load="imgLoad">
                              </swiper-slide>        
              </swiper>
</template>
<script>
import   swiper   from    "components/common/swiper/Swiper"
export default {
    
   props:{     
         pics:{
             type:Array,
                default(){
                     return  []
                }
         },
   },
    components:{
            swiper,
    },
    methods:{
              imgLoad(){
                      this.$emit("swiperLoad")              
              }
    }
    
}
</script>
<style  scoped>
              img{
                  width: 100%;
                  height: 50vw;
        }
        /* 当前组件是获取不到子类组件的类名的只能通过>>>来获取 设置圆点颜色*/
       .swiper >>>.swiper-pagination-bullet-active {
                 background: #000;
        }

/* >>>能让该组件操作其它组件的类 */
</style>
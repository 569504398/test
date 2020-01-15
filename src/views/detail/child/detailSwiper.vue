<template>
              <swiper class="swiper"  :images="swiperImages">
                             <swiper-slide  v-for="val  in swiperImages">
                                         <img  :src="val.img" alt="">
                              </swiper-slide>        
              </swiper>
</template>
<script>
import   swiper   from    "components/common/swiper/Swiper"
export default {
        
   props:{     
         swiperImages:{
             type:Array,
                default(){
                     return  []
                }
         },
         
   },
    components:{
            swiper,
    },
    
    
}
</script>
<style  scoped>
              img{
               width: 100%;
                 height: 80vw;
           
        }
      
</style>
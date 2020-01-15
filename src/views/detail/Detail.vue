<template>
        <div class="detail"> 
                 <detail-navbar  class="navbar" />
                 <scroll class="content">
                        <detail-swiper   :swiperImages="topImages" />
                        <detail-base-info :baseInfo="baseInfo"></detail-base-info>
                          <detail-param-info></detail-param-info>
                 </scroll>
          </div>      
</template>
<script>
import  detailNavbar from "./child/detailNavbar";
import  detailSwiper from "./child/detailSwiper";
import  detailBaseInfo  from "./child/DetailBaseInfo";
import  detailParamInfo  from "./child/DetailParamInfo";

import scroll   from "components/common/scroll/Scroll.vue";




import  {requestDetail} from "network/home.js";

export default {
       name:"Detail",
        data(){
                return {
                     id:null,
                     goodsItem:{},
                     topImages:[],
                    baseInfo:{}
                }
        },
        components:{
              detailNavbar,
                detailSwiper,
              detailBaseInfo,
              scroll,
              detailParamInfo,
        },
        created(){
                 this.id=this.$route.params.id
                  this.requestDetail();
          
                 
        },
        methods:{
                   requestDetail(){
                           requestDetail(this.id).then(res=>{    
                                    this.topImages=res.topImgs;
                                     this.baseInfo=res.goods_detail[0]
                                      
                                    
                           })
                              
                   },
           
                
        }
}
</script>
<style scoped>
        img{
                width: 100%;
                height: 80vw;
        }
 .detail{
           position: relative;
           z-index: 10;
           background: white;
           /* 屏幕高度 */
            height: 100vh;
 } 
 .content{
           /* 让滚轮不能滚动 */
            overflow: hidden;
           /* 明确高度才能知道滚动距离 */
            height: calc(100% - 44px);
 }
    

</style>
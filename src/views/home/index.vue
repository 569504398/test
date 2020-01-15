<template>           
            <div id="home">
                    <navbar>
                    <div slot="center">购物街{{time| change }}</div>
                   </navbar>
                    <tab-controller  class="tabtop"   v-show="isshowTabcontroller"   :title="title"  @tabcontroller="tabcontroller"  ref="tabController2"/>
                   <scroll class="scroll" ref="scroll"   :probe-type="3"  :pullUpLoad="true"   @backStatus ="backStatus" @pullingUp="loadMore" >
                        <swiper :pics="banner"  id="back" @swiperLoad="swiperLoad"></swiper>
                        <recomond-view :recomond="recomond"></recomond-view>
                        <tab-controller   :title="title"  @tabcontroller="tabcontroller"  ref="tabController"/>
                        <goods-list   :goodslist="goods[currentType].list" /> 
                   </scroll>
                      <back-top  @click.native="back" v-show="backtopStatus" ></back-top>      
            </div>   
</template>
<script>
import navbar  from "components/common/navbar/NavBar";
import scroll   from "components/common/scroll/Scroll.vue";
import {debounce,formatDate}   from "common/utility.js";


import tabController  from "components/content/tabController/TabController";
import goodsList  from "components/content/goods/GoodsList";
import backTop  from "components/content/backTop/BackTop";


import  {requestHome} from  "network/home.js"


import   swiper  from   "./childview/swiper"
import   recomondView  from   "./childview/RecomondView"
import   showView   from   "./childview/showView"


export default {
       name: 'carrousel',
    
 data(){
           return {
         time:0,
          isshowTabcontroller:false,
           backtopStatus:false,
            banner:[ ],
           recomond:[],
           title:[ ],
            goods:{
                   pop:{page:1 , list:[]},
                   new:{page:1,list:[ ] },
                   sell:{page:1,list:[ ]}       
            },
            //记录当前tabcontroller的状态
           currentType:'pop',
            tabControllerTop:0,
            savaY:0,       
      }
 },
 //
filters:{
        change(timestamp){
                let date=new  Date(timestamp);
               let time=   formatDate(date,"yyyy-MM-d hh:mm:ss");
                return time;
               
                  
        }
},
components:{
            navbar,
            swiper,
            recomondView,
            tabController,
            showView,
            goodsList,
            scroll,
            backTop
     },
        //生命周期函数,当组件创建完成
 created(){
                 //函数执行完,里面的变量将会被销毁,在销毁之前将其给其它能保存的变量,这里是个异步请求,下面有函数代码执行的话,可能它们不是一步步的
                this.requestHome();    
                //获取当前时间戳
                  let  timestamp=new Date().getTime();//这个是按毫秒计算的
                  this.time=timestamp;
                  
        },
mounted(){
           
                  let  scroll=   this.$refs.scroll          
                             //  获取refrsh函数名,相当于一个匿名函数,不能直接将括号给,那是函数直接执行了再给这个变
                 const refresh= debounce(scroll.refresh,500)

                 //第一次加载页面时,是按没有加载图片的子元素高度来确定滚动范围的,现在监听图片加载,有几张图片就会调用refresh几次,通过一个
                //  防抖函数进行处理,超出那个时间后才会有下一次调用
                //     这个函数$on与$emit是对接,调用比较多
                    this.$bus.$on("imgLoad",()=>{     
                                //减少了scroll.refresh函数的调用
                          
                                refresh();
                })       
                // 获取组件对应 的元素,这里获取的高度是未加载图片的高度
                //   let ele=  this.$refs.tabController.$el;
                // console.log(ele.offsetTop);
             
},
//在进入组件时调用
activated(){
         let el= this.$refs.scroll.getScrollY()
          this.$refs.scroll.scrollTo(0,this.savaY,0)
          this.$refs.scroll.refresh();
},
//离开组件时调用
deactivated(){
         let   scrollY= this.$refs.scroll.getScrollY()
          this.savaY=scrollY
},
methods:{
           swiperLoad(){
                let ele=  this.$refs.tabController.$el;
                  this.tabControllerTop= ele.offsetTop;
            
           },
        
          
        // 网络请求相关的方法
                requestHome(){
                        requestHome(1).then(res=>{
                            
                               this.goods.pop.list=res .pop[0]                            
                                this.goods.new.list=res .new[0]                           
                                this.goods.sell.list=res .sell[0]          
                                 this.banner=res.data.banner                
                                 this.recomond=res.data.recomond                
                                 this.title=res.data.title                
                        })

                },  
             getHomeGoods(type){
                //     "pop"   字符串可以以数组形式,属性则不可以需要将字符串去掉用.pop
                      const page= this. goods[type].page+1
                      requestHome(page).then(res=>{    
                        this.goods[type].list.push(...res[type][0])
                         this.goods[type].page=page
                     })           
                  },

          
         tabcontroller(key){
                //   goods[currentIndex[index]].list
                switch(key){
                        case  0 :  this.currentType='pop' ; break
                        case   1 :  this.currentType='new' ; break
                        case   2 :  this.currentType='sell' ; break
                }     
                //让两个组件状态保持一致 , 有一个curentIndex属性记录不相同的状态  两个组件,在下面点击是下面的一个组件,上面点击是上面的一个组件
                this.$refs.tabController.curentIndex=key
                this.$refs.tabController2.curentIndex=key
                
         },
         back(){ 
                 this.$refs.scroll.scrollTo(0,0);  
         },

         //自定义滚轮事件
         backStatus(y){    
                // 通过比较来判断真假值反而比if-else要简单,相当于y>300 为true,否则为false
                // 回调图标是否显示     
               this.backtopStatus=(-y)>300
               //tabcontroller是否吸顶 ,display:"fixed"
                 this.isshowTabcontroller=(-y)>this.tabControllerTop
          
         },
         //自定义上拉加载事件
         loadMore(){
                 //上拉后将数据加到data中对应的数组里面,但是上拉的高度是按原来的高度来的,现在图片将高度称起来了
                this.getHomeGoods(this.currentType) 
                // setTimeout(() => {
                          this.$refs.scroll.finishPullUp();
                // }, 2000);   
                   this.$refs.scroll.refresh();
         },
      
}
 
 }
</script>
<style scoped>
/* 只能获取替换的组件,里面的插槽组件的类获取不到 */
  #home{
     /* 让整个页面添加一个内边距来占位导航的高度,这样脱离文档流的导航就能看到了/ */
       text-align: center;
        background: white;
         position: relative;
        /* 下面tab不在home里面,它是脱离标准流的,设置home为整个屏幕高度 */
         height: 100vh;
  }
.navbar{
         /* better-scroll的局部滚动不影响下面的滚动 */
       background: pink;
       color: aliceblue;
        /* position:fixed; 
        padding-bottom: 44px;
        z-index: 100; */
        
}
 
 /* tab控制条滑动时不会被导航条覆盖 */
.tabtop{
        /* 有粘性的,当滑动到指定高度就会粘在那里  */
        /* position:sticky;    */
        /* top:44px;  */
         /* 定位流中的relative不会脱离标准流会占位 */
         position: relative;
          z-index: 100;
          background:white;
          /* 添加背景盖住透明 */
     
        
}

/* 一.通过定位流进行拉伸 */
.scroll{
              overflow:hidden;
             position: absolute;
             top:44px;
             bottom:49px; 
             left: 0;
             right: 0;
}
/* 二.通过 */
/* .scroll{
        overflow:hidden;

         height: calc(100vh-93px);
         margin-top: 44px;
} */

</style>
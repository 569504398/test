<template>
                        <div  ref="aaa"  >
                                       <!-- 让该组件标签里面能放内容,  scroll组件标签里面只能有一个div父子元素, 并且还需要确定高度-->            
                                    <div>
                                             <slot></slot>
                                    </div>                            
                        </div>
</template>
<script>
import  Bscroll from  "better-scroll"
export default {

props:{
     probeType:{
           type:Number,
            default:0
     },
     pullUpLoad:{
           default:false
     }
},
data(){
    return {
            scroll:null
    }
},
methods:{
        //  监听滚动事件
            scrollTo(x,y,time=300){
                this.scroll.scrollTo(x,y,time)
            },
            //监听上拉加载事件
            finishPullUp(){
                    this.scroll.finishPullUp()
            },
            //重新计算滚动范围
           refresh(){
                 this.scroll.refresh()
           },
           //获取滚动的高度
           getScrollY(){
                  return   this.scroll.y
           }
},
        // 组件一创建完就交组件对象附给scroll
     mounted(){
                        // rhis.$refs.aaa获取当前标签元素    
             this.scroll=  new Bscroll(this.$refs.aaa,{
                                    click:true,
                                    //滚动监听
                                    probeType:this.probeType,
                                    // 开启上拉加载则probeType默认是为3的 
                                    pullUpLoad:this.pullUpLoad
                            })
                this.scroll.on("scroll",(positon)=>{          
                                this.$emit("backStatus",positon.y)
                            
                        // 第2种方法 
                            //   if(positon.y>-300){
                            //             this.$store.commit("backTopStatus","none")
                                          
                            //   }else{
                            //              this.$store.commit("backTopStatus","block")
                            //   }
                            //   
                    } )
                this.scroll.on("pullingUp",()=>{
                        this.$emit("pullingUp")
                           
                })
               
     }         
}
</script>
<style scoped>
          
</style>
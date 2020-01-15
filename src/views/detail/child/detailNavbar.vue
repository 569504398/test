<template>
                 <navbar>
                            <div slot="left" class="left" @click="backHome"><</div>
                            <div slot="center" class="center">
                                    <span v-for="(val,key)  in  goodstype " @click="option(key)"  :class="{color:key==currentIndex}">{{val}}</span>                 
                                    <!-- <span v-for="(val,key)  in  goodstype " @click="option(key)"  :stype="{color:selectColor==currentIndex}">{{val}}</span>                  -->
                          </div>  
                 </navbar>
</template>
<script>
import  navbar from "components/common/navbar/NavBar";
export default {
        data(){
                return {
                     goodstype:["商品","参数","评论","推荐"],
                     currentIndex:0
                }
        },
        components:{
              navbar,
        },
        methods:{
           option(key){
                   //原理 相当于给每个spanl加一个类, 分别是0==0,0==1,0==2,==3这个0用一个变量curenindex来代替,1234用key代替通过接收key值来改变currenindex值
                  this.currentIndex=key
           },
           backHome(){
                   this.$router.back()

           }
                
        }
}
</script>
<style scoped>
   .center{
            display: flex;
             text-align: center
   }
   .left{
            display: inline-block;
            width: 100%;
             font-size: 30px;
             text-align: center

   }
   .center>span{
             flex: 1
   }
   .color{
             color: red
   }
</style>
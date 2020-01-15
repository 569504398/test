<template>

             <div class="tabbar-item" @click="click">
                     <!--1. 插槽能让引入组件里面放内容,并可以让插槽内容来被替代      -->
                        <!--2.通过具名插槽 ,能控制插槽里面的具体内容  -->
                                    <!-- <slot name="tabbar"></slot> -->
                                   <div v-if="isAcitve">
                                        <slot name="tabbar-icon-1"></slot>  
                                   </div>
                                   <div v-else>
                                         <slot   name="tabbar-icon"></slot>            
                                   </div>         
                                   <div  :style="{color:deColor}" >
                                        <slot  name="tabbar-text"></slot>
                                   </div> 
                    <slot></slot>
             </div>
</template>
<script>
export default {
      //   获取组件添加的属性值
           props:{
               path:String,
               activeColor:{
                       type:String,
                       default:"red"
               }
           },
           computed:{
                  isAcitve(){
                              // console.log(this.$route.path.indexOf(this.path));
                              //v-if  =true 相当于把下面的代码 上面v-if后面      indexOf返回this.$route.path活跃路径这个字符串中指定的字符串首次出现的位置
                             return  this.$route.path.indexOf(this.path)!==-1
                                                                       
                  },
                  deColor(){
                         return this.isAcitve?this.activeColor:""
                  }
           },
            data(){
                  return {
                       
                  }
            },
      methods:{
             click(){
                        console.log(this.path);                
                        //  console.log(this.$props.path);            
                        this.$router.push(this.path)
             }
      }
}
</script>
<style scoped>
         
            .tabbar-item{
                  flex: 1;
                  height: 49px;
                 text-align: center;         
        }
          img{
                  width: 20px;
                  height: 20px;
            }
</style>
<template>
               
               <div class="tabbar">      
                                      
                              <slot></slot>
                     </div>
</template>
<script>
// import tabbarItem from   "./TabbarItem"
export default {
            components:{
                    //     tabbarItem,
            },
            data(){
                 return{
                         isacitve:true,
                         isRed:true
                 } 
            }    
        
}
</script>
<style scoped>
                /* 组件里面使用插槽,让父组件引入子组件里面能放内容 */
           .tabbar{
            /* 让其组件变成一个弹性盒子 ,flex:1弹性盒子的元素都有相同的长度*/
             display: flex;
             position:fixed;    
            background: #f6f6f6;
             width: 100%;
              left: 0;
              bottom: 0;
              box-shadow: 0px  -2px  1px rgba(100, 100, 100, 0.2);
        }
            .isRed{
                    color: red
            }
</style>
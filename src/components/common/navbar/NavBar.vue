<template>        
              <div class="navbar">          
                          <div class="navleft">
                                  <slot name="left"></slot>
                          </div>
                          <div class="navcenter">
                                  <slot name="center"></slot>
                          </div>
                          <div class="navright">
                                  <slot name="right"></slot>
                          </div>
                </div>                                                  
</template>
<script>

export default {
        
}
</script>
<style scoped>
                /* 组件里面使用插槽,让父组件引入子组件里面能放内容 */
           .navbar{
            display: flex;
            /* 不需要用定位默认就是在上面的,用了之后会脱离文档流相当于飘起来 */
             /* position:fixed; */
             height: 44px;
                /* 没有内容或高度line-heigtht不生效 */
             line-height:44px ;
             width: 100%;
             top: 0;
             left: 0;
        }
         .navleft{
                width: 60px;
                
         }
            .navcenter{
                  flex: 1;              
             
        }
        .navright{
                width: 60px;
             
          
        }
</style>
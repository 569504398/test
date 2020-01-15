<template>
                <div class="goods">
                                       <goods-list-item  v-for="(goodsitem,key)   in  goodslist"  :goodslistitem="goodsitem"   />         
                </div>
</template>
<script>
import  goodsListItem from  "./GoodsListItem"
export default {
      props:{
             goodslist:{
                    type:Array,
                    default(){
                           return []
                    }
             }
      },
      components:{
             goodsListItem,
      }
     
}
</script>
<style scoped>
                     .goods{
                            display: flex;
                            /* 当子元素宽度固定时,它会进行切割 */
                             flex-wrap: wrap;
                             /* 让两头留空隙相等,两边相加等于中间, */
                            justify-content:space-around;
                            padding: 2px;
                            
                     }
          
</style>
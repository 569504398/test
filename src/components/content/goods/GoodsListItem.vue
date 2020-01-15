<template>
     <div class="goodsItem" @click="itemClick()">                          
                        <img  :src="goodslistitem.img" alt="" @load="imgLoad" >
                        <p class="goodsDesc">{{goodslistitem.title}}</p>
                        <span class="price">{{goodslistitem.price}}</span>
                        <span class="collet">{{goodslistitem.collect}}</span>
         </div>
</template>
<script>
export default {
    props:{
            goodslistitem:{
                      type:Object,
                    default(){
                           return []
                    }
            },
          
      },
      methods:{
              imgLoad(){
                         //由于是v-for 遍历的,相当于给每个图片都加入 加载函数,函数调用次数比较多
                         this.$bus.$emit("imgLoad") ;
              },
              itemClick(key){
                        //改变url的地址
                        this.$router.push("/detail/"+this.goodslistitem.id) ;
              }
      }
}
</script>
<style scoped>
    
                    .goodsItem{
                           width: 48%;
                            position:relative;
                            padding-bottom: 30px;
                     }
                  img{
                      /* 不设置百分比,图片宽度是固定的,无法进行均等分,只是图片一行排列,多余的隐藏在视图外,这要图片可以进行自由缩放 */
                       width: 100%;
                        height: 100px;

                  }

                  .goodsDesc{
                            overflow: hidden;
                             /* 结合overflow超出一行隐藏 */
                             /* 超出部分用..代替 */
                            text-overflow: ellipsis;
                            /* 段落文本不换行 */
                            white-space: nowrap;
                            padding-top: 10px;
                  }
                  .price{
                           position:absolute;
                            left:30px
                  }
                  .collet{
                            position:absolute;
                             left:100px;
                        
                  }
                  .collet::before{
                      content: "";
                      position: absolute;
                    /* 这里的相对定位是相对collet而言的,因为是一个伪元素 */
                       left:-25px;
                       top:-5px;
                      width: 22px;
                      height: 22px;
                      /* 这里的定位是背景图片相对于宽度而言的 */
                    background:url(http://127.0.0.1:8081/images/smallstart.jpg) no-repeat  0   -5px
                  }
</style>
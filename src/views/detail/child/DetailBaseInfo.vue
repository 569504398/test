<template>
            <div class="baseInfo" v-if="  Object.keys(baseInfo).length!==0">
                               <p>  [仲陌美] {{baseInfo.title}}</p>
                                 <div class="price">
                                      <span  class="newPrice">￥{{baseInfo.newPrice}}</span> 
                                       <span class="oldPrice">￥{{baseInfo.old_price}}</span>  <span class="desc">{{baseInfo.desc}}</span>
                                    </div>
                                   <div class="colums"><span>销量 {{baseInfo.sellNum}}</span><span>收藏 {{baseInfo.collect}}</span> <span>{{baseInfo.transType}}</span></div> 
                                     <img src="http://127.0.0.1:8081/images/1.jpg" alt="">                      
                                     <img src="http://127.0.0.1:8081/images/1.jpg" alt="">                      
                                     <img src="http://127.0.0.1:8081/images/1.jpg" alt="">                      
                                     <img src="http://127.0.0.1:8081/images/1.jpg" alt="">                     
                   </div>
</template>
<script>
export default {
     props:{     
         baseInfo:{
             type:Object,
                default(){
                     return  {}
                }
         },
         
   },
}
</script>
 <style  scoped>
           .baseInfo>p{
                 text-indent: 1em;
                 color: rgb(0, 0, 0);
                 padding-bottom: 10px;
       }
      
        .colums{
                 display: flex
        }
        .colums>span{
                flex: 1;
                color: #cccccc;
                padding-top: 10px;
        }
        .colums>span:nth-child(3){
                   text-align: right
        }
        .price>.newPrice{
                  color: red;
                  font-size: 20px;
                    position: relative;
        }
        .price>.oldPrice{
                      text-decoration: line-through;
                       font-size: 10px;
        }
        .price>.desc{
                   background: red;
                   border-radius: 15px;
                    font-size: 10px;
                    position:absolute;

        }
 </style>
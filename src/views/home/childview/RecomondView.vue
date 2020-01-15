<template>
                    <div class="recomond">
                            <div v-for="val  in recomond" class="item">
                                      <img  :src="val.img" alt="">
                                     <div>{{val.desc}}</div>
                            </div>               
                    </div>
</template>
<script>
export default {
    
   props:{     
         pics:{
             type:Array,
                default(){
                     return  []
                }
         },
         recomond:{
               type:Array,
               default(){
                      return []
               }
         }
   },
    components:{
            
    },
    
}
</script>
<style  scoped>
            .recomond {
                  display: flex;     
                  text-align: center;
                   padding: 15px 0  30px;
                  border-bottom: 10px solid  #cccccc
            }
             .recomond>.item{
                   flex: 1
             }
            img{
            width: 60px;
            height: 60px;       
        }

        /* 当前组件是获取不到子类组件的类名的只能通过>>>来获取 设置圆点颜色*/
     
/* >>>能让该组件操作其它组件的类 */
</style>
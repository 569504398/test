<template>
            <div class="tabController">
                        <div v-for="(val , key) in title" @click="show(key)"  :class="{active:key==curentIndex}">
                                 <span>{{val}}</span>
                        </div>
            </div>
         
</template>
<script>
export default {

      data(){
          return {
                seColor: "red",
            //     记录当前谁被选中
                curentIndex:0
          }
      },
        props:{
               title:{
                     type:Array,
                     default(){
                           return  []
                     }
               }
        },
        // 将循环中的key传到方法中 
        methods:{
               show(key){
                     this.curentIndex=key 
                    //   1.一种方法传到公共的方法里面去
                  //     this.$store.commit('change',key)
                  // 2.通过子传父
                        this.$emit("tabcontroller",key)

                
               }
        }
}
</script>

<style  scoped>
        .tabController{
                display: flex;
                text-align: center;
                height: 50px;
                line-height: 50px;
        }
        .tabController>div{
                 flex: 1;
        }
        /* .tabController span{
             
        } */
        .active{
              color:red;
                
        }
        .active>span{
                /* 以文字来建立边框,加内边距来称开边框的上下左右距离 */
                 padding:0px 5px  5px;
                  border-bottom:  3px solid  red;
        }
</style>
<template>
        <div>
                 <img  v-if="active==0" :src="show[0]" alt="">
                 <img   v-else-if="active==1"  :src="show[1]" alt="">
                 <img  v-else   :src="show[2]" alt="">
        </div>
</template>
<script>

export default {
    
    data(){
         return {
    
         }
    },
    computed:{
           active(){
                 return  this.$store.state.tabController 
           }
    },
    props:{
         show:{
               type:Array,
               default(){
                    return []
               }
         }
    }
}
</script>
<style    scoped>
  img{
         width: 100%;
  }
</style>
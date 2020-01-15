<template>
         
                <div class="img" :style="{display:$store.state.backTopStatus}" >
                                <!-- <a href="#back"  > -->
                                      <img src="~assets/img/backtop.jpg" alt="">
                                <!-- </a>         -->
                </div>
</template>
<script>
export default {
    
   
      methods:{
            back (){
                      
            }
      }
}
</script>
<style scoped>

        img{
                position:absolute;
                width: 50px;
                right: 0;
                bottom: 49px;
        }
        .img{
             /* 或者是用fixde */
                position:absolute;
                right: 0;
                bottom: 0;
        }
</style>
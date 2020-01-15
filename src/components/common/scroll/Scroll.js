
import  Bscroll from  "better-scroll"

      export  default  function  baseScroll(el,position){
                          const scroll=  new Bscroll(el,{
                                    probeType:2,
                                    // 开启上拉加载
                                    pullUpLoad:true
                            })
                          scroll.on("scroll",function(h){
                                          position(h)
                             }
                          )
                         scroll.on("pullingUp",function(){
                                    setTimeout(()=>{
                                       scroll.finishPullUp()
                                    },2000)
                                
                         })
                }
         


// http://test.com/api/goods_network.php?current_page=1&per_count=5

// 对页面请求地址进行管理
import {request} from "network/request"
export  {requestHome,requestDetail}
//调用函数返回一个函数,相当于是把这个函数拿过去了requestHome()等价于return后面的代码
  function requestHome(page){
          return  request({
            // 网络请求
            // url:"goods_network.php",
            // 本地请求
            url:"goods.php",
              params:{
                    current_page:page ,
                    per_count: 5   
              }
          })
  }

  // http://127.0.0.1:8081/api/goodsDetail.php?id=1
  // 192.168.43.31:8081/api/goodsDetailNetwork.php?id=1
  function requestDetail(pid){
    return  request({
      // 网络请求
      // url:"goodsDetailNetwork.php",
      // 本地请求
      url:"goodsDetail.php",
      
        params:{
               id:pid
        }
    })
}

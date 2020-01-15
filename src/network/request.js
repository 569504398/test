
import axios  from "axios";
export {request} 
    function request(config){
    //    创建axions对象,将公共的资源提出来
     const instance= axios.create({
            //   远程
              // baseURL:"http://192.168.43.31:8081/api",
            //   本地
              baseURL:"http://127.0.0.1:8081/api",
              timeout:5000
          })

      
          //2.拦截处理
      instance.interceptors.request.use(res=>{
                return   res;
      })
      instance.interceptors.response.use(res=>{
               return  res.data
      })
          //返回一个promise对象
      return    instance(config);
    }
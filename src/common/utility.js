//公共的方法

export  {debounce,formatDate} 
// 防抖函数
  function   debounce(func,delay){
    //   不能使用const,因为后面又给它重新赋值
      let  timer=null;
      return   function(...args){
              if(timer) clearTimeout(timer)
         timer=  setTimeout(() => {
                      func.apply(this,args)
              }, delay);
      }
}

//正则表达式将  时间戳转化成日期格式  
 function  formatDate(date,fmt){
  if(/(y+)/.test(fmt)){
// 传入参数中yyyy 被后者替换
      fmt=fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }

  let obj={
         "M+" : date.getMonth() + 1,   
         "d+" : date.getDate() ,
         "h+" : date.getHours() ,
         "m+" : date.getMinutes() ,
         "s+" : date.getSeconds() ,
       
  }

  for  (let k  in  obj){ 
     if(new RegExp(`(${k})`).test(fmt) ){
    let  str =obj[k]+ "";  
    let  res=  ( RegExp.$1.length===1) ? str :  padLefZero(str) 
                        //传入的参数字符串中MM  d  hh  分别被 后者替换
            fmt=fmt.replace(RegExp.$1,  ( RegExp.$1.length===1) ? str :  padLefZero(str)  );
     }
  }
  return  fmt
}
function  padLefZero(str){
return  ('00' + str).substr(str.length);
}

// let timestamp= new   Date().getTime();
// //   php获取的时间戳:    1578975127   1578975175083
// console.log(timestamp);

// let   date= new  Date(  timestamp);
//   let  time=  formatDate(date,"yyyy/MM/d hh:mm:ss")
//   console.log(time);
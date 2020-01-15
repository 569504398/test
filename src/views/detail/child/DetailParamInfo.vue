<template>
             <div class="paramInfo">
                                        <ul>
                                                <li>尺码 M  L XL  XXL</li>
                                                <li>衣长  61.5  63  64.5  66</li>
                                                <li>胸围  98  104  110  116</li>
                                                <li>袖长 63 66  68.5 70.5</li>
                                                <li><span>图案</span>   <div>  <span class="paramName">宫廷式复古/民族复古图字母/文字/数字</span></div> </li>
                                                <li><span>厂名</span>  <div> <span class="paramName">艾攻莉服饰有限公司</span></div>  </li>
                                                <li><span>颜色</span>  <div> <span class="paramName">黑白拼接</span></div> </li>
                                                <li><span>袖型</span>   <div><span class="paramName">常规袖</span> </div></li>
                                                <li><span>上衣厚度</span>  <div><span class="paramName">适中</span></div>  </li>
                                                <li><span>尺码</span>  <div><span class="paramName">XL,L,M,XXL</span></div>   </li>
                                                <li><span>衣长</span>  <div><span class="paramName">常规款(51-65cm)</span></div>    </li>
                                        </ul>
                        </div>     
</template>
<script>
export default {
    
}
</script>
<style scoped>
.paramInfo li{
        display: flex;

         
}
.paramInfo li>span{
         width: 70px;
          line-height: 50px;
}
.paramInfo li>div{
           padding-left: 80px;
             flex: 1;
            height: 50px;
            line-height: 50px;
}
.paramInfo .paramName{
              color: red;
                 left: 110px;
             display: inline-block;
            line-height: 20px;
            vertical-align: middle; 
}
</style>
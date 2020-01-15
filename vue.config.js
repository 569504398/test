module.exports={

    devServer:{
         port:8080,
         //这个将本地和远程都设置相同的别名了
        //  host:"test1.com",
    },
    configureWebpack:{
    resolve: {
        alias: {
    
        //   '@': 相当于src
          'assets': '@/assets',
          'views': '@/views',
          'components': '@/components',
          'store': '@/store',
          'network': '@/network',
          'common':'@/common',
        }
      }
    }
}
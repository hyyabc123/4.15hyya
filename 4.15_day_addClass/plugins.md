## html-webpack-plugin

1. 安装插件 npm i html-webpack-plugin
```
const HtmlWebpackPlugin = require('html-webpack-plugin');
const  CleanWebpackPlugin = require('clean-webpack-plugin');

plugins: [
        new CleanWebpackPlugin(['build']), //打包之前清除build里面的文件
        new HtmlWebpackPlugin({
            template: "./src/index.html",////需要编译的html文件路径
            filename:"app.html", //重命名后的文件名
            title:"首页",
 minify: {
                removeAttributeQuotes: true, // 去除引号
                collapseWhitespace: true, //去除空格
                removeComments: true, //去除注释
                removeEmptyAttributes: true //去除空属性
            }
        })
    ]
```
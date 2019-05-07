const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
console.log(webpack);
module.exports={
    mode:'development',
    entry:path.join(__dirname,'./src/index.js'),
    output:{
        path:path.join(__dirname,'build'),
        filename:'index.js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(jpg|png|gif|jpeg)$/,
                loader:'url-loader',
                options:{
                    limit:4000
                }
            },{
                test:/\.(svg|eot|woff|ttf)$/,
                loader:'file-loader' ,
                options:{
                    name:'./font/[name].[ext]'
                }
            },
            {
                test:/\.scss$/,
                // use:['style-loader','css-loader','sass-loader']
                use: ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',//结束运行时的loader
                    use:['css-loader','sass-loader']
                })
            }
        ]
    },
    plugins:[
        //1.引入插件
        //2.使用插件
        new CleanWebpackPlugin(),
        new ExtractTextWebpackPlugin('style.css'),
        new HtmlWebpackPlugin({
            template:'index.html',
            filename:'app.html',
            title:'首页'
        }),
        new webpack.HotModuleReplacementPlugin()

    ],
  
    devServer:{//开发环境
        port:9897,
        open:true,
        host:'localhost',
        hot:true,
        // inline:true,
        before(app){ //middleware
            app.get('/api/list',(req,res,next)=>{
                res.send({code:0,message:'成功'});
            })
        },
        // proxy:{
        //    '/classify/iconlist' :''
        // }
    }
}
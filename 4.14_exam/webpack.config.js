const path = require("path");
const extractTextWebpackPlugin = require("extract-text-webpack-plugin");
const cleanWebpackPlugin =require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports= {
    mode:"development",
    entry:path.join(__dirname,"./src/index.js"),
    output:{
        path:path.join(__dirname,"build"),
        filename:"index.js"
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                loader:"babel-loader",
                options:{
                    presets:["@babel/preset-env"]
                }
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader"],

            },
            {
                test:/\.scss$/,
                use:extractTextWebpackPlugin.extract({
                    fallback:"style-loader",
                    use:["css-loader","sass-loader"]
                })
            },
            {
                test:/\.(woff|ttf|svg|eot)/,
                loader:"file-loader",
                options:{
                    name:"./font/[name].[ext]"
                }
            },
            {
                test:/\.(jpg|gif|png)/,
                loader:"url-loader",
            }
        ]  
    },
    plugins:[
        new cleanWebpackPlugin(),
        new extractTextWebpackPlugin("style.css"),
        new htmlWebpackPlugin({
            template:"index.html",
            filename:"app.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        port:8000,
        open:true,
        hot:true,
        before(app){
            app.get("/api/index",(req,res)=>{
                res.send({code:1})
            })
        }
    }
}
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin= require("html-webpack-plugin");
const cleanwebpackplugin=require("clean-webpack-plugin");
const webpack = require("webpack");
module.exports = {
    mode: "development",
    entry: {
        entry1: path.join(__dirname, "./src/index.js"),
        entry2: path.join(__dirname, "./src/index2.js")
    },
    // entry:[path.join(__dirname,"./src/index.js"),path.join(__dirname,"./src/index2.js")],
    output: {
        path: path.join(__dirname, "bulild1"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|gif)/,
                loader: "url-loader",
                // options:{
                //     limit:4000
                // }
            },
            {
                test: /\.(svg|eot|ttf|woff)$/,
                loader: "url-loader",
                options: {
                    name: "./font/[name].[ext]"
                }
            },
            // {
            //     test: /\.scss$/,
            //     use: ["style-loader", "css-loader", "sass-loader"]
            // },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","sass-loader"]
                })
            }
        ]
    },
    plugins: [
        new cleanwebpackplugin(),
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            title:"首页1",
            template:"./index.html",
            filename:"app.html",
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        port:8080,
        open:true,
        host:"localhost",
        hot:true,
        inline:true,
        before(app){
            app.get("/api/index",(req,res)=>{
                res.send({code:1,msg:"success"})
            })
        }
    }
}
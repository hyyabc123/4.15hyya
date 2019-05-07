const path = require("path");
const extractTextPlugin = require("extract-text-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-Webpack-plugin");
const webpack = require("webpack");
const fs = require("fs")
console.log(extractTextPlugin)
module.exports={
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
                test:/\.(css)$/,
                use:["style-loader","css-loader"]
            },
            // {
            //     test:/\.scss$/,
            //     use:["style-loader","css-loader","sass-loader"]
            // },
            {
                test:/\.(jpg|png)$/,
                loader:"url-loader"
            },
            {
                test:/\.(svg|ttf|woff|eot)/,
                loader:"file-loader"
            },
            {
                test:/\.scss/,
                use:extractTextPlugin.extract({
                        fallback:"style-loader",
                        use:["css-loader","sass-loader"]
                    })
            }
        ]
    },
    plugins:[
        new cleanWebpackPlugin(),
        new extractTextPlugin("sty.css"),
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
        after(app){
            app.get("/api/index",(req,res)=>{
                res.send((fs.readFileSync(path.join(__dirname,"./mock/data.json"),"utf8")))
            })
        }
    }
}
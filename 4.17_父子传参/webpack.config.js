const path =require("path");
const htmlWebpackPlugin= require("html-webpack-plugin");
const webpack = require("webpack");
const vuePlugin =require("./node_modules/vue-loader/lib/plugin");

module.exports = {
    entry:path.join(__dirname,"./src/index.js"),
    output:{
        path:path.join(__dirname,"build"),
        filename:"index.js"
    },
    module:{
        rules:[
            {
                test:/\.js/,
                loader:"babel-loader",
                options:{
                    presets:["@babel/preset-env"]
                }
            },
            {
                test:/\.vue/,
                loader:"vue-loader"
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:"index.html",
            filename:"index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new vuePlugin()
    ],
    devServer:{
        port:8080,  
        open:true, 
        hot:true        
    }
}
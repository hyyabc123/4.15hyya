const path = require("path");
const htmlWebpakcPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports ={
    entry:path.join(__dirname,"./src/index.js"),
    output:{
        path:path.join(__dirname,"build"),
        filename:"index.js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                options:{
                    presets:["@babel/preset-env"]
                }
            }
        ]
    },
    plugins:[
        new htmlWebpakcPlugin({
            template:"./index.html",
            filename:"app.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        port:8080,
        open:true,
        hot:true,
    },
    // resolve:{
    //     alias:{
    //         "vue$":"./node_modules/vue/dist/vue.esm.js"
    //     }
    // }
}
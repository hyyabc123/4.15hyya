const config = require("../config/index.js");
const htmlWebpackplugin = require("html-webpack-plugin");
const extractTextPlugin =require("extract-text-webpack-plugin")
console.log(extractTextPlugin)
const BaseConfig = {
    entry: config.entry,
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
        new extractTextPlugin("style.css"),
        new htmlWebpackplugin({
            template:"index.html",
            filename:"app.html",
            title:"首页"
        })
    ]
}

module.exports = BaseConfig

const path = require("path");
const webpack = require("webpack");
const extractTextPlugin = require("extract-text-webpack-plugin");
const httpWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "./index.html"),
    output: {
        path: path.join(__dirname, "build"),
        filename: "index.html"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.sass$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(jpg|gif|png)$/,
                loader: "url-loader",
                options: {
                    limit: 4000
                }
            },
            {
                test: /\.(woff|svg|eto|ttf)/,
                loader: "file-loader",
                options: {
                    name: "./font/[name].[etx]"
                }
            },
            {
                test: /\.sass$/,
                use: [
                    extractTextPlugin.extract({
                        fallback: "style-loader",
                        use: ["css-loader", "sass-loader"]
                    })
                ]
            }

        ]
    },
    plugins: [
        new cleanWebpackPlugin(),
        new extractTextPlugin("style.css"),
        new webpack.HotModuleReplacementPlugin(),
        new httpWebpackPlugin({
            template: "index.html",
            filename: "app.html"
        })
    ],
    devServer: {
        port: 8000,
        open: true,
        hot: true,
        after(app) {
            app.get("/api/index", (req, res) => {
                res.send({ code: 1 })
            })
        }
    }
}
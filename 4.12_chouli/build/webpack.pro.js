const config = require("../config/index.js");
const baseconfig= require("./webpack.base.js");
const webpackMerge = require("webpack-merge");

const proConfig = {
    mode:config.production.mode,
    output:{ 
        path:config.production.outputpath,
        filename:"index.js"
    }
}
module.exports = webpackMerge(baseconfig,proConfig)
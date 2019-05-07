const config = require("../config/index.js");
const baseconfig = require("./webpack.base.js")
const webpackMerge = require("webpack-merge");
const path = require("path");
const fs = require("fs")
const devconfig = {
    mode:config.development.mode,
    devServer:{
        port:config.development.port,
        host:config.development.host,
        open:true,
        inline:true,
        after(app){
            app.get("/api/index",(req,res)=>{
                res.send(JSON.parse(fs.readFileSync(path.join(__dirname,"../mock/data.json"),"utf8")))
            })
        }
    }
}
module.exports = webpackMerge(baseconfig,devconfig)

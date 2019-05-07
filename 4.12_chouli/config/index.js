const path = require("path");
const config = {
    entry:path.join(__dirname,"../src/index.js"),
    development:{
        mode:"development",
        port:8080,
        host:"localhost"
    },
    production:{
        mode:"production",
        outputpath:path.join(__dirname,"../build")
    }
}
module.exports = config
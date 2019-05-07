const gulp = require("gulp");
const gulpwebserver = require("gulp-webserver");
const path = require("path")
const fs = require("fs")
gulp.task("server",()=>{
    return gulp.src("./src/")
        .pipe(gulpwebserver({
            port:8080,
            open:true,
            livereload:true,
            // fallback:"index.html",
            middleware:[
                (req,res)=>{
                    if(req.url==="/"){
                        let data = fs.readFileSync(path.join(__dirname,"./src/index.html"),"utf8")
                        res.end(data)
                    }else if(path.extname(req.url)){
                        if(req.url ==="\favicon.ico"){
                            res.end("")
                        }
                        fs.readFile(path.join(__dirname,"src",req.url),"utf8",(error,data)=>{
                            if(error){
                                return
                            }
                            res.end(data)
                        })
                    }else{
                        if(req.url=="/api/index"){
                            let data = fs.readFileSync(path.join(__dirname,"./mock/mock/data.json"),"utf8");
                            res.end(data)
                        }
                    }
                }
            ]
        }))
})
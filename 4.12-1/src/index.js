import preson from "./js/a"
import "./css/style.css"
import "./scss/style.scss"
import "./js/flexible"
import "./fonts/iconfont.css"


new preson({name:"zs"})
function ajax(url) {    
    return new Promise((resolve,reject)=>{
        const xhr= new XMLHttpRequest();
        xhr.onload =function () {  
            if(xhr.status==200){
                resolve(JSON.parse(xhr.responseText))
            }
        }
        xhr.open("get",url,true);
        xhr.send(null)
    })
}
ajax("/api/index").then((res)=>{
    render(res)
})
const main = document.querySelector(".main")
function render(data) {     
    main.innerHTML = data.map(item=>`<div class="item">
                                        <li><span>${item.local}</span> <span>编辑</span></li>
                                        <li>${item.serch}</li>
                                        <li>${item.name} ${item.tel}</li>
                                    </div>`).join("")
}


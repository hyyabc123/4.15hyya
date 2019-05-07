axios.get("/api/index").then((res)=>{
    render(res.data)
})
const wrap = document.querySelector(".wrap")
const head = document.querySelector(".head")
function render(data) {  
    wrap.innerHTML=data.map(item=>`<div class="item">
                                    <dl>
                                        <dt>
                                            <img src="" alt="">
                                        </dt>
                                        <dd>
                                            <h5>${item.title}</h5>
                                            <span>${item.gb}</span>
                                            <li>${item.price}</li> 
                                            <div class="count">
                                                <div class="sm">-</div>
                                                <div class="num">1</div>
                                                <div class="add">+</div>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>`)
}
setTimeout(function () {  
    const item = [...document.querySelectorAll(".item")]
    item.map(ite=>{
        console.log(ite)
        ite.onclick = function (e) {  
            var e = e|| window.e,
            target = e.target||e.ercElement;
            // console.log(target.className)
            if(target.className=="add"){
                target.previousElementSibling.innerHTML++
                target.parentNode.previousElementSibling.innerHTML=6988*target.previousElementSibling.innerHTML
                console.log([...document.querySelectorAll("li")].map((it)=>it.innerHTML))
            }else if(target.className=="sm"){
                if(target.nextElementSibling.innerHTML==0){
                    target.nextElementSibling.innerHTML=0
                }else{
                    target.nextElementSibling.innerHTML--
                    target.parentNode.previousElementSibling.innerHTML=6988*target.nextElementSibling.innerHTML
                }
            }
        }
    })
    
},1000)

import person from "./js/a"
import { sum } from "./js/b"
import "./css/style.css"
import "./fonts/iconfont.css"
import "./scss/style.scss"

console.log(sum(1, 2, 3, 4, 5))
new person({ name: "zs" }).sayname()

function ajax(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText))
            }
            xhr.open("get", url, true);
            xhr.send(null)
        }
    })
}
ajax("/api/index").then((res)=>{
    console.log(res)
})
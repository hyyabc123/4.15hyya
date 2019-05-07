let ajax = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText))
            }
        }
        xhr.open("get", url, true)
        xhr.send()
    })
}
export { ajax }
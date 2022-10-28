function loadScript(url, callback) {
    let scriptDom = document.createElement("script")
    scriptDom.src = url;
    scriptDom.onload = () => {
        console.log("加载成功");
        callback(true)
    }
    scriptDom.onerror = () => {
        console.log("加载失败");
        callback(false)
    }
    document.body.appendChild(scriptDom)
    document.body.removeChild(scriptDom)
}
function rollOver(element){
    let imgTag = element.getAttribute("id")
    let sourceOrigin = element.getAttribute("src")
    console.log(sourceOrigin);
    let sourceEdited = sourceOrigin.replace(".jpg","_2.jpg")
    document.getElementById(imgTag).src = sourceEdited
}
function rollOut(element){
    let imgTag = element.getAttribute("id")
    let sourceOrigin = element.getAttribute("src")
    let sourceEdited = sourceOrigin.replace("_2.jpg",".jpg")
    document.getElementById(imgTag).src = sourceEdited
}
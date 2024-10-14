const boxes = document.querySelectorAll(".box")
const img = document.querySelector(".img")



img.addEventListener("dragstart",dragStart)
img.addEventListener("dragend",dragEnd)


for(const box of boxes ){
    box.addEventListener("dragover",dragOver)
    box.addEventListener("dragenter",dragenter)
    box.addEventListener("dragleave",dragleave)
    box.addEventListener("drop",dragdrop)
}

function dragStart() {
    this.className  += " hold"
    setTimeout(()=> this.className = "invisible", 0)
}

function dragEnd(){
    this.className = "img"
}

function dragOver(e){
    e.preventDefault()
}

function dragenter(e){
    e.preventDefault()
    this.className += " hovered"
}


function dragleave(){
    this.className = "box"
}
function dragdrop(){
    this.className = "box"
    this.append(img)
}
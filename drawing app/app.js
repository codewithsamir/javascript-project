const canvas = document.getElementById("canvas")
const decreasebtn = document.getElementById("decrease")
const increasebtn = document.getElementById("increase")
const size = document.getElementById("value")
const colortype = document.getElementById("color")
const clear = document.getElementById("clear")


const ctx = canvas.getContext('2d')

let sizevalue = 10;
let ispressed = false
colortype.value = 'black'
let color = colortype.value
let x;
let y;


canvas.addEventListener("mousedown",(e)=>{
    ispressed = true;
    x = e.offsetX
    y = e.offsetY
})
document.addEventListener("mouseup",(e)=>{
    ispressed = false;
    x = undefined
    y = undefined
})

canvas.addEventListener("mousemove",(e)=>{
if(ispressed){
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawcircle(x,y)
    drawline(x,y,x2,y2)

    x = x2;
    y= y2;
}
})


function drawcircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,sizevalue,0,Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawline(x1,y1,x2,y2){

    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2)
    ctx.strokeStyle = color
    ctx.lineWidth = sizevalue * 2;
    ctx.stroke()
}

function updatesizeonscreen() {
    size.innerText = sizevalue
}


increasebtn.addEventListener("click",()=>{
    sizevalue += 5
    if(sizevalue >  50){
        sizevalue = 50
    }
    updatesizeonscreen()
})
decreasebtn.addEventListener("click",()=>{
    sizevalue -= 5
    if(sizevalue  < 5){
        sizevalue = 5
    }
    updatesizeonscreen()
})

colortype.addEventListener("change",(e)=> color = e.target.value)

clear.addEventListener("click",()=> ctx.clearRect(0,0,canvas.width,canvas.height))
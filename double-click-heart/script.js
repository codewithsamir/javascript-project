const imgbox = document.querySelector(".img-box")
const value = document.getElementById("incre")
 let index = 0;
 let timesclicked = 0;

 imgbox.addEventListener("click",(e)=>{
    if(index === 0){
        index = new Date().getTime()
    }
    else{
        if((new Date().getTime()-index)< 800 ){
            createheart(e);
            index = 0;
        }
        else{
            index =new Date().getTime()
        }
    }
 })


 const createheart = (e)=>{
    const heart = document.createElement("i")
    heart.classList.add("fa-solid")
    heart.classList.add("fa-heart")
    const x = e.clientX
    const y = e.clientY
    const leftoffset = e.target.offsetLeft
    const topoffset = e.target.offsetTop

    const xinside = x - leftoffset
    const yinside = y- topoffset

    heart.style.top = `${yinside}px`
    heart.style.left = `${xinside}px`
imgbox.appendChild(heart)

value.innerText= ++timesclicked

setTimeout(()=>heart.remove(),500)
 }
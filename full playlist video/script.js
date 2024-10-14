const mainvideo = document.querySelector(".main-video iframe")

const maintitle = document.querySelector(".content h2")
const maindesc = document.querySelector(".content p")

const playlistvideo = document.querySelectorAll(".vd-box")
const plyvideo= document.querySelectorAll(".vd-box iframe")
const plytitle= document.querySelectorAll(".vd-box h2")
const plydesc= document.querySelectorAll(".vd-box p")
const nextbtn = document.querySelector(".next")
const previousbtn = document.querySelector(".previous")
let count = 0;

mainvideo.src = plyvideo[count].src
maintitle.textContent = plytitle[count].textContent 
maindesc.textContent = plydesc[count].textContent 




playlistvideo.forEach((vidbox,idx)=>{
    // for box background active color add and remove
    
  
    vidbox.addEventListener("click",(e)=>{
        e.preventDefault();
        count = idx;
        if(count === 0){
            previousbtn.classList.add("active2")
        }
        else{
            previousbtn.classList.remove("active2")
        
        }
   
playlistvideo.forEach(vbox=>{
    vbox.classList.remove("active")
    
})  
      vidbox.classList.add("active")
  


    // content give in mainsection
    let psrc = vidbox.querySelector("iframe")
    let ptitle = vidbox.querySelector("h2")
    let pdec = vidbox.querySelector(" p")

    mainvideo.src = psrc.src;
    maintitle.textContent = ptitle.textContent
    maindesc.textContent = pdec.textContent
})
    


})



// for nextbtn
nextbtn.addEventListener("click",()=>{
    count++
    if(count > playlistvideo.length -1){
        count = 0;
    }
    videochanging()
})

// for previous btn 
previousbtn.addEventListener("click",()=>{
    count--
    if(count <= 0){
        count = 0;
    }
    videochanging()
})

function videochanging(){

    playlistvideo.forEach(vbox=>{
        vbox.classList.remove("active")
        
    })
    playlistvideo[count].classList.add("active")
    mainvideo.src = plyvideo[count].src
    maintitle.textContent = plytitle[count].textContent 
    maindesc.textContent = plydesc[count].textContent 

  if(count === 0){
            previousbtn.classList.add("active2")
        }
        else{
            previousbtn.classList.remove("active2")
    
        }
}

// for nightmode 
const nightmode = document.querySelector('#checkbox')
const section = document.querySelector("section")
const sectionleft = document.querySelector("section .left")
nightmode.addEventListener("change",()=>{
    section.classList.toggle("darkmode")
    sectionleft.classList.toggle("darkmode")
})
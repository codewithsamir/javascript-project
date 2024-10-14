const slidercontainer= document.querySelector(".slider-container")

const leftslide= document.querySelector(".left-slide")

const rightslide= document.querySelector('.right-slide')

const upbtn = document.querySelector(".btn-2")
const downbtn = document.querySelector(".btn-1")

const slideslenght = rightslide.querySelectorAll("div").length
let activeslideIndex = 0;

leftslide.style.top = `-${(slideslenght - 1)* 100}vh`

upbtn.addEventListener("click",()=>
changeslide("up"))
downbtn.addEventListener("click",()=>
changeslide("down"))

const changeslide = (direction)=>{

const sliderheight = slidercontainer.clientHeight
if(direction === "up"){
    activeslideIndex++
    if(activeslideIndex > slideslenght -1){
        activeslideIndex = 0
    }
}
else if (direction === "down"){
    activeslideIndex--
    if(activeslideIndex < 0){
        activeslideIndex = slideslenght -1;
    }
}
rightslide.style.transform = `translateY(-${activeslideIndex * sliderheight}px)`
leftslide.style.transform = `translateY(${activeslideIndex * sliderheight}px)`

}
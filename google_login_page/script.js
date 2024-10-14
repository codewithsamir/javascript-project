const first = document.querySelector(".login-box")
const second = document.querySelector(".login-box-2")
const animated = document.querySelector(".animate ")
const btn = document.querySelector(".ac-btn")


btn.addEventListener('click',()=>{
    first.classList.add("hidden")
    second.classList.remove("opacity-0")
    animated.classList.remove("translate-x-[30rem]")
    animated.classList.add("translate-x-0 ")
})

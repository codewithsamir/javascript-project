console.log("hello samir")
const guessbox = document.querySelector(".guessbox")
const resultbox = document.querySelector(".resultbox")
const counter = document.querySelector(".count")
const button = document.querySelector(".btn")
const replay = document.querySelector(".replay")
const tryagain = document.querySelector(".try")
const random = Math.floor(Math.random() * 10 )

console.log(random)

let count = 0;
button.addEventListener("click",guessnum)
function guessnum(){
  count ++;
  let inputbox = document.querySelector('.inputbox').value

 
 
  if(inputbox == random){
    console.log("matched")
    guessbox.classList.add("hidden")
    resultbox.classList.remove("hidden")
    tryagain.innerText =  " "
    counter.innerText = `finally you take  ${count} time to guess`
    count = 0;
  
  } 
 else {
  if(inputbox > random){
tryagain.innerText = `${inputbox} greater than guess number `
  }
  if(inputbox < random){
tryagain.innerText = `${inputbox} smaller than guess number `
  }
}
  
}

replay.addEventListener("click",()=>{
  guessbox.classList.remove("hidden")
  resultbox.classList.add("hidden")
  tryagain.innerText =  " "
  window.location.reload(true)
})
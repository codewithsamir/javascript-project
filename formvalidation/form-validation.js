console.log("our form validation is start for working");
const name = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const address = document.getElementById("address")


let validemail = false;
let validphone = false;
let validname = false;
let validaddress = false;


name.addEventListener('blur',()=>{
    console.log("name is blurred");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){3,10}$/;
    let str = name.value;
    console.log(regex, str)
    if(regex.test(str)){
        console.log('your name is valid')
        name.classList.remove("is-invalid")
        validname = true;
    }else{
        console.log("your name is not valid")
        name.classList.add("is-invalid")
        validname = false;
    }
})
email.addEventListener('blur',()=>{
    console.log("name is blurred");
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str)
    if(regex.test(str)){
        console.log('your email is valid')
        email.classList.remove("is-invalid")
        validemail = true;
    }else{
        console.log("your email is not valid")
        email.classList.add("is-invalid")
        validemail = false;
    }
})
phone.addEventListener('blur',()=>{
    console.log("phone is blurred");
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str)
    if(regex.test(str)){
        console.log('your number is valid')
        phone.classList.remove("is-invalid")
        validphone = true;
    }else{
        console.log("your number is not valid")
        phone.classList.add("is-invalid")
        validphone = false;
    }
})
address.addEventListener('blur',()=>{
    console.log("name is blurred");
    let regex = /^([0-9a-zA-Z])/;
    let str = address.value;
    console.log(regex, str)
    if(regex.test(str)){
        console.log('your address is valid')
        address.classList.remove("is-invalid")
        validaddress = true;
    }else{
        console.log("your address is not valid")
        address.classList.add("is-invalid")
        validaddress = false;
    }
})

const submit = document.getElementById("submit")

submit.addEventListener("click",(e)=>{
    e.preventDefault();

console.log("you clicked on submit")
console.log(validemail,validaddress,validname,validphone)
if(validaddress && validemail && validname && validphone){
    console.log("pone,email,and name and address submitting the form");
    let  success = document.getElementById("success")
success.classList.add("show")
success.classList.remove("hide")
failure.classList.add("hide")



}else{
    console.log("pone,email,and name and address not submitting the form please correct the error and try again");
 let failure =   document.getElementById("failure")
failure.classList.add("show")
failure.classList.remove("hide")
success.classList.add("hide")



}

})
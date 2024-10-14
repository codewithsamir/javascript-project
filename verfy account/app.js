const codebox = document.querySelectorAll(".code")

codebox[0].focus();

codebox.forEach((code,index)=>{
    code.addEventListener("keydown",(e)=>{
        if(e.key>= 0 && e.key <=9){
            codebox[index].value = ""
            setTimeout(()=>codebox[index +1].focus(),10)
        }
        else if(e.key === "Backspace"){
            setTimeout(()=> codebox[index -1].focus(),10)
        }
    })
}
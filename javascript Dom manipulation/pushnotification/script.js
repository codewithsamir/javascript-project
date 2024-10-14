const button = document.querySelector("button");

button.addEventListener("click",()=>{
Notification.requestPermission().then(per=>{
 if(per === "granted"){
    new Notification("example notification",{
        body:"this is more text",
        icon:"logo.png",
        tag:"welcome to our your channel"
    })
 }
 
})
})
let notification
let interval
document.addEventListener("visibilitychange",()=>{
    if(document.visibilityState==="hidden"){
        const leaveDate =new Date();
 interval =  setInterval(() => {
        
        notification = new Notification("comeback please",{
            body:`you have been gone for${Math.round((new Date()-leaveDate)/1000)} seconds`,
            tag:"comeback",
        })
    }, 100)
        } else{
           if(interval) clearInterval(interval)
           if(notification) notification.close()
        }
})

gsap.registerPlugin(Flip)

const links = document.querySelectorAll(".nav-item  a")
const activenav = document.querySelector(".active-nav")

links.forEach((link) => {
    link.addEventListener('click', (e)=>{
        // nav navs blue 
        gsap.to(links, { color : "#252525"})

     if(document.activeElement === link){
            gsap.to(link, { color: "#385ae0"})
            
        }

        //move the line
        const state = Flip.getState(activenav);
          link.appendChild(activenav)
       Flip.from(state,{
        duration:1.25,
        absolute:true,
        ease: "elastic.out(1,0.5)",
       })

})
})


const cards = document.querySelectorAll(".card")

cards.forEach((card , index) =>{
    card.addEventListener("click", ()=>{
    // get state 
    const state = Flip.getState(cards);

    // add the active class to clicked one 
    const iscardactive = card.classList.contains("active")
    cards.forEach((othercard, otherinx)=>{
        othercard.classList.remove("active")
        othercard.classList.remove("is-inactive")
if(!iscardactive && index !== otherinx){
    othercard.classList.add("is-inactive")
}
    })
    if(!iscardactive) card.classList.add("active");
    Flip.from(state, {
        duration: 1,
        ease: "expo.out",
        absolute:true,
     
    })
})
})
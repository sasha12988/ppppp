document.addEventListener('DOMContentLoaded', () => {
  
gsap.from(".cta-title",{
    x: -100, opacity: 0,
    ease: "power3.out"
});
 gsap.from(".cta-button", {
     y: 40, opacity: 0,delay: 0.75, ease: "back.out(1.7)"
 });
gsap.from(".products-title",{
     y:50,opacity: 0,
     scrollTrigger :{start: "top 85%"}
});

const cards =document.querySelectorAll(".card")
cards.forEach((card)=>{gsap.from(card,{
    y:50,opacity: 0,
     scrollTrigger :{start: "top 85%"}
});
    
});
    
})










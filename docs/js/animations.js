gsap.registerPlugin(ScrollTrigger);

const movil = document.querySelector('#movil__animated');
const movil2 = document.querySelector('#movil__animated2');

const tl = gsap.timeline({
                   
                  scrollTrigger:{
                  trigger:".popular__table",
                  markers:false,
                  start:"20% 20%",
                  end:"20% 20%",
                  scrub:3,
                  pin:true,
          },
});


tl.to(movil,{ 
        x:700,
        ease:'power1',
        duration:10},
        "-=10");


 tl.to(movil2,{ 
         x:-700,
         ease:'power1',
         duration:10},
         "-=10");    
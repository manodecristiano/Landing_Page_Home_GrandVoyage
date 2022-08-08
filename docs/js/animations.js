gsap.registerPlugin(ScrollTrigger);

const movil = document.querySelector('#movil__animated');
const movil2 = document.querySelector('#movil__animated2');

const tl = gsap.timeline({
                   
                  scrollTrigger:{
                  trigger:".popular__table",
                  markers:false,
                  start:"50% 20%",
                  end:"50% 20%",
                  scrub:3,
                  pin:true,
          },
});


tl.to(movil,{ 
        x:730,
        ease:'power1',
        duration:10},
        "-=7");


 tl.to(movil2,{ 
         x:-730,
         ease:'power1',
         duration:10},
         "-=7");    
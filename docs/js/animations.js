gsap.registerPlugin(ScrollTrigger);

const movil = document.querySelector('#movil__animated');
const movil2 = document.querySelector('#movil__animated2');
const movil3 = document.querySelector('.guia__title');
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
        left:'30%',
        ease:'power1',
        duration:500},
        "-=500");

tl.to(movil2,{   
         right:'30%',
         ease:'power1',
         duration:500},
         "-=500");  

         tl.to(movil3,{ 
                opacity:0,
                duration:1000
        });
         tl.to(movil3,{
                opacity:1,
                duration:2500
        },"+=1")
         

const fade__div = document.querySelector('.planify__fade__in');

const tl2 = gsap.timeline({ 

                scrollTrigger:{
                trigger:".planify__title",
                markers:false,
                start:"0% 20%",
                end:"0% 20%",
                scrub:3,
                pin:true,
        },
})


       
         tl2.to(fade__div,{
                opacity:1,
                duration:5
        },"+=1")
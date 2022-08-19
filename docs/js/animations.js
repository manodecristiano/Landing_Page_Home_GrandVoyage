gsap.registerPlugin(ScrollTrigger);


const movil = document.querySelector('#movil__animated');
const movil2 = document.querySelector('#movil__animated2');
const movil3 = document.querySelector('#movil__animated3');






const tl3 = gsap.timeline({
                   
        scrollTrigger:{
        trigger:"body",
        markers:false,
        start:"25% 0%",
        end:"80% 100%",
        scrub:3,
        pin:true,
        },
});


 


 tl3.to(movil3,
         {   
         ease:'power1',
         
         marginTop:'-5%',
         marginLeft:'60%'});




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
        left:'40%',
        ease:'power1',
        duration:500},
        "-=500");

tl.to(movil2,{   
        right:'40%',
        ease:'power1',
        duration:500},
        "-=500");











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
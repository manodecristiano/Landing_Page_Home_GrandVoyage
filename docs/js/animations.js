gsap.registerPlugin(ScrollTrigger);

const movil = document.querySelector('#movil__animated');
const movil2 = document.querySelector('#movil__animated2');
const movil3 = document.querySelector('#movil__animated3');

const tl = gsap.timeline({
                   
                  scrollTrigger:{
                  trigger:".popular__table",
                  markers:true,
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


const tl3 = gsap.timeline({
                   
                scrollTrigger:{
                trigger:".popular__table",
                markers:true,
                start:"30% 20%",
                end:"30% 100%",
                scrub:3,
                pin:true,
        },
});
const tl4 = gsap.timeline({
                   
        scrollTrigger:{
        trigger:".popular__table",
        markers:true,
        start:"40% 20%",
        end:"40% 100%",
        scrub:3,
        pin:true,
},
});
const tl5 = gsap.timeline({
                   
        scrollTrigger:{
        trigger:".popular__table",
        markers:true,
        start:"50% 20%",
        end:"50% 100%",
        scrub:3,
        pin:true,
},
});
const tl6= gsap.timeline({
                   
        scrollTrigger:{
        trigger:".popular__table",
        markers:true,
        start:"60% 20%",
        end:"60% 100%",
        scrub:3,
        pin:true,
},
});
const tl7 = gsap.timeline({
                   
        scrollTrigger:{
        trigger:".popular__table",
        markers:true,
        start:"70% 20%",
        end:"70% 100%",
        scrub:3,
        pin:true,
},
});
const tl8 = gsap.timeline({
                   
        scrollTrigger:{
        trigger:".popular__table",
        markers:true,
        start:"80% 20%",
        end:"80% 100%",
        scrub:3,
        pin:true,
},
});
const tl9 = gsap.timeline({
                   
        scrollTrigger:{
        trigger:".popular__table",
        markers:true,
        start:"90% 20%",
        end:"90% 100%",
        scrub:3,
        pin:true,
},
});
const tl10 = gsap.timeline({
                   
        scrollTrigger:{
        trigger:".popular__table",
        markers:true,
        start:"100% 20%",
        end:"100% 100%",
        scrub:3,
        pin:true,
},
});


tl.to(movil3,{   
          display:'inline',
          right:'1%',
          ease:'power1',
          duration:500},
          "-=500"); 
tl3.to(movil3,{   
          display:'inline',
          right:'2%',
          ease:'power1',
          duration:500},
          "-=500"); 
tl4.to(movil3,{   
          display:'inline',
          right:'3%',
          ease:'power1',
          duration:500},
          "-=500");                 
tl5.to(movil3,{   
          display:'inline',
          right:'4%',
          ease:'power1',
          duration:500},
          "-=500"); 
 tl6.to(movil3,{   
          display:'inline',
          right:'5%',
          ease:'power1',
          duration:500},
          "-=500"); 
tl7.to(movil3,{   
          display:'inline',
          right:'6%',
          ease:'power1',
          duration:500},
          "-=500");
tl8.to(movil3,{   
          display:'inline',
          right:'7%',
          ease:'power1',
          duration:500},
          "-=500"); 
 tl9.to(movil3,{   
          display:'inline',
          right:'8%',
          ease:'power1',
          duration:500},
          "-=500"); 
tl10.to(movil3,{   
          display:'inline',
          right:'9%',
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
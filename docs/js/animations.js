gsap.registerPlugin(ScrollTrigger);


gsap.to('#movil__animated',{
   duration:5,
   x:300,
   ease:'power3',
   scrollTrigger:"#movil__animated"

});


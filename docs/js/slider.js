
 var swiper = new Swiper(".slide-content", {

     freeMode: true,
     slidesPerView: '3',
     spaceBetween: 0,
     loop: false,
     centerSlide: 'false',
     fade: 'true',
     grabCursor: 'true',
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
       dynamicBullets: true,
     },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },

     breakpoints:{
         0: {
             slidesPerView: 1,
         },
         290: {
             slidesPerView: 2,
         },
         500: {
             slidesPerView: 3,
         },
         500: {
           slidesPerView: 4,
       },
          
     },
   });



//    let travels = [{
//     title: "8 días en Islandia en hotel ****",
//     paragraph: "Desde 1299€ con vuelos, hotel y guia",
//     imageUrl: "../images/slider/1.png"
// },
// {
//     title: "Viaje a Delhi, Jaipur y Agra",
//     paragraph: "Desde 1189€ con vuelos, hotel y guia",
//     imageUrl: "../images/slider/2.png"
// },
// {
//     title: "6 días en Noruega en hotel",
//     paragraph: "Desde 1299€ con vuelos, hotel y guia",
//     imageUrl: "../images/slider/1.png"
// },
// {
//     title: "Tailandia",
//     paragraph: "8 viajes",
//     imageUrl: "./images/popular/tailandia.png"
// },
// {
//     title: "Vietnam",
//     paragraph: "12 viajes",
//     imageUrl: "./images/popular/vietnam.png"
// },
// {
//     title: "Jordania",
//     paragraph: "8 viajes",
//     imageUrl: "./images/popular/jordania.png"
// },
// ];

// const popular_div = document.getElementById("popular__table");
// let item='';
// function showDivByDiv() {
//     let divs = travels.map(item => `<div class='popular__element' style='background-image: linear-gradient(180deg, #27262616 0%, #00000061 100%), url(
//     ${item.imageUrl});background-position:49% 100%;background-size:cover'> <h3 class='popular__popular'>${item.title}</h3><p class='popular__features'>${item.paragraph}</p></div>`)
//         .join("")
//         popular_div.innerHTML += divs
// }

// showDivByDiv();





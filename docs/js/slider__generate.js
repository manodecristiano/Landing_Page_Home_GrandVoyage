
let swiper = new Swiper(".slide-content", {

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
   
   
   
   
   let slider__travels = [{
    title: "8 días en Islandia en hotel ****",
    paragraph: "Desde 1299€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/1.png"
},
{
    title: "Viaje a Delhi, Jaipur y Agra",
    paragraph: "Desde 1189€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/2.png"
},
{
    title: "6 días en Noruega en hotel",
    paragraph: "Desde 1299€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/3.png"
},
{
    title: "España Slow: Levante, Andalucía y Madrid",
    paragraph: "Desde 999€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/4.png"
},
{
    title: "Viaje en privado a Irán",
    paragraph: "Desde 999€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/5.png"
},
{
    title: "Viaje por París e Italia en 9 días",
    paragraph: "Desde 999€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/6.png"
},
{
    title: "Viaje a Estambul y Capadocia",
    paragraph: "Desde 999€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/7.png"
  },
{
    title: "Viaje organizado: Turquía en 10 días",
    paragraph: "Desde 999€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/8.png"
},
{
    title: "Viaje a Maldivas 8 días",
    paragraph: "Desde 999€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/9.png"
},
{
    title: "Viaje a Tierra Santa y Jordania de 11 días",
    paragraph: "Desde 999€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/10.png"
},
{
    title: "Viaje a Sicilia y el Sur de Italia",
    paragraph: "Desde 999€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/11.png"
},
{
    title: "Viaje Turista: España, Francia e Italia",
    paragraph: "Desde 999€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/12.png"
  },
  {
    title: "Viaje a Delhi, Jaipur y Agra",
    paragraph: "Desde 1189€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/2.png"
},
{
    title: "6 días en Noruega en hotel",
    paragraph: "Desde 1299€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/3.png"
},
{
    title: "Circuito organizado por Perú completo de 11 días",
    paragraph: "Desde 999€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/4.png"
},
{
    title: "Viaje organizado de lujo a las islas Maldivas",
    paragraph: "Desde 999€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/5.png"
},
{
    title: "Viaje a Turquía con todo incluído",
    paragraph: "Desde 999€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/6.png"
},
{
    title: "Viaje a Madagascar 9 días",
    paragraph: "Desde 999€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/7.png"
  },
{
    title: "Viaje a Jordania y el Mar Muerto 8 días",
    paragraph: "Desde 999€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/8.png"
},
{
    title: "Circuito por el norte de Italia: Milán, Roma y la Toscana",
    paragraph: "Desde 999€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/9.png"
},
{
    title: "Viaje combinado a Tailandia y Maldivas",
    paragraph: "Desde 999€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/10.png"
},
{
    title: "Viaje a Seychelles en hoteles de 5 estrellas",
    paragraph: "Desde 999€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/11.png"
},
{
    title: "Luna de miel en Sri Lanka e islas Maldivas",
    paragraph: "Desde 999€ con vuelos, hotel y guia",
    imageUrl: "./images/slider/12.png"
  },
];

const slider_div = document.getElementById("slider-1");
let item__slider='';
function showDivByDiv() {
    let divs = slider__travels.map(item__slider => `<div class='card swiper-slide'><div class='image-content'> <div class='card-image'> <img src=${item__slider.imageUrl} alt="" class="card-img"> </div></div><div class='card-content'> <h2 class='name'>${item__slider.title}</h2><p class='description'>${item__slider.paragraph}</p></div></div>`)
        .join("")
        slider_div.innerHTML += divs
}


showDivByDiv();








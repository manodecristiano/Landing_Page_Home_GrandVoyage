let opinions= [{
    title: "Viajes a medida ",
    imageUrl: "./images/opiniones/1opinion.jpg"
},{
    title: "Comprometidos y seguros ",
    imageUrl: "./images/opiniones/2opinion.jpg"
},{
    title: "El mejor viaje de mi vida ",
    imageUrl: "./images/opiniones/3opinion.jpg"
},{
    title: "Estan a tu lado siempre",
    imageUrl: "./images/opiniones/4opinion.jpg"
},{
    title: "Todo 5 *****",
    imageUrl: "./images/opiniones/5opinion.jpg"
},{
    title: "Viaje a Tailandia 10 días increíble ",
    imageUrl: "./images/opiniones/6opinion.jpg"
},{
    title: "Repetire con GrandVoyage",
    imageUrl: "./images/opiniones/7opinion.jpg"
},{
    title: "Viaje inolvidable ",
    imageUrl: "./images/opiniones/8opinion.jpg"
},{
    title: "Mis dieces ",
    imageUrl: "./images/opiniones/9opinion.jpg"
}
];

const carrusel_div = document.getElementById("carrusel__track");
let item__carrusel="";
function showDivByDiv() {
    let divs = opinions.map(item__carrusel => `<div class='carrusel__slide'><button class='carrusel__button'  style=' background-position: center;background-image: linear-gradient(180deg, #27262616 0%, #00000061 100%), url(${item__carrusel.imageUrl});'></button><div class='carrusel__text'><h4 class='carrusel__title'>${item__carrusel.title}</h4></div></div>`).join("")
        carrusel_div.innerHTML += divs
}

showDivByDiv();

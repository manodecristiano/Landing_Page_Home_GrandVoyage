let opinions= [
{
    title: "Viajes a medida 1",
    imageUrl: "./images/opiniones/1opinion.jpg"
},{
    title: "Comprometidos y seguros 2",
    imageUrl: "./images/opiniones/2opinion.jpg"
},{
    title: "El mejor viaje de mi vida 3",
    imageUrl: "./images/opiniones/3opinion.jpg"
},{
    title: "Estan a tu lado siempre 4",
    imageUrl: "./images/opiniones/4opinion.jpg"
},{
    title: "Todo 5 *****",
    imageUrl: "./images/opiniones/5opinion.jpg"
},{
    title: "Viaje a Tailandia 6 días increíble ",
    imageUrl: "./images/opiniones/6opinion.jpg"
},{
    title: "Repetire 7 con GrandVoyage",
    imageUrl: "./images/opiniones/7opinion.jpg"
},
{
    title: "Viajes a medida 1",
    imageUrl: "./images/opiniones/1opinion.jpg"
},{
    title: "Comprometidos y seguros 2",
    imageUrl: "./images/opiniones/2opinion.jpg"
},{
    title: "El mejor viaje de mi vida 3",
    imageUrl: "./images/opiniones/3opinion.jpg"
},{
    title: "Estan a tu lado siempre 4",
    imageUrl: "./images/opiniones/4opinion.jpg"
},{
    title: "Todo 5 *****",
    imageUrl: "./images/opiniones/5opinion.jpg"
},{
    title: "Viaje a Tailandia 6 días increíble ",
    imageUrl: "./images/opiniones/6opinion.jpg"
},{
    title: "Repetire 7 con GrandVoyage",
    imageUrl: "./images/opiniones/7opinion.jpg"
},
];

const carrusel_div = document.getElementById("carousel__wrapper");
let item__carrusel="";
function showDivByDiv() {
    let divs = opinions.map(item__carrusel => `
    <div class='carousel__slide'>
             <button class='carousel__image'  style=' background-position: center;background-image: linear-gradient(180deg, #27262616 0%, #00000061 100%), url(${item__carrusel.imageUrl});'>
             </button>
             <div class='carrusel__text'>
                 <h4 class='carrusel__title'>${item__carrusel.title}</h4>
            </div>
    </div>`
    ).join("")
        carrusel_div.innerHTML += divs
}

showDivByDiv();



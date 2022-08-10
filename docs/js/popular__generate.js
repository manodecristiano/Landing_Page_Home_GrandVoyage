let travels = [{
    title: "Islandia",
    paragraph: "12 viajes",
    imageUrl: "./images/popular/islandia.png"
},
{
    title: "Egipto",
    paragraph: "8 viajes",
    imageUrl: "./images/popular/egipto.png"
},
{
    title: "India",
    paragraph: "12 viajes",
    imageUrl: "./images/popular/india.png"
},
{
    title: "Tailandia",
    paragraph: "8 viajes",
    imageUrl: "./images/popular/tailandia.png"
},
{
    title: "Vietnam",
    paragraph: "12 viajes",
    imageUrl: "./images/popular/vietnam.png"
},
{
    title: "Jordania",
    paragraph: "8 viajes",
    imageUrl: "./images/popular/jordania.png"
},
];

const popular_div = document.getElementById("popular__table");
let item='';
function showDivByDiv() {
    let divs = travels.map(item => `<div class='popular__element' style='background-image: linear-gradient(180deg, #27262616 0%, #00000061 100%), url(
    ${item.imageUrl});background-position:49% 100%;background-size:cover'> <h3 class='popular__popular'>${item.title}</h3><p class='popular__features'>${item.paragraph}</p></div>`)
        .join("")
        popular_div.innerHTML += divs
}

showDivByDiv();


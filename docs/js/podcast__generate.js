let podcasts = [{

    href: "https://www.ivoox.com/staytick-alojamiento-bajo-suscripcion-nabil-el-shafaey-audios-mp3_rf_81095189_1.html",
    imageUrl: "./images/podcast/podcast1.png"
},
{
    href: "https://www.ivoox.com/airhopping-interrail-viajes-itziar-audios-mp3_rf_73497002_1.html",
    imageUrl: "./images/podcast/podcast5.png"
},
{
    href: "https://www.ivoox.com/inteligencia-artificial-sector-hotelero-tiago-audios-mp3_rf_79972999_1.html",
    imageUrl: "./images/podcast/podcast3.png"
},
{
    href: "https://www.ivoox.com/devolver-poder-a-manos-del-viajero-audios-mp3_rf_72846660_1.html",
    imageUrl: "./images/podcast/podcast6.png"
},
{
    href: "https://www.ivoox.com/woonivers-alternativa-tecnologica-a-burocracia-audios-mp3_rf_78418079_1.html",
    imageUrl: "./images/podcast/podcast4.png"
},
{
    href: "https://www.ivoox.com/espacio-como-industria-turistica-kemel-kharbachi-audios-mp3_rf_80506926_1.html",
    imageUrl: "./images/podcast/podcast2.png"
},
];

const podcast_div = document.getElementById("podcast");
let item__podcast='';
function showDivByDiv() {
    let divs = podcasts.map(item__podcast => `<a  href=${item__podcast.href}>
                                       <img src=${item__podcast.imageUrl} alt='Podcast de Grandvoyage'>
                                     </a>`)
        .join("")
        podcast_div.innerHTML += divs
}

showDivByDiv();
showDivByDiv();

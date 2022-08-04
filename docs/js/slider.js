(function(){

    /*con [...] creas una array en vez de un nodo  */
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#be');
    let value=0;

buttonNext.addEventListener('click',() => {
 
    changePosition2(++value);

})

buttonBefore.addEventListener('click',() => {
    changePosition2(--value);

})

const  changePosition = (add) => {
  console.log(add);
    const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;

    posSlider=Number(currentTestimony);

    sliders[posSlider-1].classList.remove('testimony__body--show');

    posSlider+= add;

    if(posSlider === sliders.length+1 || posSlider === 0) 
    { posSlider = posSlider === 0 ? sliders.length : 1 };

    sliders[posSlider-1].classList.add('testimony__body--show');

}

const changePosition2 = (val) => {

    const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
    posSlider=Number(currentTestimony);

    if(value===-1){
     
        sliders[posSlider-1].classList.remove('testimony__body--show');
        value=sliders.length-1;

     }else if(value >= sliders.length){
        
         value= 0;
         sliders[sliders.length-1].classList.remove('testimony__body--show');

       }else{
       
         sliders[posSlider-1].classList.remove('testimony__body--show');

       }
       
       sliders[value].classList.add('testimony__body--show');

}






})();
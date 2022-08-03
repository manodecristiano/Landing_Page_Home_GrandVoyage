(function(){

    const titleQuestions = [...document.querySelectorAll('.questions__title')];
  
  
    titleQuestions.forEach( question=>{

        question.addEventListener('click',() => {
          
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate');





/* si el height es igual a 0*/
               if(answer.clientHeight===0) {
/*Nos da el alto minimo para que algo se muestre en este caso el <p>*/
                   height=answer.scrollHeight;
               }

               answer.style.height = `${height}px`;

        })
    });

})();
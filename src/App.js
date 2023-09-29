  const sliderPages = document.querySelectorAll('.sliderPages');
  const containerContentSpans = document.querySelectorAll('.containerContent > a > span');
  const sliderNavegationLi = document.querySelectorAll('.numbersOl > li'); 
  //arrays
  const sliderPagesArray = Array.from(sliderPages);  
  const containerContentSpansArray = Array.from(containerContentSpans);
  const sliderNavegationLiArray = Array.from(sliderNavegationLi);

  function scrollDown(i) {
          sliderNavegationLiArray[i+1].classList.add('activeSlide')                 
          sliderPagesArray[i+1].classList.add('sliderShow');
          sliderPagesArray[i+1].classList.remove('sliderUp');
          containerContentSpansArray[i+1].classList.add('animationSpan');         
          containerContentSpansArray[i+1].classList.remove('spanPageUp');  
          //adiciona e remove as classes atuais
          sliderNavegationLiArray[i].classList.remove('activeSlide')
          sliderPagesArray[i].classList.remove('sliderShow');
          sliderPagesArray[i].classList.add('sliderUp');
          containerContentSpansArray[i].classList.remove('animationSpan');  
          containerContentSpansArray[i].classList.add('spanPageUp');  
          //remove as classes anteriores
          if(i > 0){
            sliderPagesArray[i-1].classList.remove('sliderUp');  
            containerContentSpansArray[i-1].classList.remove('spanPageUp');
          }           
  }
  function scrollUp(i) {
               
  }

  for(let i = 0; i < sliderPagesArray.length; i++){

    sliderPagesArray[i].addEventListener('wheel', (event) => {
        var y = event.deltaY;
        
        if( y > 0 && i < 4){     
          //adiciona e remove as classes posteriores  
          scrollDown(i)
        }
        else if (y < 0 && i <= 4){
          //adiciona e remove as classes anteriores
          if( i > 0){
            sliderNavegationLiArray[i-1].classList.add('activeSlide');
            sliderPagesArray[i-1].classList.add('sliderShow');
            sliderPagesArray[i-1].classList.remove('sliderUp');
            containerContentSpansArray[i-1].classList.add('animationSpan');
          }
          containerContentSpansArray[i-1].classList.remove('spanPageUp');              
          //adiciona e remove as classes atuais
          sliderPagesArray[i].classList.remove('sliderShow');
          sliderPagesArray[i].classList.add('sliderUp');
          sliderNavegationLiArray[i].classList.remove('activeSlide');
          containerContentSpansArray[i].classList.remove('animationSpan');
          containerContentSpansArray[i].classList.add('spanPageUp');
          //remove as classes posteriores       
          if( i < 4) {
            sliderPagesArray[i+1].classList.remove('sliderUp');  
            containerContentSpansArray[i+1].classList.remove('spanPageUp');  
          }

        }
    });
    //evento de Click no nav menu
    sliderNavegationLiArray[i].addEventListener('click', (event) => {
      //sliderPagesArray forEach: para adicionar o sliderUp em todas as paginas, em seguida removendo da pagina selecionada e adicionando o sliderShow na pagina selecionada
      sliderPagesArray.forEach((item, index) => {
        item.classList.add("sliderUp");
        item.classList.remove("sliderShow");
      });
      sliderPagesArray[i].classList.remove('sliderUp');
      sliderPagesArray[i].classList.add('sliderShow');
      // removendo o activeSlide de toda as li e adicionando na que foi clicada.
      sliderNavegationLiArray.forEach((item, index) => {
        item.classList.remove('activeSlide')
      });
      sliderNavegationLiArray[i].classList.add('activeSlide');

      //Mesma lógica do sliderPagesArray
      containerContentSpansArray.forEach((item, index) => {
        item.classList.add('spanPageUp');
        item.classList.remove('animationSpan');
      })
      containerContentSpansArray[i].classList.remove('spanPageUp');
      containerContentSpansArray[i].classList.add('animationSpan');
    });

    var touchY;
    sliderPagesArray[i].addEventListener('touchstart', (event) => {
      event.preventDefault();
      var y = event.changedTouches[0];
      touchY = y.pageY;

  }, false);
  sliderPagesArray[i].addEventListener('touchend', (event) => {
    event.preventDefault();
    var y = event.changedTouches[0];
    directionY = y.pageY - touchY;
    
    if( directionY < 0 && i < 4 ){     
      //adiciona e remove as classes posteriores
      scrollDown(i) 
    }
    else if (directionY >  0 && i <= 4){
      //adiciona e remove as classes anteriores
      sliderNavegationLiArray[i-1].classList.add('activeSlide')
      sliderPagesArray[i-1].classList.add('sliderShow');
      sliderPagesArray[i-1].classList.remove('sliderUp');
      containerContentSpansArray[i-1].classList.add('animationSpan');
      containerContentSpansArray[i-1].classList.remove('spanPageUp');

      //adiciona e remove as classes atuais
      sliderPagesArray[i].classList.remove('sliderShow');
      sliderPagesArray[i].classList.add('sliderUp');
      sliderNavegationLiArray[i].classList.remove('activeSlide');
      containerContentSpansArray[i].classList.remove('animationSpan');
      containerContentSpansArray[i].classList.add('spanPageUp');

      //remove as classes posteriores
      sliderPagesArray[i+1].classList.remove('sliderUp');  
      containerContentSpansArray[i+1].classList.remove('spanPageUp');      
    }
}, false);
  }
  const sliderPages = document.querySelectorAll('.sliderPages');
  const containerContentSpans = document.querySelectorAll('.containerContent > a > span');
  const sliderNavegationLi = document.querySelectorAll('.numbersOl > li'); 
  //arrays
  const sliderPagesArray = Array.from(sliderPages);  
  const containerContentSpansArray = Array.from(containerContentSpans);
  const sliderNavegationLiArray = Array.from(sliderNavegationLi);

  const arrayTest = [sliderPagesArray, containerContentSpansArray, sliderNavegationLiArray]

  for(let i = 0; i < sliderPagesArray.length; i++){

    sliderPagesArray[i].addEventListener('wheel', (event) => {
        var y = event.deltaY;
        
        if( y > 0 && i < 4){     
          //adiciona e remove as classes posteriores  
          arrayTest.forEach((item) => {
            item[i+1].classList.add('showElement');
            item[i+1].classList.remove('mouseScrolled');
            item[i].classList.add('mouseScrolled');
            item[i].classList.remove('showElement');
            if(i  > 0){
              item[i-1].classList.remove('mouseScrolled')
            } 
          })     
        }
        else if (y < 0 && i <= 4){
          //adiciona e remove as classes anteriores
          arrayTest.forEach((item) => {
            if( i > 0){
              item[i-1].classList.add('showElement');
            }
            item[i-1].classList.remove('mouseScrolled');
            item[i].classList.add('mouseScrolled');
            item[i].classList.remove('showElement');
            if(i < 4){
              item[i+1].classList.remove('mouseScrolled');
            }
          })
        }
    });
    //evento de Click no nav menu
    sliderNavegationLiArray[i].addEventListener('click', (event) => {
      sliderPagesArray.forEach((item, index) => {
        item.classList.add("mouseScrolled");
        item.classList.remove("showElement");
      });
      sliderPagesArray[i].classList.remove('mouseScrolled');
      sliderPagesArray[i].classList.add('showElement');
      // removendo o showElement de toda as li e adicionando na que foi clicada.
      sliderNavegationLiArray.forEach((item, index) => {
        item.classList.remove('showElement')
      });
      sliderNavegationLiArray[i].classList.add('showElement');

      //Mesma lógica do sliderPagesArray
      containerContentSpansArray.forEach((item, index) => {
        item.classList.add('mouseScrolled');
        item.classList.remove('showElement');
      })
      containerContentSpansArray[i].classList.remove('mouseScrolled');
      containerContentSpansArray[i].classList.add('showElement');
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
      sliderNavegationLiArray[i-1].classList.add('showElement')
      sliderPagesArray[i-1].classList.add('showElement');
      sliderPagesArray[i-1].classList.remove('mouseScrolled');
      containerContentSpansArray[i-1].classList.add('showElement');
      containerContentSpansArray[i-1].classList.remove('mouseScrolled');

      //adiciona e remove as classes atuais
      sliderPagesArray[i].classList.remove('showElement');
      sliderPagesArray[i].classList.add('mouseScrolled');
      sliderNavegationLiArray[i].classList.remove('showElement');
      containerContentSpansArray[i].classList.remove('showElement');
      containerContentSpansArray[i].classList.add('mouseScrolled');

      //remove as classes posteriores
      sliderPagesArray[i+1].classList.remove('mouseScrolled');  
      containerContentSpansArray[i+1].classList.remove('mouseScrolled');      
    }
}, false);
  }
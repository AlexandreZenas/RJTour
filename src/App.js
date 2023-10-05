//arrays
const sliderPagesArray = Array.from(document.querySelectorAll('.sliderPages'));  
const containerContentSpansArray = Array.from(document.querySelectorAll('.containerContent > a > span'));
const sliderNavegationLiArray = Array.from(document.querySelectorAll('.numbersOl > li'));

const arrayTest = [sliderPagesArray, containerContentSpansArray, sliderNavegationLiArray]

  for(let i = 0; i < sliderPagesArray.length; i++){

  const scrollDown = () => {
    arrayTest.forEach((item) => {
      item[i+1].classList.add('showElement');
      item[i+1].classList.remove('mouseScrolled');
      item[i].classList.add('mouseScrolled');
      item[i].classList.remove('showElement');
      if(i  > 0){item[i-1].classList.remove('mouseScrolled')} 
    })  
  }
  const scrollUp = () => {
    arrayTest.forEach((item) => {
      if( i > 0){item[i-1].classList.add('showElement');}
      item[i-1].classList.remove('mouseScrolled');
      item[i].classList.add('mouseScrolled');
      item[i].classList.remove('showElement');
      if(i < 4){item[i+1].classList.remove('mouseScrolled');}
    })
  }
  //scroll
  sliderPagesArray[i].addEventListener('wheel', (event) => {
      var y = event.deltaY;
      
      if( y > 0 && i < 4){     
        scrollDown(i)
      }
      else if (y < 0  && i > 0){
        scrollUp(i)
      }
  });
  //touch
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
    else if (directionY > 0 && i > 0){
      scrollUp(i)   
    }
  }, false);

  //click

  // remove 
  sliderNavegationLiArray[i].addEventListener('click', (event) => {
    // console.log(sliderNavegationLiArray[i])
    // console.log(i)
    console.log(arrayTest)
    arrayTest.forEach((item, index) => {
      item[''].classList.add("mouseScrolled");
      item[i].classList.add("showElement");
      console.log(item)
      // item.classList.add("mouseScrolled");
      // item[i].classList.add("showElement");
    })
    // if( i < 4){     
    //   scrollDown(i)
    // }
    // else if (i > 0){
    //   scrollUp(i)
    // }
    // sliderPagesArray.forEach((item, index) => {
    //   item.classList.add("mouseScrolled");
    //   item.classList.remove("showElement");
    // });
    // sliderNavegationLiArray.forEach((item, index) => {
    //   item.classList.remove('showElement')

    // });
    // containerContentSpansArray.forEach((item, index) => {
    //   item.classList.add('mouseScrolled');
    //   item.classList.remove('showElement');
    // });
    // sliderPagesArray[i].classList.remove('mouseScrolled');
    // sliderPagesArray[i].classList.add('showElement');
    // sliderNavegationLiArray[i].classList.add('showElement');
    // containerContentSpansArray[i].classList.remove('mouseScrolled');
    // containerContentSpansArray[i].classList.add('showElement'); 

  });
  }
  
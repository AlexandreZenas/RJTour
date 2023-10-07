//arrays
const sliderPagesArray = Array.from(document.querySelectorAll('.sliderPages'));  
const sliderSpansArray = Array.from(document.querySelectorAll('.containerContent > a > span'));
const navegationLiArray = Array.from(document.querySelectorAll('.numbersOl > li'));

const arrayTest = [sliderPagesArray, sliderSpansArray, navegationLiArray]

  for(let i = 0; i < sliderPagesArray.length; i++){
  const scrollDown = () => {
    arrayTest.forEach((item) => {
      item[i+1].classList.add('showElement');
      item[i+1].classList.remove('mouseScrolled');
      item[i].classList.add('mouseScrolled');
      item[i].classList.remove('showElement');
      if(i > 0){item[i-1].classList.remove('mouseScrolled')} 
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
      
      if( y > 0 && i < 4){scrollDown(i)}
      else if (y < 0  && i > 0){scrollUp(i)}
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
    
    if( directionY < 0 && i < 4 ){scrollDown(i)}
    else if (directionY > 0 && i > 0){scrollUp(i)}
  },false);

  //click
  navegationLiArray[i].addEventListener('click', () => {
    arrayTest.map((object) => {
      object.forEach((item) => {
        // console.log(item)
        item.classList.add("mouseScrolled");
        item.classList.remove("showElement");
      });
    //manipulando os elementos de acordo com o indice [i] dentro de cada objeto
    object[i].classList.remove('mouseScrolled');
    object[i].classList.add('showElement');
    });
  });
}  
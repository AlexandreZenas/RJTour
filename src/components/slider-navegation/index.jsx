import dadosSlides from '../Mocks';
import '../animations/index.css';
import './index.css';
import { forwardRef, useState, useEffect } from 'react';

 const SliderNavegation = forwardRef(( props, ref ) =>  {
  const [ x, setX] = useState();
  useEffect(() => {
    setX(props.slideClick)
  }, [props.slideClick])
  console.log(x == 'slidePage-2', x)
  console.log(props.slider)
  return (
    <nav className='sliderNavegation'>
        <ol className='numbersOl' ref={ref}>
            <li onClick={props.handlerClick} id={`slidePage-1`} className={`${props.slider['0']} ${x == 'slidePage-1' ? 'showElement' : ''}`} >1<div className="textLine"></div></li>
            <li onClick={props.handlerClick} id={`slidePage-2`} className={`${props.slider['1']} ${x == 'slidePage-2' ? 'showElement' : ''}`}>2<div className="textLine"></div></li>
            <li onClick={props.handlerClick} id={`slidePage-3`} className={`${props.slider['2']} ${x == 'slidePage-3' ? 'showElement' : ''}`}>3<div className="textLine"></div></li>
            <li onClick={props.handlerClick} id={`slidePage-4`} className={`${props.slider['3']} ${x == 'slidePage-4' ? 'showElement' : ''}`}>4<div className="textLine"></div></li>
            <li onClick={props.handlerClick} id={`slidePage-5`} className={`${props.slider['4']} ${x == 'slidePage-5' ? 'showElement' : ''}`}>5<div className="textLine"></div></li>
        </ol>
    </nav>
  )
});

export default SliderNavegation;
import '../animations/index.css';
import './index.css';
import { forwardRef } from 'react';

 const SliderNavegation = forwardRef((slider, navegationLi) =>  {
  return (
    <nav className='sliderNavegation'>
        <ol className='numbersOl' ref={navegationLi}>
            <li className={`${slider.slider[0]}`} >1<div className="textLine"></div></li>
            <li className={`${slider.slider[1]}`}>2<div className="textLine"></div></li>
            <li className={`${slider.slider[2]}`}>3<div className="textLine"></div></li>
            <li className={`${slider.slider[3]}`}>4<div className="textLine"></div></li>
            <li className={`${slider.slider[4]}`}>5<div className="textLine"></div></li>
        </ol>
    </nav>
  )
});

export default SliderNavegation;
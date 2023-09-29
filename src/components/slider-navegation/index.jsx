import './index.css'

export default function SliderNavegation() {

  return (
    <nav className='sliderNavegation'>
        <ol className='NumbersOl'>
            <li className="activeSlide">1<div className="textLine"></div></li>
            <li>2<div className="textLine"></div></li>
            <li>3<div className="textLine"></div></li>
            <li>4<div className="textLine"></div></li>
            <li>5<div className="textLine"></div></li>
        </ol>
    </nav>
  )
}

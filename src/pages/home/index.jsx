import './index.css';
import Navbar from '../../components/navbar';
import SliderNavegation from '../../components/slider-navegation';
import '../../components/animations/animations.css'
import '../../components/slider-navegation/index.css'
import {useState, useRef, useEffect} from 'react';


export default function Home() {
    
    const [slider, setSlider] = useState({[1]: true});
    const [sliderIndex, setSliderIndex] = useState(0);

    const setSliderVisible = (sliderId, visible) => {     
        setSlider((prev) => ({
            ...prev, [sliderId]: visible
        }))
    }
    const sliderPagination = (event) => {
        if(event.deltaY > 0){
            setSliderVisible(sliderIndex, false)
            setSliderVisible(Math.min(sliderIndex + 1 , 5),true)
            setSliderIndex(prev => Math.min(prev + 1 , 5))
        }
        else if(event.deltaY < 0){
            setSliderVisible(sliderIndex, false)
            setSliderVisible(Math.max(sliderIndex - 1 , 1),true)
            setSliderIndex(prev => Math.max(prev - 1 , 1))
            }        
        }   
        useEffect( () => {
            console.log(sliderIndex)
            console.log(slider)
        },[sliderIndex, slider])
        
  return (
    <>     
    <Navbar/>
    <SliderNavegation/>    
    <section className='mainBanner' >
        {/* <div className='bannerContainer'> */}
            {/* sliderPage-1 */}
            <div id="sliderPage-1" className={`pages ${slider[1] ? 'visibilityPage' : 'animationPageUp'}`} onWheel={sliderPagination} >
                <div className='containerContent' >
                    <h1 className='titleH1 textAnimation'>INNOVATIVE  EXPERIENCE</h1>
                    <a href='#' target="_parent" rel='noopener noreferrer'><span className="animationSpan">ILLUSTRATIVE BUTTON</span></a>
                </div>
            </div>
            {/* sliderPage-2 */}
            <div id="sliderPage-2" className={`pages ${slider[2] ? 'visibilityPage' : 'animationPageUp'}`} onWheel={sliderPagination}>
                <div className='containerContent'>
                    <h1>REDEFININDO  A VIDA DE  LUXO</h1>
                    <a href="#" target="_blank"><span className="">ILLUSTRATIVE BUTTON</span></a>
                </div>  
            </div>
                {/* sliderPage-3 */}
            <div id="sliderPage-3" className={`pages ${slider[3] ? 'visibilityPage' : 'animationPageUp'}`} onWheel={sliderPagination}>
                <div className='containerContent'>
                    <h1>LUXO  SELECIONADO</h1>
                    <a href="#" target="_blank"><span className="">ILLUSTRATIVE BUTTON</span></a>
                </div>
            </div>
            {/* sliderPage-4 */}
            <div id="sliderPage-4" className={`pages ${slider[4] ? 'visibilityPage' : 'animationPageUp'}`} onWheel={sliderPagination}>
                <div className=' containerContent'>
                    <h1>VIENA 1010</h1>
                    <a href="#" target="_blank"><span className="">ILLUSTRATIVE BUTTON</span></a>
                </div>
            </div>
            {/* sliderPage-5 */}
            <div id="sliderPage-5" className={`pages  ${slider[5] ? 'visibilityPage' : 'animationPageUp'}`} onWheel={sliderPagination}>
                <div className= "containerContent">
                    <h1>ANDARES DE  LUXO</h1>
                    <a href="#" target="_blank"><span className="">ILLUSTRATIVE BUTTON</span></a>
                </div>
            </div>
        {/* </div> */}
    </section>
    </>
  )
}
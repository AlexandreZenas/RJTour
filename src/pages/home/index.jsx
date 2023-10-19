import './index.css';
import Header from '../../components/header';
import SliderNavegation from '../../components/slider-navegation';
import '../../components/animations/index.css'
import '../../components/slider-navegation/index.css'
import {useState, useRef, useEffect} from 'react';


export default function Home() {
    const slides = useRef({})
    const liRef = useRef(null)
    // const navegationLi = useRef({})
    const [slider, setSlider] = useState({[0]: 'showElement'});     

    useEffect( () => {            
        const arraySlides = Array.from(slides.current?.childNodes)
        const arrayLiRef = Array.from(liRef.current?.childNodes)
        for(let i = 0; i < arraySlides.length ; i++){
            //click
            arrayLiRef[i].addEventListener('click', () => {                
                    // setSlider({[i]: 'showElement'} )  
                    setSlider({[i]: 'showElement'} )  
                    //descobrir maneira de selecionar todas as li e passar uma string(classe) pra cada uma 
            });
            
            
            const scrollDown = () => {
                setSlider({[i]: 'mouseScrolled', [i+1]: 'showElement'})
                }
            const scrollUp = () => {
                setSlider({[i]: 'mouseScrolled', [i-1]: 'showElement'})
                }
            //scroll
            arraySlides[i].addEventListener('wheel', (event) => {
                if(event.deltaY > 0  && i < 4){
                    scrollDown();
                    
                }
                else if(event.deltaY < 0  && i > 0){
                    scrollUp();
                }
            })
            
        }
    },[ ])

  return (
    <main id='home'>     
        <Header/>
        <SliderNavegation slider={slider} ref={liRef}/>    
        <section className='mainBanner' ref={slides}>
                {/* slidePage-1 */}
                <div id="slidePage-1" className={`slidePages ${slider[0] }`}  >
                    <div className='containerContent' > 
                        <h1 className='mainTitleSlider'>INNOVATIVE <br></br> EXPERIENCE</h1>
                        <a href='#' target="_parent" rel='noopener noreferrer'><span className={`${slider[0] }`} >ILLUSTRATIVE BUTTON</span></a>
                    </div>
                </div>
                {/* slidePage-2 */}
                <div id="slidePage-2" className={`slidePages ${slider[1]}`}  >
                    <div className='containerContent'>  
                        <h1>REDEFININDO <br></br> A VIDA DE  LUXO</h1>
                        <a href="#" target="_blank"><span className={`${slider[1] }`}>ILLUSTRATIVE BUTTON</span></a>
                    </div>  
                </div>
                    {/* slidePage-3 */}
                <div id="slidePage-3" className={`slidePages ${slider[2]}`} >
                    <div className='containerContent'>  
                        <h1>LUXO  SELECIONADO</h1>
                        <a href="#" target="_blank"><span className={`${slider[2] }`}>ILLUSTRATIVE BUTTON</span></a>
                    </div>
                </div>
                {/* slidePage-4 */}
                <div id="slidePage-4" className={`slidePages ${slider[3]}`} >
                    <div className=' containerContent'> 
                        <h1>VIENA 1010</h1>
                        <a href="#" target="_blank"><span className={`${slider[3] }`}>ILLUSTRATIVE BUTTON</span></a>
                    </div>
                </div>
                {/* slidePage-5 */}
                <div id="slidePage-5" className={`slidePages  ${slider[4]}`} >
                    <div className= "containerContent"> 
                        <h1>ANDARES DE  LUXO</h1>
                        <a href="#" target="_blank"><span className={`${slider[4] }`}>ILLUSTRATIVE BUTTON</span></a>
                    </div>
                </div>
        </section>
    </main>
  )
}
import dadosSlides from "../Mocks";

const Slides = ({slideClick}) => {
  return dadosSlides.map((item, index) => {
    return (
      <div key={index} id={`slidePage-${index + 1} `} className={`slidePages slidePage-${index + 1} ${slideClick == `slidePage-${index + 1}`? 'showElement' : ''}`}>
        <div className="containerContent">
          <h1 className="mainTitleSlider">{item.title}</h1>
          <a href="#" target="_parent" rel="noopener noreferrer">
            <span className={``}>{item.descritionLink}</span>
          </a>
        </div>
      </div>
    );
  });
};
export default Slides;

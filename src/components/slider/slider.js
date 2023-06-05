import { useContext, useState } from "react";
import './slider.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from "../context/context";


function Slider({slides}) {

    const [currentIndex,setCurrentIndex] = useState(0)

    const theme = useContext(ThemeContext)
    
    const slideStyles = {
        width:'100%',
        height:'100%',
        backgroundImage:`url(${slides[currentIndex].url})`,
        borderRadius:'0%',
        backgroundPosition:'center',
        backgroundSize:'cover',
        transition:'0.5s',

    }


    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    

    return (
        <div className={theme.context === 'dark' ? 'slider-dark' : 'slider-light'}>
            <div className="left-arrow"  onClick={goToPrevious}><FontAwesomeIcon icon={faArrowLeft}/></div>
            <div alt = {slides[currentIndex].title} style={slideStyles}></div>
            <div className="right-arrow" onClick={goToNext}><FontAwesomeIcon icon={faArrowRight}/></div>
            <div className="dots-container">
                {slides.map((slide,slideIndex)=>(
                    <div 
                    className="dot"
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    >●</div>
                ))}
            </div>
        </div>
        
    )
}

export default Slider;





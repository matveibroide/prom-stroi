import { useState } from "react";
import './slider.scss';

function Slider({slides}) {

    const [currentIndex,setCurrentIndex] = useState(0)

    
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
        <div className="slider">
            <div className="left-arrow"  onClick={goToPrevious}>⇐</div>
            <div style={slideStyles}></div>
            <div className="right-arrow" onClick={goToNext}>⇒</div>
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





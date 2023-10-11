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
    <div className='slider-wrapper'>
        <div className="highlight"></div>
        <div className="swiper">
        
        </div>
        <div className="highlight"></div>
    </div>
    
)
}

export default Slider;





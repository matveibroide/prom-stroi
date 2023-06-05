import React, { useContext, useState } from "react";
import './professionals.scss'
import { ThemeContext } from "../context/context";
import img from '../../assets/pic1.jpg'
import img2 from '../../assets/pic2.jpg'
import img3 from '../../assets/pic3.jpg'



function Professionals() {
    
    const [visible, setVisible] = useState({ isOpen: false, currentSlide: null,backContentVisible:true,sectionVisible:false});

    const theme = useContext(ThemeContext);
    

    const handleClick = (index) => {
        setVisible(prevState => ({
            ...prevState,
            currentSlide: index,
            isOpen: true,
            backContentVisible:false,
            sectionVisible:true
        }));
    };

    const handleClickClose = () => {
        setVisible(prevState => ({
            ...prevState,
            backContentVisible:true,
            sectionVisible:false
            
        }));
    }


    const pros =
    [
        {url:`${img}`,title:'Businessman with professional bodyguards'},
        {url:`${img2}`,title:'Businessman with professional bodyguards around bank'},
        {url:`${img3}`,title:'Businessman with professional bodyguards sits in a car'},
    ]

    const titles = ['Personal Protection', 'Residential Security','Travel Security']



    const content = () => {

        if(visible.currentSlide === 0 && visible.sectionVisible) {
            return (
        <div className="test">
            <h1>{titles[visible.currentSlide]}</h1>
            <div alt = {pros[0].title} style = {{backgroundImage:`url(${pros[0].url})`,backgroundSize:'cover'}} className="img-div"></div>
            <p>One of the primary services that professional bodyguards can provide for a rich family is personal protection. This includes ensuring the safety and security of family members at all times, both at home and in public. Bodyguards can help identify and mitigate potential risks and threats, and can use their training and expertise to respond quickly and effectively in the event of an emergency.</p>   
            <div onClick={() => handleClickClose()} 
            className="close-bar">⇐ go back</div>
        </div>
            )
        }

        if(visible.currentSlide === 1 && visible.sectionVisible) {
            return (
        <div className="test">
            <h1>{titles[visible.currentSlide]}</h1>
            <div alt = {pros[1].title} style = {{backgroundImage:`url(${pros[1].url})`,backgroundSize:'cover'}} className="img-div"></div>
            <p>Professional bodyguards can also provide residential security services for a rich family. This includes securing the family's home or estate against potential intruders or other security threats. Bodyguards can conduct regular security checks and patrols of the property, monitor security systems, and implement other security measures to help ensure the safety and security of the family and their property.</p>
            <div onClick={() => handleClickClose()} 
            className="close-bar">⇐ go back</div>
        </div>

            )
        }

        if(visible.currentSlide === 2 && visible.sectionVisible) {
            return (
        <div className="test">
            <h1>{titles[visible.currentSlide]}</h1>
            <div alt = {pros[2].title} style = {{backgroundImage:`url(${pros[2].url})`,backgroundSize:'cover'}} className="img-div"></div>
            <p>For wealthy families who travel frequently, professional bodyguards can provide travel security services. This includes planning and coordinating travel logistics to ensure the safety and security of the family during travel, providing secure transportation services, and conducting</p>
            <div onClick={() => handleClickClose()} 
            className="close-bar">⇐ go back</div>
        </div>
            )
        }
    }
        
    

    

    return (
        
        <div id="pros" className={theme.context === 'dark' ? 'pros-section-dark' : 'pros-section-light'}>
            
            <h1 className="pros-main-header">OUR SERVICES</h1>
            {content()}
            {visible.backContentVisible ? (

<div className="pros-container">
                
{pros.map((slide, slideIndex) => (
    <div
    alt = {pros[slideIndex].title}
    style={{ backgroundImage: `url(${pros[slideIndex].url})`,backgroundSize:'cover' }}
    className="pros"
    key={slideIndex}
>  
    <div className="descr-pros">
        <h1 className="pros-header" 
        onClick={() => handleClick(slideIndex)}>{titles[slideIndex]}</h1>
    </div>
</div>

))}
</div>
                
            ) : null}

    
        </div>
    )

}

export default Professionals;
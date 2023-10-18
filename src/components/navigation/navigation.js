import './navigation.scss'
import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'



const Navigation = ({isNavVisible}) => {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
        

    return (
        <nav style={{transform:`${isNavVisible ? 'translate(0)' : 'translate(100%)'}`}} className="main__navigation" >
            <ul className="main__navigation__items">
                <li id='#pros' className="main__navigation__items__item"><a className='main__navigation__items__item__link'  href="#pros">ПРОЕКТЫ</a></li>
                <li id='#form' className="main__navigation__items__item"><a className='main__navigation__items__item__link' href="#form">ОСТАВИТЬ ЗАЯВКУ</a></li>
                <li id='#contacts' className="main__navigation__items__item"><a className='main__navigation__items__item__link' href="#contacts">КОНТАКТЫ</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;
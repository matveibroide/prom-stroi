import './navigation.scss'
import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'



const Navigation = ({isNavVisible}) => {

    return (
        <nav style={{transform:`${isNavVisible ? 'translate(100%)' : 'translate(0)'}`}} className="main__navigation" >
            <ul className="main__navigation__items">
                <li className="main__navigation__items__item"><a className="main__navigation__items__item__link" href="#pros">ПРОЕКТЫ</a></li>
                <li className="main__navigation__items__item"><a className="main__navigation__items__item__link" href="#form">ОСТАВИТЬ ЗАЯВКУ</a></li>
                <li className="main__navigation__items__item"><a className="main__navigation__items__item__link" href="#contacts">КОНТАКТЫ</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;
import React, {  useContext } from "react";
import './nav.scss'
import { ThemeContext } from "../context/context";

function NavBar() {


    return (
        <nav  className='nav-dark'>
            <ul className='nav-dark__items'>
                <li className="nav-dark__items__item"><a className="nav-dark__items__item__link" href="#pros">Наши проэкты</a> </li>
                <li className="nav-dark__items__item"><a className="nav-dark__items__item__link" href="#contacts">Контакты</a> </li>
            </ul>
        </nav>
    )
}

export default NavBar;
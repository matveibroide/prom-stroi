import React, { useState } from "react";
import './nav.scss';
import {faBars,faX} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from 'react-responsive'


const menu =  <FontAwesomeIcon style = {{cursor:'pointer',color:'yellow'}} size='2xl' icon={faBars} />
const closeBtn = <FontAwesomeIcon style = {{cursor:'pointer',color:'yellow'}} size='2xl' icon={faX} />

function NavBar({onChange}) {
    const [state, setState] = useState({buttonActive:false});
    
    const switchBtn = () => {
        console.log(onChange())
        setState({ ...state, buttonActive: !state.buttonActive });
        console.log(state)
    };

    const menuStyle = state.buttonActive ? 'none' : 'block';
    const closeBtnStyle = state.buttonActive ? 'block' : 'none';
    const navStyle = {
        display:`${closeBtnStyle}`,
        width:'70%'
    }


    
    const isDesktopOrLaptop = useMediaQuery({
        query: '(width>=1220x)'
    })
    const isTablet = useMediaQuery({
    query: '(width<=768px)'
    })
    const isMobile = useMediaQuery({
        query: '(width<=420px)'
    })


    const bigScrNav = (
        <div>
            <nav>
                <ul>
                    <li><a href="#form"></a></li>
                    <li><a href="#contacts"></a></li>
                    <li><a href=""></a></li>
                </ul>
            </nav>
        </div>
    ) 

    return (
        <div 
            style = {
            {   
            width:`${state.buttonActive ? '100%' : '15%'}`,
            transition:'1s',
            }} 
            className="header__nav-wrapper">
            <button style={{display:`${menuStyle}`,background:'transparent',border:'none'}}  onClick={switchBtn}>{menu}</button>
            <nav 
            style={{
            marginLeft:`${isMobile || isTablet ? '0' : 'auto'}`,
            display:`${closeBtnStyle}`,
            width:`${isMobile || isTablet ? '100%' : `50%`}`,
            height:`${isDesktopOrLaptop ? `500px` : `auto`}`,
            padding:`0 ${isMobile ? `5px` : `10px`} 5px 8px`,
            marginTop:`${isMobile ? `70%` : `16%`}`,
            background:'#05051a'}}  
            className='nav-dark'>
                <ul style={{display:`${state.buttonActive ? 'flex' : 'none'}`,
                flexWrap:'wrap',
                width:'100%',
                height:'200px',
                }} 
                    className='nav-dark__items'>
                    <li style={{marginLeft:`${state.buttonActive ? `95` : `auto`}`}} className="nav-dark__items__item">
            <button 
            className="nav-dark__items__item__btn" 
            style={{display:`${closeBtnStyle}`,background:'transparent',border:'none'}} 
            onClick={switchBtn}>{closeBtn}</button>
                    </li>
                    <li style={{width:`${state.buttonActive ? '100%' : '0'}`,transition:1}} className="nav-dark__items__item"><a className="nav-dark__items__item__link" href="#pros">Наши проэкты</a> </li>
                    <li style={{width:`${state.buttonActive ? '100%' : '0'}`,transition:1}} className="nav-dark__items__item"><a className="nav-dark__items__item__link" href="#form">Связаться с нами</a> </li>
                    <li style={{width:`${state.buttonActive ? '100%' : '0'}`,transition:1}} className="nav-dark__items__item"><a className="nav-dark__items__item__link" href="#contacts">Контакты</a> </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
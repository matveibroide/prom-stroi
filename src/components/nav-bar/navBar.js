import React, {  useContext } from "react";
import './nav.scss'
import { ThemeContext } from "../context/context";

function NavBar() {

    const theme = useContext(ThemeContext)
    const navBarStyles = {
    margin: '2em auto',
    fontSize: '2em',
    color: '#a78140',
    listStyle: 'none',
    display: 'flex',
    justifyContent:'space-around',
    }
    return (
        <div style={navBarStyles}  className={theme.context === 'dark' ? 'nav-dark' : 'nav-light'}>
            <li><a href="#about-section">About</a> </li>
            <li><a href="#pros">Our Services</a> </li>
            <li><a href="#contacts">Contacts</a> </li>
        </div>
    )
}

export default NavBar;
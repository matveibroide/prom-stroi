import React from "react";
import './nav.scss'

function NavBar() {

    const navBarStyles = {
    margin: '2em auto',
    fontSize: '2em',
    color: '#a78140',
    listStyle: 'none',
    display: 'flex',
    justifyContent:'space-around',
    }
    return (
        <div style={navBarStyles}  className="Nav">
            <li><a href="#about-section">About</a> </li>
            <li><a href="#pros">Our Services</a> </li>
            <li><a href="#contacts">Contacts</a> </li>
        </div>
    )
}

export default NavBar;
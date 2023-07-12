import { useContext } from 'react';
import './contacts.scss'
import React from 'react';
import { ThemeContext } from '../context/context';



function Contacts() {

  const theme = useContext(ThemeContext)
  return (
    <div className={theme.context === 'dark' ? 'contacts-wrapper-dark' : 'contacts-wrapper-light'}>
      <div id='contacts' className='contacts'>
        <h2>Contact Us</h2>
        <div className="address-wrapper">
          <p>Phone (English):<br/> +972-53-986-06-90</p>
          <p>Phone (Rus):<br/> +972-58-654-4622</p>
          <p>Phone (Hebrew):<br/> +972-54-669-2774</p>
        </div>
      
      </div>
      <div className="links">
        <h2>Useful links</h2>
        <div className="links-inner-wrapper">
          <a href="#form">contact us</a>
          <a href="#pros">services</a>
          <a href="#home">home</a>
        </div>
      </div>
    </div>
    
  );
}

export default Contacts;
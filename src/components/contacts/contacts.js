import { useContext } from 'react';
import './contacts.scss'
import React from 'react';




function Contacts() {

  return (
    <section className='contacts'>
      <div id='contacts' className='contacts__items-wrapper'>
        <h2>Contact Us</h2>
        <div className="address-wrapper">
          <p>Phone (English):<br/> +972-33-986-06-97</p>
          <p>Phone (Russian):<br/> +972-33-986-06-97</p>
          <p>Phone (Hebrew):<br/> +972-33-986-06-97</p>  
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
    </section>
    
  );
}

export default Contacts;
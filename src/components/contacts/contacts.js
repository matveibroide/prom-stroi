
import './contacts.scss'
import React from 'react';




function Contacts() {

  return (
    <footer className='contacts'>
      
      <div id='contacts' className='contacts__items-wrapper'>
        
        <div className="address-wrapper">
          <ul className='address-wrapper__items'>
          <h2 className='contacts__items-wrapper__header'>Телефон</h2>
            <li className='address-wrapper__items__item'>
              <p>Phone (English):<br/> +972-33-986-06-97</p>
            </li>
            <li className='address-wrapper__items__item'>
              <p>Phone (Russian):<br/> +972-33-986-06-97</p>
            </li>
            <li className='address-wrapper__items__item'>
              <p>Phone (Hebrew):<br/> +972-33-986-06-97</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="links">
        <h2 className='contacts__items-wrapper__header'>Полезные ссылки</h2>
        <div className="links-inner-wrapper">
          <a href="#form">contact us</a>
          <a href="#pros">services</a>
          <a href="#home">home</a>
        </div>
      </div>
    </footer>
    
  );
}

export default Contacts;
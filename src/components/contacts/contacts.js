
import './contacts.scss'
import React from 'react';




function Contacts() {

  return (
    <footer id='contacts' className='contacts'>
      
      <div  className='contacts__items-wrapper'>
        
        <div className="address-wrapper">
          <ul className='address-wrapper__items'>
          <h2 className='contacts__items-wrapper__header'>Позвоните нам</h2>
           
              <li style={{marginTop:'auto'}}><p>Телефон:<br/> +972-33-986-06-97</p></li>
            
          </ul>
        </div>
      </div>
      <div className="links">
        <h2 className='contacts__items-wrapper__header'>Полезные ссылки</h2>
        <div className="links-inner-wrapper">
          <a href="#form">Оставить заявку</a>
          <a href="#pros">Проекты</a>
          <a href="#home">home</a>
        </div>
      </div>
    </footer>
    
  );
}

export default Contacts;
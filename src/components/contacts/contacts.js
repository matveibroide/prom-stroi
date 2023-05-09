import './contacts.scss'
import React from 'react';

function Contacts() {
  return (
    <div className="contacts-wrapper">
      <div id='contacts' className='contacts'>
        <h2>Contact Us</h2>
        <div className="address-wrapper">
          <p>Phone: (555) 123-4567</p>
          <p>Address: 123 Main St, Anytown USA 12345</p>
        </div>
      
      </div>
      <div className="links">
        <h2>Useful links</h2>
        <div className="links-inner-wrapper">
          <a href="#about-section">about</a>
          <a href="#pros">services</a>
          <a href="#home">home</a>
        </div>
      </div>
    </div>
    
  );
}

export default Contacts;
import { ThemeContextProvider, ThemeContext } from '../components/context/context';
import './App.scss';
import Header from '../components/header/header';
import NavBar from '../components/nav-bar/navBar';
import Slider from '../components/slider/slider';
import Professionals from '../components/professionals/professionals';
import Contacts from '../components/contacts/contacts';
import Form from '../components/form/form';
import {useContext, useState} from 'react'
import img from '../assets/pic1.jpg'
import img2 from '../assets/pic2.jpg'
import img3 from '../assets/pic3.jpg'
import img4 from '../assets/pic4.jpg'
import logo from '../assets/Best in business.gif'



function App() {
  
  let theme =  useContext(ThemeContext);
  
  const slides =
  [
    
      {url:`${img}`,title:'Businessman with professional bodyguards'},
      {url:`${img2}`,title:'Businessman with professional bodyguards around bank'},
      {url:`${img3}`,title:'Businessman with professional bodyguards sits in a car'},
      {url:`${img4}`,title:'Businessman with professional bodyguards goes out an elevator'}
    
  ]

  const containerStyles = {
    width: '500px',
    height: '280px',
    margin:'0 auto',
    
  }

  return (
    
    <div className='wrapper'>
    <section className="main">
      <Header nav={NavBar}/>
    <img className='main__logo' src={logo} alt="" />
    </section>  
    <Professionals/>
    <Form/> 
    <Contacts></Contacts>
    </div>
    
  );
}

export default App;

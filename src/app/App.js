import { ThemeContextProvider, ThemeContext } from '../components/context/context';
import './App.scss';
import Header from '../components/header/header';
import NavBar from '../components/nav-bar/navBar';
import Slider from '../components/slider/slider';
import Professionals from '../components/professionals/professionals';
import Contacts from '../components/contacts/contacts';
import Form from '../components/form/form';
import {useState} from 'react'
import img from '../assets/pic1.jpg'
import img2 from '../assets/pic2.jpg'
import img3 from '../assets/pic3.jpg'
import logo from '../assets/Best in business.gif'



function App() {
  
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

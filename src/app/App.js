import { ThemeContextProvider, ThemeContext } from '../components/context/context';
import './App.scss';
import Header from '../components/header/header';
import NavBar from '../components/nav-bar/navBar';
import Slider from '../components/slider/slider';
import About from '../components/about/about';
import Professionals from '../components/professionals/professionals';
import Contacts from '../components/contacts/contacts';
import ChangeThemeButton from '../components/changeThemeButton/changeThemeButton';
import {useContext, useState} from 'react'


/* import Form from '../components/form/form'; */


function App() {
  
  let theme =  useContext(ThemeContext);
  
  const slides =
  [
    {url:'http://2.bp.blogspot.com/-Z4b2SSXX570/UQCO16H3-nI/AAAAAAAC7vM/NABZuCgaBeo/s1600/9999999999999999.jpg',title:'army'},
    {url:'https://detective.kiev.ua/wp-content/uploads/2015/06/index09808972.jpg',title:'army'},
    {url:'https://s.hdnux.com/photos/44/14/55/9489271/3/rawImage.jpg',title:'army'},
    {url:'https://secureservercdn.net/45.40.150.81/1da.1b3.myftpupload.com/wp-content/uploads/2018/11/Depositphotos_174776994_l-2015-1280x854.jpg',title:'army'}
  ]

  const containerStyles = {
    width: '500px',
    height: '280px',
    margin:'0 auto',
    
  }

  

  return (
    
    <div className={theme.context === 'dark' ? 'App-dark' : 'App-light' }>
    <ChangeThemeButton/>
    <Header/>
    <NavBar/>
    <div style = {containerStyles}>
    <Slider slides = {slides}/>
    </div>
    <About/>
    <Professionals/>
    {/* <Form/> */}
    <Contacts></Contacts>
    </div>
    
  );
}

export default App;

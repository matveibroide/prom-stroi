
import './App.scss';
import Header from '../components/header/header';
import NavBar from '../components/nav-bar/navBar';
import Slider from '../components/slider/slider';
import About from '../components/about/about';
import Professionals from '../components/professionals/professionals';
import Contacts from '../components/contacts/contacts';


function App() {

  const slides =
  [
    {url:'https://st.depositphotos.com/1003434/4772/i/600/depositphotos_47727563-stock-photo-bodyguard.jpg',title:'army'},
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
    <div className="App">
    <Header/>
    <NavBar/>
    <div style = {containerStyles}>
    <Slider slides = {slides}/>
    </div>
    <About/>
    <Professionals/>
    <Contacts/>
    </div>
  );
}

export default App;

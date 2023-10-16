
import './App.scss';
import Header from '../components/header/header';
import NavBar from '../components/nav-bar/navBar';
import Professionals from '../components/professionals/professionals';
import Contacts from '../components/contacts/contacts';
import Form from '../components/form/form';
import logo from '../assets/Best in business.gif'



function App() {
  
  return (
    
    <div className='wrapper'>
    <section className="main">
      <Header nav={NavBar}/>
    </section>  
    <Professionals/>
    <Form/> 
    <Contacts></Contacts>
    </div>
    
  );
}

export default App;

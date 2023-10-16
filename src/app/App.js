
import './App.scss';
import Navigation from '../components/navigation/navigation';
import Header from '../components/header/header';
import Professionals from '../components/professionals/professionals';
import Contacts from '../components/contacts/contacts';
import Form from '../components/form/form';
import { useState,setState } from 'react';



function App() {

  const [state,setState] = useState({navVisible:false})

  const onClick = () => {
    setState({...state,navVisible:!state.navVisible})
  }

  const isNavVisible = state.navVisible
  
  return (
    
    <div className='wrapper'>
    <section className="main">
      <Header onClick = {onClick}/>
      <Navigation isNavVisible = {isNavVisible}/>
    </section>  
    <Professionals/>
    <Form/> 
    <Contacts></Contacts>
    </div>
    
  );
}

export default App;

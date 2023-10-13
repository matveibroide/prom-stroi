import NavBar from '../nav-bar/navBar';
import './header.scss'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingUser,faBars,faX} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


const element = <FontAwesomeIcon size='2xl' icon={faBuildingUser} />


function Header() {

    const [state,setState] = useState({navBtnActive:false});

    const onChange = () => {
            setState({ ...state, navBtnActive: !state.navBtnActive });
            console.log(state)
    };

    console.log(state.navBtnActive ? '1' : '2')
    return (
        <header id="home" className="header-container">
            <div style={{display:`${state.navBtnActive ? `none` : `block`}`}} className="header-container__elements-wrapper">
                {element}
                <h1 data-heading='Security'>СТРОЙ-ПРОМ</h1>
            </div>
            <NavBar onChange = {onChange}/>
        </header>
    )
}

export default Header;
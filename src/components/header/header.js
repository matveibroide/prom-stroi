
import './header.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingUser,faBars,faX} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'

const element = <FontAwesomeIcon  size='2xl' icon={faBuildingUser} />
const bars =  <FontAwesomeIcon style = {{cursor:'pointer',color:'yellow'}} size='lg' icon={faBars} />
const closeBtn = <FontAwesomeIcon style = {{cursor:'pointer',color:'yellow'}} size='lg' icon={faX} />

function Header({onClick}) {

    const [state,setState] = useState({navBtnActive:false});

    const onChange = () => {
            setState({ ...state, navBtnActive: !state.navBtnActive });
            onClick()
            console.log(state.navBtnActive)
    };

    
    return (
        <header id="home" className="header-container">
            <div className="header-container__elements-wrapper">
                {element}
                <h1 style={{marginLeft:'5%'}} data-heading='Security'>ИП Щербинин С.А.</h1>
            </div>
            <button onClick={onChange} className='header__container_btn'>{bars}</button>
        </header>
    )
}

export default Header;
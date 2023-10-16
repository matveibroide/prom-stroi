import NavBar from '../nav-bar/navBar';
import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingUser,faBars,faX} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'

const element = <FontAwesomeIcon  size='2xl' icon={faBuildingUser} />


function Header() {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(width>=1120px)'
    })

    const [state,setState] = useState({navBtnActive:false});

    const onChange = () => {
            setState({ ...state, navBtnActive: !state.navBtnActive });
    };

    console.log(isDesktopOrLaptop)

    return (
        <header id="home" className="header-container">
            <div style={{display:`${state.navBtnActive && !isDesktopOrLaptop ? `none` : `flex`}`,transition:'1s'}} className="header-container__elements-wrapper">
                {element}
                <h1 style={{marginLeft:'5%'}} data-heading='Security'>ИП Щербинин С.А.</h1>
            </div>
            <NavBar onChange = {onChange}/>
        </header>
    )
}

export default Header;
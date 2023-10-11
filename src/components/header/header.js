import NavBar from '../nav-bar/navBar';
import './header.scss'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingUser} from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon size='2xl' icon={faBuildingUser} />
/* import Form from '../components/form/form'; */

function Header() {

    
    return (
        <header id="home" className="header-container">
            <div className="header-container__elements-wrapper">
                {element}
                <h1 data-heading='Security'>СТРОЙ-ПРОМ</h1>
            </div>
            {/* <NavBar/> */}
        </header>
    )
}

export default Header;
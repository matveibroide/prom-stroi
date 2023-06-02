import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import './changeThemeButton.scss'
import { useContext } from 'react';
import { ThemeContext } from '../context/context';


function ChangeThemeButton() {



const { context,toggleContext } = useContext(ThemeContext);

const handleToggle = () => {
    toggleContext();
};






return (
        <div className='change-theme-button'>
            <div className={context === 'dark' ? 'theme-descr-dark' : 'theme-descr-light'}>
                {context === 'dark' ? 'Dark theme' : 'Light theme'}
                </div>
            <button onClick={handleToggle}>
        
                {context === 'dark' ?
                (<FontAwesomeIcon    style={{margin:'1em',cursor:'pointer',fontSize:'2em',color:'#d4c59d'}}
                icon={context === 'dark' ? faToggleOn : faToggleOff}
                    />) :
                    <FontAwesomeIcon    style={{margin:'1em',cursor:'pointer',fontSize:'2em',color:'#000'}}
                                icon={context === 'dark' ? faToggleOn : faToggleOff}
                                    />}
            </button>
        </div>
);
}

export default ChangeThemeButton;

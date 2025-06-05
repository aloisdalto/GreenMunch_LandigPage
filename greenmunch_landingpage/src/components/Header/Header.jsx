import React, {useState} from "react";
import './Header.css';
import {List} from 'react-bootstrap-icons';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const getMenuStyles = (menuOpened) => {
        if(document.documentElement.clientWidth <= 800){
            return{right: !menuOpened && "-100%" }
        }
    };

    return (
        <nav className="h-wrapper">
           <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100}/>
                <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
                    <div className="h-menu" style={getMenuStyles(menuOpened)}>
                        <a href="#productos">
                            Productos
                        </a>
                        <a href="#preguntas">
                            Preguntas
                        </a>
                        <a href="#contactanos">
                            Contáctanos
                        </a>
                        <a href="#empecemos">
                            Empecemos
                        </a>
                        <button className="button">
                            <a href="#">
                                Contacto
                            </a>
                        </button>
                    </div>   
                </OutsideClickHandler>
                
                <div className="menu-icon" onClick={() => setMenuOpened((prev)=>!prev)}>
                    <List size={30} />
                </div>
           </div>
           
        </nav>
    );
};

export default Header;
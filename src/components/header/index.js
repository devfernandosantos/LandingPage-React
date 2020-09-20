import React from 'react';

import logo1 from '../../assets/img/logo1.png';
import logo2 from '../../assets/img/logo2.png'; 
import './style.css'

function Header(){
    return(
        <>
            <header className="main-header">
                <div className="container">
                <div className="menu-images">
                    <img src={logo1} alt="logo1"/>
                    <img src={logo2} alt="logo2"/>
                </div>
                </div>
            </header>
        </>
    );
}

export default Header;
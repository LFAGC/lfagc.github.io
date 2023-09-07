'use client'

import '../globals.css'

import React, { useState } from 'react';



let TopNavbar = function(Pagename) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const closeNav = function() {
        setIsNavOpen(false)
    }

    return (
        <div className={`nav-container ${isNavOpen ? 'nav-container-open':''}`} >
            <div className={`current-page ${isNavOpen ? 'current-page-hide':''}`}>{Pagename['Pagename']}</div>
            <div className={`nav-selector-title ${isNavOpen ? 'nav-selector-title-show':''}`}>Navigatie</div>
            <div className={`nav-selector-button ${isNavOpen ? 'nav-selector-button-hide':''}`} onClick={setIsNavOpen}><i className='fa-solid fa-bars'></i></div>
            <div className={`nav-selector-close  ${isNavOpen ? 'nav-selector-close-show':''}`} onClick={closeNav}><i className='fa-solid fa-xmark'></i></div>
            <a href='/' className={`nav-button ${isNavOpen ? 'nav-button-show':''}`}><p>Hoofdpagina</p></a>
            <a href='/about' className={`nav-button ${isNavOpen ? 'nav-button-show':''}`}><p>Over Mij</p></a>
            <a href='/projects' className={`nav-button ${isNavOpen ? 'nav-button-show':''}`}><p>Mijn Projecten</p></a>
            <a href='/contact' className={`nav-button ${isNavOpen ? 'nav-button-show':''}`}><p>Contact</p></a>
        </div>
    )
}

export default TopNavbar
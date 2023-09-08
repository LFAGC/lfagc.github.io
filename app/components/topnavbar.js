'use client'

import '../globals.css'

import React, { useState } from 'react';
import { motion } from "framer-motion"
import { useAnimate } from "framer-motion"



let TopNavbar = function(Pagename) {
    const [scope, animate] = useAnimate()
    const [isNavOpen, setIsNavOpen] = useState(false);

    const openNav = function() {
        setIsNavOpen(true)
    }

    const closeNav = function() {
        setIsNavOpen(false)
    }

    return (
        <motion.div className={`nav-container`} animate={{ height: isNavOpen ? '100%' : '9vh' }} transition={{ duration: 0.2 }} >
            <div className={`current-page ${isNavOpen ? 'current-page-hide':''}`}>{Pagename['Pagename']}</div>
            <div className={`nav-selector-title ${isNavOpen ? 'nav-selector-title-show':''}`}>Navigatie</div>
            <div className={`nav-selector-button ${isNavOpen ? 'nav-selector-button-hide':''}`} onClick={openNav}><i className='fa-solid fa-bars'></i></div>
            <div className={`nav-selector-close  ${isNavOpen ? 'nav-selector-close-show':''}`} onClick={closeNav}><i className='fa-solid fa-xmark'></i></div>
            <a href='/' className={`nav-button ${isNavOpen ? 'nav-button-show':''}`}><p>Hoofdpagina</p></a>
            <a href='/about' className={`nav-button ${isNavOpen ? 'nav-button-show':''}`}><p>Over Mij</p></a>
            <a href='/projects' className={`nav-button ${isNavOpen ? 'nav-button-show':''}`}><p>Mijn Projecten</p></a>
            <a href='/contact' className={`nav-button ${isNavOpen ? 'nav-button-show':''}`}><p>Contact</p></a>
        </motion.div>
    )
}

export default TopNavbar
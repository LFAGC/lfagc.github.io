"use client"

import Navbars from '../../components/navbar.js'
import {useState } from 'react'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


import '../../styling/contact.css';

export let PageName = 'Contact'

export const metadata = {
    title: 'Lars Werner | Contact',
    description: 'Hier kan je contact leggen met mij',
}

export default function Home() {
    const [submited, toggleSubmitted] = useState(false)
    const [state, handleSubmit] = useForm("xaygjzqa");

    const submitHandler = function(event) {
        event.preventDefault();

        toggleSubmitted(true)

        setTimeout(function() {
            toggleSubmitted(false)
        }, 1500)

        handleSubmit(event)
    }

    return (
        <>
            {Navbars(PageName)}
            <div className='contact-container'>
                <div className="contact-title">
                    <p>Contact Formulier</p>
                </div>

                {!submited ? (
                    <form method="POST" className='contact-form' onSubmit={submitHandler}>
                        
                        <div className='contact-input'>
                            <span>Naam</span>
                            <input type="text" name="name" required />
                        </div>

                        <div className='contact-input'>
                            <span>Email</span>
                            <input type="email" name="email" required/>
                        </div>

                        <div className='contact-input'>
                            <span>Bericht</span>
                            <input type="text" name="message" required/>
                        </div>

                        
                        <button type="submit">Verzenden</button>
                    </form>
                ) : (
                    <div className='contact-submitted-message'>Dankjewel, U hoort zo spoedig mogelijk van mij terug</div>
                )}
            </div>
        </>
    )
}
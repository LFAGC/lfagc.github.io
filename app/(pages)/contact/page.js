import Navbars from '../../components/navbar.js'
import React from 'react';
import ContactForm from '@/app/components/contactforms.js';

import '../../styling/contact.css';

export let PageName = 'Contact'

export const metadata = {
    title: 'Lars Werner | Contact',
    description: 'Hier kan je contact leggen met mij',
}

export default function Home() {
    return (
        <>
            {Navbars(PageName)}
            <div className='contact-container'>
                <div className="contact-title">
                    <p>Contact Formulier</p>
                </div>

                <ContactForm/>
            </div>
        </>
    )
}
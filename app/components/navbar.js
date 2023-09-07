import Head from 'next/head'
import '../globals.css'

function Navbars(Pagename) {
    return (
        <div className="w-full h-full">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className='nav-container'>
                <div className='current-page'>{Pagename}</div>
                <div className='nav-selector-title'>Navigatie</div>
                <div className='nav-selector-button'><i className='fa-solid fa-bars'></i></div>
                <div className='nav-selector-close'><i className='fa-solid fa-xmark'></i></div>
                <a href='/' className='nav-button'><p>Hoofdpagina</p></a>
                <a href='/about' className='nav-button'><p>Over Mij</p></a>
                <a href='/projects' className='nav-button'><p>Mijn Projecten</p></a>
                <a href='/contact' className='nav-button'><p>Contact</p></a>
            </div>

            <div className="footer-nav-container">
                <a href='/' className='nav-button'><p>Hoofdpagina</p></a>
                <a href='/about' className='nav-button'><p>Over Mij</p></a>
                <a href='/projects' className='nav-button'><p>Mijn Projecten</p></a>
                <a href='/contact' className='nav-button'><p>Contact</p></a>
            </div>
        </div>
    )
}

export default Navbars
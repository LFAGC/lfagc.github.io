import Navbars from '../../components/navbar.js'

import '../../styling/about.css';

export let PageName = 'Over Mij'

export const metadata = {
    title: 'Lars Werner | Over Mij',
    description: 'Alle informatie over mij',
}

export default function Home() {
  return (
    <div className='main-container w-full h-full'>
        {Navbars(PageName)}
        <div className="content-container">
            <div className="content-title"><p>Over Mij</p><a href="/cv">Curriculum Vitae</a></div>

            <div className="content-box">
                <p className="content-box-title">Introductie</p>
                <p className="content-box-text">Hallo, ik heet Lars en welkom op de Overmij pagina. Om te beginnen zou ik wat over mijzelf vertellen.  Ik ben Lars een 17-jarige codeur die veel passie heeft voor het vak en graag zich verder wil ontwikkelen binnen het designen van websites en ze uitwerken en interactief maken.</p>
            </div>

            <div className="content-box">
                <p className="content-box-title">Hobby's</p>
                <p className="content-box-text">In mijn vrijetijd ben ik nog wel eens van een race spelletje en wat gezelligheid met mijn vrienden. Hiernaast codeer ik thuis ook voor mijn eigen projecten.</p>
            </div>


            <div className="content-box">
                <p className="content-box-title">Bijbaan</p>
                <p className="content-box-text">Op dit moment werk ik bij Makro Barendrecht als Winkel Medewerker. Het is een hele leuke bijbaan waar ik 12 uur in de week werk.</p>
            </div>


            <div className="content-box">
                <p className="content-box-title">Technieken</p>
                <p className="content-box-text">Ik heb kennis met veel verschillende talen. Deze talen gebruikk ik vooral om websites mee te bouwen. De talen die ik goed kan zijn: HTML, CSS, Javascript, PHP, Lua. NextJS.</p>
            </div>

            <div className="content-box">
                <p className="content-box-title">Huidige Opleiding</p>
                <p className="content-box-text">Ik zit nu op het Grafisch Lyceum Rotterdam. Ik volg hier Software Development met als volg opleiding Digital Signage. Op deze opleiding leer je vooral hoe je websites moet designen en uitwerken op de meest nette maniet.</p>
            </div>
        </div>
    </div>
  );
}
import Image from 'next/image';
import '../../styling/index.css';
import Navbars from '../../components/navbar.js'

let PageName = 'Hoofdpagina'

export default function Home() {
  return (

    <div className='main-container w-full h-full'>
      {Navbars(PageName)}
        <div className="content-container">
          <div className='content-banner-head'><p>Lars Werner | Portofolio</p></div>
          <div className='content-banner-bottom'><p>Software Ontwikkelaar</p></div>
          <Image src="/imgs/self.png" draggable='false' className='content-img' width={1920} height={1080}></Image>
          <div className="content"><p>Hallo, ik ben Lars Werner een 17 jarige jonge met een passie voor het maken van websites en applicaties. Dit is mijn portofolio pagina wees welkom om een kijkje te nemen op de andere pagina's met veel kijk plezier</p></div>
        </div>
    </div>
  );
}

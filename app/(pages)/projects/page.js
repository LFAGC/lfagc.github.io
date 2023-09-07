import Navbars from '../../components/navbar.js'
import Image from 'next/image.js';
import '../../styling/project.css';

let PageName = 'Mijn Projecten'

export const metadata = {
    title: 'Lars Werner | Mijn Projecten',
    description: 'Alle informatie over mij',
}

export default function Home() {
  return (
    <>
      { Navbars(PageName)}
      <div className='w-3/5 absolute left-1/2 top-0 -translate-x-1/2 h-max projects-container'>
        <div class="projects-title"><p>Mijn Projecten</p></div>

        <div className='project-section'>
          <div className='project-title'><span>Huidig</span></div>
          <div className='project-block'>
            <Image src="/imgs/projects/test.png" draggable='false' className='project-block-img' width={1080} height={1920}></Image>
            <div className='project-block-title'>Lorem Impsum</div>
            <div className='project-block-desc'><p>Natuurlijke schoonheid inspireert altijd. De zachte bries streelt je huid terwijl je wandelt in het weelderige bos. De vogels zingen een melodie die je ziel kalmeert. Zonlicht filtert door de bladeren en creëert een betoverend schouwspel op de grond. In deze momenten vind je rust, verbondenheid en een diepe waardering voor de pracht van Moeder Natuur.</p></div>
          </div>
        </div>

        <div className='project-section'>
          <div className='project-title'><span>Verleden</span></div>
          <div className='project-block'>
            <Image src="/imgs/projects/test.png" draggable='false' className='project-block-img' width={1080} height={1920}></Image>
            <div className='project-block-title'>Lorem Impsum</div>
            <div className='project-block-desc'><p>Natuurlijke schoonheid inspireert altijd. De zachte bries streelt je huid terwijl je wandelt in het weelderige bos. De vogels zingen een melodie die je ziel kalmeert. Zonlicht filtert door de bladeren en creëert een betoverend schouwspel op de grond. In deze momenten vind je rust, verbondenheid en een diepe waardering voor de pracht van Moeder Natuur.</p></div>
          </div>

          <div className='project-block'>
            <Image src="/imgs/projects/test.png" draggable='false' className='project-block-img' width={1080} height={1920}></Image>
            <div className='project-block-title'>Lorem Impsum</div>
            <div className='project-block-desc'><p>Natuurlijke schoonheid inspireert altijd. De zachte bries streelt je huid terwijl je wandelt in het weelderige bos. De vogels zingen een melodie die je ziel kalmeert. Zonlicht filtert door de bladeren en creëert een betoverend schouwspel op de grond. In deze momenten vind je rust, verbondenheid en een diepe waardering voor de pracht van Moeder Natuur.</p></div>
          </div>

          <div className='project-block'>
            <Image src="/imgs/projects/test.png" draggable='false' className='project-block-img' width={1080} height={1920}></Image>
            <div className='project-block-title'>Lorem Impsum</div>
            <div className='project-block-desc'><p>Natuurlijke schoonheid inspireert altijd. De zachte bries streelt je huid terwijl je wandelt in het weelderige bos. De vogels zingen een melodie die je ziel kalmeert. Zonlicht filtert door de bladeren en creëert een betoverend schouwspel op de grond. In deze momenten vind je rust, verbondenheid en een diepe waardering voor de pracht van Moeder Natuur.</p></div>
          </div>

          <div className='project-block'>
            <Image src="/imgs/projects/test.png" draggable='false' className='project-block-img' width={1080} height={1920}></Image>
            <div className='project-block-title'>Lorem Impsum</div>
            <div className='project-block-desc'><p>Natuurlijke schoonheid inspireert altijd. De zachte bries streelt je huid terwijl je wandelt in het weelderige bos. De vogels zingen een melodie die je ziel kalmeert. Zonlicht filtert door de bladeren en creëert een betoverend schouwspel op de grond. In deze momenten vind je rust, verbondenheid en een diepe waardering voor de pracht van Moeder Natuur.</p></div>
          </div>
        </div>
      </div>
     </>
  )
}
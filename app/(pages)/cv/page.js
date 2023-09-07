import Navbars from '../../components/navbar.js'
import Image from 'next/image';
import '../../styling/cv.css';

let PageName = 'Curriculum Vitae'
let pdflink = "https://88904.stu.sd-lab.nl/cv.pdf"

export const metadata = {
  title: 'Lars Werner | Curriculum Vitae',
  description: 'Alle informatie over mij',
}

export default function Home() {
  return (
    <div className='w-full h-full'>
        {Navbars(PageName)}

        <div className="pdf-container">
            <div className="pdf-title"><p>Curriculum Vitae</p><a href="/about">Overmij</a></div>
            <iframe src={pdflink} className='pdf-document z-10'></iframe>
        </div>
    </div>
  )
}
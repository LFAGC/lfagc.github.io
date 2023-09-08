import Navbars from '../../components/navbar.js'
import '../../styling/project.css';
import Projects from '@/app/components/projects.js';


let PageName = 'Mijn Projecten'

export const metadata = {
  title: 'Lars Werner | Projecten',
  description: 'Hier kan je contact leggen met mij',
}


export default function Home() {


  return (
    <div>
      {Navbars(PageName)}
      <div className='w-3/5 absolute left-1/2 top-0 -translate-x-1/2 h-max projects-container'>
        <div className="projects-title">
          <p>Mijn Projecten</p>
        </div>

        <Projects/>
      </div>
    </div>
  );
}
"use client"

import Navbars from '../../components/navbar.js'
import Image from 'next/image.js';
import '../../styling/project.css';
import { supabase } from '@/app/lib/supabse.js';
import { useEffect, useState } from 'react';


let PageName = 'Mijn Projecten'








export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from('projects').select('*');

        if (data) {
          setProjects(data);
        }

        if (error) {
          console.error(error);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {/* Assuming Navbars is a valid component */}
      {Navbars(PageName)}
      <div className='w-3/5 absolute left-1/2 top-0 -translate-x-1/2 h-max projects-container'>
        <div className="projects-title">
          <p>Mijn Projecten</p>
        </div>


          {(projects.length > 0) ? (
            <>
            <div className='project-section'>
              <div className='project-title'><span>Huidig</span></div>
              {projects.map((value, index) => (
                value.present ? (
                  <div className='project-block'>
                    <Image src={value.image} draggable='false' className='project-block-img' width={1080} height={1920} />
                    <div className='project-block-title'>{value.title}</div>
                    <div className='project-block-desc'><p>{value.desc}</p></div>
                  </div>
                ) : null
              ))}
            </div>

            <div className='project-section'>
              <div className='project-title'><span>Verleden</span></div>
              {projects.map((value, index) => (
                !value.present ? (
                  <div className='project-block'>
                    <Image src={value.image} draggable='false' className='project-block-img' width={1080} height={1920} />
                    <div className='project-block-title'>{value.title}</div>
                    <div className='project-block-desc'><p>{value.desc}</p></div>
                  </div>
                ) : null
              ))}
            </div>
            </>
          ) : (<div className='project-empty'>Helaas ik heb nog geen projecten gehad houd deze pagina goed in de gaten of contacteer mij via de <a href='/contact' className='project-empty-link'>contact</a> pagina....</div>)}

      </div>
    </div>
  );
}
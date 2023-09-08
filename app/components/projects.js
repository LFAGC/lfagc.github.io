'use client'

import { supabase } from '@/app/lib/supabse.js';
import { useEffect, useState } from 'react';
import Image from 'next/image.js';

import '../globals.css'

let Projects = function() {
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
        (projects.length > 0) ? (
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
        ) : (<div className='project-empty'>Helaas ik heb nog geen projecten om te weergeven houd deze pagina goed in de gaten of contacteer mij via de <a href='/contact' className='project-empty-link'>contact</a> pagina....</div>)
    )
}

export default Projects
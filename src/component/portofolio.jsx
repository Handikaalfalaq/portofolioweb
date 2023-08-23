import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
import { dataPortofolio } from './assets/data';
import { useNavigate } from 'react-router-dom';

function Portofolio(){
    const navigate = useNavigate()
    return(
        <div className="containerPortofolio">
            <div className="titlePortofolio">
                <div className="logoPortofolio"><FontAwesomeIcon icon={faAtom} /> </div>
                <div className='titlePortofolio'>Portofolio</div>
            </div>

            <div className="greetingPortofolio">
                list of my portofolio project
            </div>
            
            <div className='containerProject'>
            
                {dataPortofolio.map((project, index) => (
                    <div className="contentPortofolio" key={index} >
                        <div className='imageContentPortofolio' style={{backgroundImage: `url(${project.imageProject})`}}></div>
                        <div className='contentDataPortofolio'>
                            <div className='titleProject' onClick={(e) => { navigate(`/detailPortofolio/${index}`)}}>{project.titleProject}</div>
                            {project.contentProject && (
                                <div className='contentProject'>{project.contentProject}</div>
                            )}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Portofolio
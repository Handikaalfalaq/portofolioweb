import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
// import FolderImage from './img/folderImg.jsx';
import { dataPortofolio } from './assets/data';

function Portofolio(){
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
                    <div className="contentPortofolio" key={index}>
                        <div className='imageContentPortofolio' style={{backgroundImage: `url(${project.imageProject})`}}></div>
                        <div className='contentDataPortofolio'>
                            <div className='titleProject'>{project.titleProject}</div>
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
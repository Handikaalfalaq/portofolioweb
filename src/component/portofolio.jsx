import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom } from '@fortawesome/free-solid-svg-icons';

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

                <div className="contentPortofolio">
                    <div className='imageContentPortofolio'>image</div>
                    <div></div>
                </div>

                <div className="contentPortofolio">
                
                </div>

                <div className="contentPortofolio">
                
                </div>
            </div>
        </div>
    )
}

export default Portofolio
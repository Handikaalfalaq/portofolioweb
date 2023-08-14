import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { userData } from './assets/data';


function About(){
    return(
        <div className="containerAbout">
            <div className="titleAbout">
                <div className="logoAbout"><FontAwesomeIcon icon={faAddressCard} /> </div>
                <div className='titleAbout'>About</div>
            </div>

            <div className="greetingAbout">
                Hello, i'm {userData.firstName}
            </div>

            <div className="contentAbout">
                {userData.about1}
                <br/> <br/>
                {userData.about2}
                <br/> <br/>
                {userData.about3}
            </div>
        </div>
    )
}

export default About
import {React, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { dataSkills } from './assets/data';

function Skills(){
    
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return(
        <>
            <div className="containerSkill">
                <div className="titleSkill">
                    <div className="logoSkill"><FontAwesomeIcon icon={faAddressBook} /> </div>
                    <div className='titlePageSkill'>skills</div>
                </div>

                <div className="greetingSkill">
                    Feel free to contact me
                </div>

                <div className='contentSkill'>
                    {dataSkills.map((skill, index) => (
                        <div className={`contentPageSkill ${hoveredIndex === index ? 'hovered' : ''}`}
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}>
                            <div className='iconContentPageSkill' style={{ '--hover-color': skill.color }}>
                                {skill.logoSkill}
                            </div>
                            <div className='informasiContentPageSkill'>
                                <div className='titleContentPageSkill' style={{ '--hover-color': skill.color }}>{skill.skill}</div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </>
    )
}

export default Skills
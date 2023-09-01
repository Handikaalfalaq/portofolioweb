import { React, useState }from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { dataPortofolio } from './assets/data'

function DetailPortofolio(){
    const indexPortofolio = useParams("id")
    console.log(indexPortofolio)
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    
    const data = dataPortofolio[indexPortofolio.id] 
    console.log(data)
    return(
        <div className="containerPortofolio">
            <div className="titlePortofolio">
                <div className="logoPortofolio"><FontAwesomeIcon icon={faAtom} /> </div>
                <div className='titlePortofolio'>Portofolio</div>
            </div>
            
            <Card className='cardContainerPortofolio'>
                <div className='topCard'>
                    <div className='imagePortofolio' style={{backgroundImage: `url(${data.imageProject})`}}></div>
                    <div className='containerCardPortofolio'>
                        <div className='titleCardPortofolio'>{data.titleProject}</div>
                        <div className='informasiCardPortofolio'>{data.contentProject}</div>
                    </div>
                </div>
                <Card.Body className='bodyCardPortofolio'>
                    <div className='cardTechnologies'>
                        <Card.Title className='titleCardTechnologies'>Technologies</Card.Title>
                        <div className='containerTechnologies'>
                        {data.dataTechnologies.map((item, index) => {
                            return (
                                <Card.Text key={index} className={`contentTechnologies ${hoveredIndex === index ? 'hovered' : ''}`} onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}>
                                   <div className='itemTechnologies' style={{ '--hover-color': item.color }}> {item.technologies}</div>
                                    <div className='itemLogoTechnologies' style={{ '--hover-color': item.color }}>{item.logoTechnologies}</div>
                                </Card.Text>
                            )
                        })}
                        </div>
                    </div>

                    {data.link.map((item, index) => (
                        <div className='cardQR' key={index}>
                            <Card.Title className='titleCardTechnologies'>{item.title}</Card.Title>
                            <div className='webQR' style={{ backgroundImage: `url(${item.imageQR})` }}></div>
                            <a href={item.linkWeb} className="linkQR" target='_blank' rel='noopener noreferrer'>Klik link</a>
                        </div>
                    ))}
                    
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default DetailPortofolio
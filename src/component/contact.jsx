import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { dataContact } from './assets/data';

function Contact(){
    return(
        <>
            <div className="containerContact">
                <div className="titleContact">
                    <div className="logoContact"><FontAwesomeIcon icon={faAddressBook} /> </div>
                    <div className='titlePageContact'>Contact</div>
                </div>

                <div className="greetingContact">
                    Feel free to contact me
                </div>

                <div className='contentContact'>
                    {dataContact.map((contact, index) => (
                        <div className='contentPageContact' key={index}>
                            <div className='iconContentPageContact'>
                                {contact.logoContact}
                            </div>
                            <div className='informasiContentPageContact'>
                                <div className='titleContentPageContact'>{contact.contact}</div>
                                <div className='titleInformasiContentPageContact'>{contact.informasiContact}</div>
                                <a href={contact.linkContact} className="sendMassageContact" >Send Message</a>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </>
    )
}

export default Contact
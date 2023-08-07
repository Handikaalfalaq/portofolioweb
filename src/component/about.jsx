import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';


function About(){
    return(
        <div className="containerAbout">
            <div className="titleAbout">
                <div className="logoAbout"><FontAwesomeIcon icon={faAddressCard} /> </div>
                <div className='titleAbout'>About</div>
            </div>

            <div className="greetingAbout">
                Hello, i'm Dika
            </div>

            <div className="contentAbout">
                I am Handika Al Falaq, graduate of electrical engineering. when I was in college I studied programming but at that time I was not interested. but now I'm very interested in that world because it's quite fun for me, so with current technological developments programming is needed so that it makes me like it even more. I am a graduate of the dumbways bootcamp where I have completed several projects, namely dewetour and waysbook  using react js and golang.
            </div>

            <div className="contentAbout">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sequi officiis quas, facilis molestiae adipisci reprehenderit itaque alias atque tempora odit perferendis, nulla voluptatem quo voluptatum enim expedita, numquam nemo! Vel necessitatibus provident fugiat asperiores velit? Illum amet cum dignissimos? Quo perferendis vitae eos dolores sunt delectus voluptate ab omnis asperiores dicta, dolor reprehenderit blanditiis et a quod esse.  Aut omnis rerum distinctio ducimus animi delectus eum architecto voluptatem, tenetur labore eveniet aliquid voluptas facere culpa autem saepe veniam enim et modi minus quod beatae voluptatibus libero blanditiis. Harum ratione quod sunt vero quisquam iste accusantium numquam distinctio. Recusandae, aut!
            </div>
        </div>
    )
}

export default About
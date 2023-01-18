import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faTelegram, faTwitter} from '@fortawesome/free-brands-svg-icons';


function HeaderSocials() {
  return (
    <div className='home__socials'>
        <a href="" className="home__social-links" target='_blank'>
            <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a href="" className="home__social-links" target='_blank'>
            <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        <a href="" className="home__social-links" target='_blank'>
            <FontAwesomeIcon icon={faTelegram}/>
        </a>
        <a href="" className="home__social-links" target='_blank'>
            <FontAwesomeIcon icon={faTwitter}/>
        </a>      
    </div>
  )
}

export default HeaderSocials
import React from 'react';
import './sidebar.scss';
import Logo from '../../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faHouse, faUserNinja,faBriefcase, faLayerGroup, faHeadset } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <aside className='aside'>
        <a href="#home" className="nav__logo">
            <img src={Logo} alt="logo" />
        </a>

        <nav className="nav">
            <div className="nav__menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                        <FontAwesomeIcon icon={faHouse}/>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                           <FontAwesomeIcon icon={faUserNinja}/> 
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <FontAwesomeIcon icon={faBriefcase}/>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <FontAwesomeIcon icon={faLayerGroup}/>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#resume" className="nav__link">
                            <FontAwesomeIcon icon={faGraduationCap}/>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <FontAwesomeIcon icon={faHeadset}/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="nav__footer">
            <span className="copyrigth">
                copyrigth
            </span>
        </div>
    </aside>
  )
}

export default Sidebar
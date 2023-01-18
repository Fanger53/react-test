import React from 'react';
import './home.scss';
import Me from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials';
// import './Typing';


function Home() {
  return (
    <div className='border'>
      <section className="home container" id="home">
        <div className="intro">
          <img src={Me} alt="" className="home__img" />
          <h1 className="home__name">David Leonardo Castillo R</h1>
          <span className="home__education">
            Im <span className="typed"></span>
          </span>
          <HeaderSocials/>
        </div>
      </section>
    </div>
  )
}

export default Home
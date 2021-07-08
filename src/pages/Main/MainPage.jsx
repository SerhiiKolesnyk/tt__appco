import React from 'react';
import { Link } from 'react-router-dom';

export const MainPage = () => (
  <>
    <header className='main-header'>
      <div className='container'>
        <div className='logo'>AppCo</div>
        <section className='main-header__info'>
          <div>
            <h1 className='main-header__title'>
              <strong>Brainstorming</strong> for <br />
              desire perfect Usability
            </h1>
            <p className='main-header__text'>
              Our design projects are fresh and simple and will benefit <br />
              your business greatly. Learn more about our work!
            </p>
            <Link to="/table">
              <button className='button'>Views Stats</button>
            </Link>
          </div>
          <div className='phone'>
            <div className='phone__wrapper'>
              <img className='phone__picture' src="./tt__appco/iphone.svg" alt="iphone" />
              <img className='phone__shadow' src="./tt__appco/shadow.svg" alt="iphone" />
            </div>
          </div>
        </section>
      </div>
    </header>
    <main className="main">
      <div className="container">
        <h2 className='main__title'>
          Why <strong>small business owners<br /> love</strong> AppCo?
        </h2>
        <p className='main__text'>
          Our design projects are fresh and simple and will benefit <br />
          your business greatly. Learn more about our work!
        </p>

        <div className='main__benefits'>
          <div className='benefit'>
            <img className='benefit__picture' src="./tt__appco/firstCollage.png" alt="collage" />
            <h3 className='benefit__title'>
              Clean Design
            </h3>
            <p className='benefit__text'>
              Increase sales by showing true dynamics of your website.
            </p>
          </div>
          <div className='benefit'>
            <img className='benefit__picture' src="./tt__appco/thirdCollage.png" alt="collage" />
            <h3 className='benefit__title'>
              Secure Data
            </h3>
            <p className='benefit__text'>
              Build your online store’s trust using Social Proof & Urgency.
            </p>
          </div>
          <div className='benefit'>
            <img className='benefit__picture' src="./tt__appco/secondCollage.png" alt="collage" />
            <h3 className='benefit__title'>
              Retina Ready
            </h3>
            <p className='benefit__text'>
              Realize importance of social proof in customer’s purchase decision.
            </p>
          </div>
        </div>
      </div>
    </main>
    <footer className='main-footer'>
      <div className='container main-footer__container'>
        <div className='main-footer__form'>
          <input className='main-footer__input' type="text" placeholder="Enter your email" />
          <button className='main-footer__button' type='button'>
            Subscribe
          </button>
        </div>
        <div className='main-footer__copyright'>
          <span className='main-footer__logo'>
            AppCo
          </span>
          <span className='main-footer__rights'>
            All rights reserved by ThemeTags
          </span>
          <span className='main-footer__rights'>
            Copyrights © 2019.
          </span>
        </div>
      </div>
    </footer>
  </>
);

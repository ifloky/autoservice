import React from 'react';
import './header-style.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Header: React.FC = () => {
  return (
    <header className="header">

      <div className="top-bar">
        <div className="container">
          <div className="location"><span>Локация:  </span>Минск, ул. Кальварийская ул., 33, корп. 14</div>
          <div className="contact">
            Позвони нам: <a href="tel:+17135232363"><a href="tel:+375296159090">+375 33 324-84-44</a>
            </a>
          </div>
        </div>
      </div>
      <nav className="nav-bar">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <span className="logo-subtext"><i className="fas fa-wrench"></i></span>
              <span className="logo-text">Allucard</span>
            </Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/about">О нас</Link></li>
            <li className="dropdown">
              <div><Link to="/services">Наши сервисы</Link></div>
            </li>
            <li><Link to="/work-performed">Услуги</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
          </ul>
          <ScrollLink
            to="form-appointment"
            smooth={true}
            duration={500}
            className="book-appointment"
          >
            Записать на прием
          </ScrollLink>
        </div>
      </nav>
    </header >
  );
};

export default Header;

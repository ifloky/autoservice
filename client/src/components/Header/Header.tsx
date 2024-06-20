import React from 'react';
import './header-style.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">

      <div className="top-bar">
        <div className="container">
          <div className="location"><span>Локация:  </span>Минск, ул. Змитрока Бядули, 13, корп. 7</div>
          <div className="contact">
            Позвони нам: <a href="tel:+17135232363">(713) 523-2363</a>
          </div>
        </div>
      </div>
      <nav className="nav-bar">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <span className="logo-subtext"></span>
              <span className="logo-text">Fast Motors</span>
            </Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/about">О нас</Link></li>
            <li className="dropdown">
              <div><Link to="/services">Наши сервисы</Link></div>
              <div className="dropdown-content">
                <Link to="/service1">Бядули 13</Link>
              </div>
            </li>
            <li><Link to="/work-performed">Услуги</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
          </ul>
          <Link to="#write-book" className="book-appointment">Записать на прием</Link>
        </div>
      </nav>
    </header >
  );
};

export default Header;

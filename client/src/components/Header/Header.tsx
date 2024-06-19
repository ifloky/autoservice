import React from 'react';
import './header-style.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="top-bar">
                <div className="location">OUR LOCATION: 3402 San Jacinto St, Houston, Texas 77004</div>
                <div className="contact">
                    CALL US: <a href="tel:+17135232363">(713) 523-2363</a>
                    <a href="https://www.facebook.com" className="facebook-icon">f</a>
                </div>
            </div>
            <nav className="nav-bar">
                <div className="logo">
                    <span className="logo-text">Autohouse of Switzerland, Inc.</span>
                    <span className="logo-subtext">Specializing in European Autos Since 1980</span>
                </div>
                <ul className="nav-links">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li className="dropdown">
                        <a href="#services">SERVICES</a>
                        <div className="dropdown-content">
                            <a href="#service1">Service 1</a>
                            <a href="#service2">Service 2</a>
                        </div>
                    </li>
                    <li><a href="#reviews">REVIEWS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
                <a href="#book" className="book-appointment">BOOK APPOINTMENT</a>
            </nav>
        </header>
    );
};

export default Header;

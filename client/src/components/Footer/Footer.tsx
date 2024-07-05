import React from 'react';
import './footer-styles.css';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className='footer container'>
      <div className='about-company'> 
        <h3>О компании</h3>
        <p>Общество с дополнительной ответственностью «Allucard» было создано в 1995 году. С момента своего образования и до сегодняшнего дня предприятие занимается предоставлением услуг по ремонту и техническому обслуживанию автомобилей. Являясь одним из ведущих автосервисов в республике, «Allucard» обладает успешным опытом работы с различными марками автомобилей и гордится высоким уровнем профессионализма своих специалистов.</p>
        <Link to="/about" className='btn'>Узнать больше</Link>
      </div>
      <div className='contacts'>
        <div className="phone">
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+375296159090">+375 33 324-84-44</a>
        </div>
        <div className="addres">
          <i className="fas fa-map-marker-alt"></i>
          <p>Минск, ул. Кальварийская ул., 33, корп. 14</p>
        </div>
        <div className="worked-time">
          <i className="fa-regular fa-clock"></i>
          <p>БЕЗ ВЫХОДНЫХ с 9-00 до 20-00 </p>
        </div>
        <div className="transport">
          <i className="fa-solid fa-bus"></i>
          <div>
            <p>5 минуты ходьбы до ст.м. "Молодежная"</p>
            <p>Троллейбусы: 4, 7, 9, 13, 14, 44, 58</p>
            <p>Автобусы: 40, 78, 163</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

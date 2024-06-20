import React from 'react';
import './footer-styles.css';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className='footer container'>
      <div className='about-company'> 
        <h3>О компании</h3>
        <p>Общество с дополнительной ответственностью «ФастМоторс» было создано в 1995 году. С момента своего образования и до сегодняшнего дня предприятие занимается предоставлением услуг по ремонту и техническому обслуживанию автомобилей. Являясь одним из ведущих автосервисов в республике, ««ФастМоторс»» обладает успешным опытом работы с различными марками автомобилей и гордится высоким уровнем профессионализма своих специалистов.</p>
        <Link to="/about" className='btn'>Узнать больше</Link>
      </div>
      <div className='contacts'>
        <div className="phone">
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+375296159090">+375 29 615-90-90</a>
        </div>
        <div className="addres">
          <i className="fas fa-map-marker-alt"></i>
          <p>Минск, ул. Змитрока Бядули, 13, корп. 7</p>
        </div>
        <div className="worked-time">
          <i className="fa-regular fa-clock"></i>
          <p>БЕЗ ВЫХОДНЫХ с 8-30 до 20-00 </p>
        </div>
        <div className="transport">
          <i className="fa-solid fa-bus"></i>
          <div>
            <p>10 минуты ходьбы до ст.м. "Площадь победы"</p>
            <p>Трамваи: 1, 3, 4, 6, 7</p>
            <p>Автобусы: 18, 19, 26, 37, 57</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

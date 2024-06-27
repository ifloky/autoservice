import React from 'react';
import './about-styles.css';

const About: React.FC = () => {
  return (
    <div className="about-us">
      <div className="about-us-header">
        <h1>О компании</h1>
        <p>Узнайте больше о нашей истории, миссии и команде.</p>
      </div>

      <section className="about-us-section">
        <h2>Наша история</h2>
        <p>
          Общество с дополнительной ответственностью «ФастМоторс» было создано в 1995 году.
          С момента своего образования и до сегодняшнего дня предприятие занимается предоставлением услуг по ремонту и техническому обслуживанию автомобилей.
        </p>
      </section>

      <section className="about-us-section">
        <h2>Наша миссия</h2>
        <p>
          Наша миссия - обеспечивать высокий уровень обслуживания, гарантируя безопасность и надёжность вашего автомобиля. Мы стремимся к непрерывному совершенствованию наших услуг и поддержке наших клиентов.
        </p>
      </section>

      <section className="about-us-section">
        <h2>Наши услуги</h2>
        <ul>
          <li>Ремонт и техническое обслуживание всех марок автомобилей</li>
          <li>Диагностика и компьютерная настройка</li>
          <li>Шиномонтаж и балансировка</li>
          <li>Кузовной ремонт и покраска</li>
          <li>Срочные и плановые работы</li>
        </ul>
      </section>

      <section className="about-us-section">
        <h2>Наша команда</h2>
        <p>
          В «ФастМоторс» работают высококвалифицированные специалисты с многолетним опытом работы в автомобильной индустрии.
          Наши сотрудники регулярно проходят обучение и сертификацию, чтобы соответствовать современным стандартам и требованиям.
        </p>
      </section>

      <section className="about-us-section">
        <h2>Наши достижения</h2>
        <p>
          Мы гордимся нашими многочисленными достижениями и наградами, которые подтверждают наш профессионализм и преданность делу.
          В числе наших клиентов - как частные лица, так и крупные компании.
        </p>
      </section>

      <section className="about-us-section">
        <h2>Контакты</h2>
        <p>
          Если у вас есть вопросы или вы хотите записаться на обслуживание, свяжитесь с нами:
        </p>
        <ul>
          <li>Телефон: +7 (123) 456-78-90</li>
          <li>Email: info@fastmotors.com</li>
          <li>Адрес: ул. Примерная, д. 123, г. Минск, Республика Беларусь</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
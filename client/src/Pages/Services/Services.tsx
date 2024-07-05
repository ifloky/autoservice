import './services.css'

import React from 'react'

export const Services = () => {
  return (
    <section className='services container'>
      <div className='map-container'>
        <iframe
          src='https://yandex.ru/map-widget/v1/?um=constructor%3A8ef65aa39d5309106de0085aeeafa938b6f1fa23b31455903e1cc4f38757ca63&amp;source=constructor'
          title='Service Location'
          width="100%"
        ></iframe>
      </div>
        <section>
          <p>Компания «Allukard» предоставляет широкий спектр услуг для бизнеса и частных клиентов. Наши ключевые направления:</p>
          <ul>
            <li>Консалтинговые услуги</li>
            <li>Финансовые решения</li>
            <li>Юридическая помощь</li>
            <li>Маркетинговые исследования</li>
            <li>ИТ-поддержка и развитие</li>
          </ul>
        </section>
        <section>
          <p>Мы придерживаемся высоких стандартов обслуживания и гарантируем индивидуальный подход к каждому клиенту. Наши основные принципы работы:</p>
          <ul>
            <li>Профессионализм и компетентность</li>
            <li>Конфиденциальность и надежность</li>
            <li>Оперативность и гибкость</li>
            <li>Ориентированность на результат</li>
            </ul>
        </section>


    </section>
  ) 
}

export default Services;

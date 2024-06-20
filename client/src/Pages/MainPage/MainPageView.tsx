import React, { useState, useEffect,useRef } from 'react';
import { Helmet } from 'react-helmet';
import './main-page-styles.css';

const slides = [
    {
    isMap: true,
    src: 'https://yandex.ru/map-widget/v1/?um=constructor%3Aec5bdb125a07e0733240716a99f6e7b8457b4347367d688a6b49c9426f75d923&amp;source=constructor',
    alt: 'Service Location',
    title: 'Давай к нам',
    text: 'Сделаем все вовремя и качественно'
  },
  { src: './img/engine.jpg', alt: 'Car 1', title: "Ремонт двигателя", text: 'Качественные запчасти и толковые мотористы восстановят всё' },
  { src: './img/suspension.jpg', alt: 'Car 2', title: 'Ремонт ходовой', text: 'Если что то стучит - приезжайте посмотрим, захотите - исправим' },
  { src: './img/electric.png', alt: 'Car 3', title: 'Ремонт электрики', text: 'Электрики с опытом всегда рады новым вызовам' },
];


const MainPageView: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startSlideInterval = () => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
  };

  const clearSlideInterval = () => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }
  };

  useEffect(() => {
    startSlideInterval();
    return () => clearSlideInterval();
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handleMouseEnter = () => {
    clearSlideInterval();
  };

  const handleMouseLeave = () => {
    startSlideInterval();
  };

  return (
    <>
      <Helmet>
        <title>Ремонт авто в Минске</title>
        <meta name="description" content="У нас вы можете дешево отремонтировать ваш авто" />
      </Helmet>
      <section className='first-screen'>
        <h1 className='main-text'>Автосервис в Минске с приятными ценами</h1>
        <div className='slider' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              {slide.isMap ? (
                <div className='map-container'>
                  <iframe src={slide.src} title={slide.alt} frameBorder='0' />
                </div>
              ) : (
                <img src={slide.src} alt={slide.alt} />
              )}
              <div className='slide-text'>
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
                <button className='btn'>{slide.isMap ? 'Посмотреть на карте' : 'Узнать больше'}</button>
              </div>
            </div>
          ))}
          <button className='prev' onClick={prevSlide}>&#10094;</button>
          <button className='next' onClick={nextSlide}>&#10095;</button>
        </div>
      </section>
      <section style={{ height: '500px', background: '#333' }}></section>
      <section style={{ height: '500px', background: '#555' }}></section>
      <section style={{ height: '500px', background: '#777' }}></section>
    </>
  );
};

export default MainPageView;
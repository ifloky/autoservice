import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import './main-page-styles.css';
import FormAppointment from '../../components/FormAppointment/FormAppointment';
import { Link } from 'react-router-dom';

const slides = [
  {
    isMap: true,
    src: 'https://yandex.ru/map-widget/v1/?um=constructor%3A8ef65aa39d5309106de0085aeeafa938b6f1fa23b31455903e1cc4f38757ca63&amp;source=constructor',
    alt: 'Service Location',
    title: 'Давай к нам',
    text: 'Сделаем все вовремя и качественно'
  },
  {
    src: './img/engine.jpg',
    alt: 'Car 1',
    title: "Ремонт двигателя",
    text: 'Качественные запчасти и толковые мотористы восстановят всё',
    link: './engine'
  },
  {
    src: './img/suspension.jpg',
    alt: 'Car 2',
    title: 'Ремонт ходовой',
    text: 'Если что то стучит - приезжайте посмотрим, захотите - исправим',
    link: './suspension'
  },
  {
    src: './img/electric.png',
    alt: 'Car 3',
    title: 'Ремонт электрики',
    text: 'Электрики с опытом всегда рады новым вызовам',
    link: './electric'
  },
];

const priceLink = [
  {
    img: './img/price img/priceIcon1.svg',
    link: '/prices/servicework',
    textLink: 'Общие работы'
  },
  {
    img: './img/price img/priceIcon2.svg',
    link: '/prices/frontsuspension',
    textLink: 'Передняя подвеска'
  },
  {
    img: './img/price img/priceIcon3.svg',
    link: '/prices/rearsuspension',
    textLink: 'Задняя подвеска'
  },
  {
    img: './img/price img/priceIcon4.svg',
    link: '/prices/break',
    textLink: 'Тормозная система'
  },
  {
    img: './img/price img/priceIcon5.svg',
    link: '/prices/steering',
    textLink: 'Рулевое управление'
  },
  {
    img: './img/price img/priceIcon6.svg',
    link: '/prices/transmission',
    textLink: 'Трансмиссия'
  },
  {
    img: './img/price img/priceIcon8.svg',
    link: '/prices/engine',
    textLink: 'Двигатель'
  },
  {
    img: './img/price img/priceIcon9.svg',
    link: '/prices/electric',
    textLink: 'Электрика'
  },
  {
    img: './img/price img/priceIcon10.svg',
    link: '/prices/coolantsystem',
    textLink: 'Система охлаждения'
  },
  {
    img: './img/price img/priceIcon11.svg',
    link: '/prices/oilsystem',
    textLink: 'Маслянная система'
  },
]

const services = [
  "ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ И РЕМОНТ",
  "КОМПЬЮТЕРНАЯ ДИАГНОСТИКА",
  "РЕМОНТ ДВИГАТЕЛЕЙ",
  "РЕМОНТ АКПП, МКПП",
  "РЕМОНТ СТАРТЕРОВ, ГЕНЕРАТОРОВ",
  "РЕМОНТ ЭЛЕКТРОННЫХ БЛОКОВ",
  "ЧИСТКА ИНЖЕКТОРОВ",
  "РЕМОНТ И ЗАПРАВКА КОНДИЦИОНЕРОВ",
  "СХОД-РАЗВАЛ 3D",
  "ШИНОМОНТАЖ",
  "КУЗОВНОЙ РЕМОНТ ЛЮБОЙ СЛОЖНОСТИ",
  "БЕСПОКРАСОЧНОЕ УДАЛЕНИЕ ВМЯТИН",
  "ЗАМЕНА СТЕКОЛ",
  "ХИМЧИСТКА, ПОЛИРОВКА, НАНОПОКРЫТИЕ",
  "ЗАПЧАСТИ (ОРИГИНАЛ, АНАЛОГИ)",
  "ЭВАКУАТОР"
]


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

  const openMapLink = () => {
    window.open('https://yandex.ru/map-widget/v1/?um=constructor%3A8ef65aa39d5309106de0085aeeafa938b6f1fa23b31455903e1cc4f38757ca63&amp;source=constructor', '_blank');
  };

  const openLink = (link: string | undefined) => {
    window.open(link, '_self');
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
                  <iframe
                    src={slide.src}
                    title={slide.alt}
                    width="100%"
                    height="350"
                  ></iframe>
                </div>
              ) : (
                <img src={slide.src} alt={slide.alt} />
              )}
              <div className='slide-text'>
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
                <button className='btn' onClick={slide.isMap ? openMapLink : () => openLink(slide.link)}>{slide.isMap ? 'Посмотреть на карте' : 'Узнать больше'}</button>
              </div>
            </div>
          ))}
          <button className='prev' onClick={prevSlide}>&#10094;</button>
          <button className='next' onClick={nextSlide}>&#10095;</button>
        </div>
      </section>
      <section className='our-services'>
        <div className="our-services__info">
          <h2 className='our-services__main-text'>
            НАШИ УСЛУГИ
          </h2>
          <p className="our-services__sub-text">
            Всё предельно открыто и честно
          </p>
          <ul>
            {services.map((service) => (
              <li className="our-services__item">{service}</li>
            ))}
          </ul>
        </div>
        <div className="out-services__form-appointment">
          <FormAppointment />
        </div>
      </section>
      <section className='container our-prices' style={{ background: '#555' }}>
        <h3 className='our-prices__head-text'>СТОИМОСТЬ РАБОТ</h3>
        <div className='prices'>
          {priceLink.map((priceItem) => (
            <Link to={priceItem.link} className='price-item'>
              <img src={priceItem.img} alt="priceImg" />
              <p>{priceItem.textLink}</p>
            </Link>
          ))}
        </div>
        <p className='our-sub-text'>Подберём интересующий вас ремонт автомобиля по адекватной стоимости</p>
      </section>
      <section style={{ height: '500px', background: '#111' }}></section>
    </>
  );
};

export default MainPageView;
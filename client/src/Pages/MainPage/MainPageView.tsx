import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import './main-page-styles.css';
import FormAppointment from '../../components/FormAppointment/FormAppointment';
import { Link } from 'react-router-dom';

// const slides = [ ... ] // Удаляем статические слайды

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
];

const priceLink = [
  {
    img: './img/price img/priceIcon1.svg',
    img2: './img/price img/priceIcon1-black.svg',
    link: 'servicework',
    textLink: 'Общие работы'
  },
  {
    img: './img/price img/priceIcon2.svg',
    img2: './img/price img/priceIcon2-black.svg',
    link: 'frontsuspension',
    textLink: 'Передняя подвеска'
  },
  {
    img: './img/price img/priceIcon3.svg',
    img2: './img/price img/priceIcon3-black.svg',
    link: 'rearsuspension',
    textLink: 'Задняя подвеска'
  },
  {
    img: './img/price img/priceIcon4.svg',
    img2: './img/price img/priceIcon4-black.svg',
    link: 'break',
    textLink: 'Тормозная система'
  },
  {
    img: './img/price img/priceIcon5.svg',
    img2: './img/price img/priceIcon5-black.svg',
    link: 'steering',
    textLink: 'Рулевое управление'
  },
  {
    img: './img/price img/priceIcon6.svg',
    img2: './img/price img/priceIcon6-black.svg',
    link: 'transmission',
    textLink: 'Трансмиссия'
  },
  {
    img: './img/price img/priceIcon8.svg',
    img2: './img/price img/priceIcon8-black.svg',
    link: 'engine',
    textLink: 'Двигатель'
  },
  {
    img: './img/price img/priceIcon9.svg',
    img2: './img/price img/priceIcon9-black.svg',
    link: 'electric',
    textLink: 'Электрика'
  },
  {
    img: './img/price img/priceIcon10.svg',
    img2: './img/price img/priceIcon10-black.svg',
    link: 'coolantsystem',
    textLink: 'Система охлаждения'
  },
  {
    img: './img/price img/priceIcon11.svg',
    img2: './img/price img/priceIcon11-black.svg',
    link: 'oilsystem',
    textLink: 'Маслянная система'
  },
];

const newsItems = [
  {
    date: '14.06.2024',
    title: 'Диагностика и обслуживание',
    description: 'Современная специализированная компания, имеющая огромный рабочий опыт по выбору и замене оригинальных, надежных запасных частей...',
    link: '/articles/1'
  },
  {
    date: '04.06.2024',
    title: 'Замена, промывка инжектора',
    description: 'Инжектор в автомобиле призван выполнять свою основную задачу по экономичному впрыску бензина в двигатель. При эксплуатации ТС происходит загрязнение топливной системы...',
    link: '/articles/2'
  },
  {
    date: '14.05.2024',
    title: 'Тормозная система: безопасность превыше всего',
    description: 'Неисправная тормозная система может привести к серьезным последствиям. Регулярная проверка и замена изношенных частей обеспечат вашу безопасность на дороге и предотвратят возможные аварии...',
    link: '/articles/3'
  }
];

interface Slide {
  src: string;
  alt: string;
  title: string;
  text: string;
  isMap: boolean;
  link?: string;
}

const MainPageView: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

useEffect(() => {
  const fetchSlides = async () => {
    try {
      const response = await fetch('/api/slides');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setSlides(data);
    } catch (error) {
      console.error('Error fetching slides:', error);
    }
  };

  fetchSlides();
}, []);

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
  }, [slides.length]);

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
                <img
                    src={slide.src}
                    alt={slide.alt}
                  />
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
              <li className="our-services__item" key={service}>{service}</li>
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
          {priceLink.map((priceItem, index) => (
            <Link
              to={`work-performed#${priceItem.link}`}
              className='price-item'
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <img src={hoverIndex === index ? priceItem.img : priceItem.img2} alt="priceImg" />
              <p>{priceItem.textLink}</p>
            </Link>
          ))}
        </div>
        <p className='our-sub-text'>Выполним ремонт автомобиля по адекватной стоимости</p>
      </section>
      <section style={{ background: '#111' }} className='news-section'>
        <h2 className='news-section__title'>НАШИ НОВОСТИ</h2>
        <div className='news-section__content'>
          {newsItems.map((item, index) => (
            <div key={index} className='news-item'>
              <h3 className='news-item__title'>{item.title}</h3>
              <p className='news-item__description'>{item.description}</p>
              <Link to={item.link} className='news-item__link'>Читать далее...</Link>
              <p className='news-item__date'>{item.date}</p>
            </div>
          ))}
        </div>
        <div className='news-section__more'>
          <Link to='/articles' className='news-section__more-link btn'>СМОТРЕТЬ ВСЕ</Link>
        </div>
      </section >
    </>
  );
};

export default MainPageView;

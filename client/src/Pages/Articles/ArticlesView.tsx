import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './articles-styles.css'


interface Article {
  _id: number;
  title: string;
  content: string;
}

const articles = [
  {
    _id: 1,
    date: '14.06.2024',
    title: 'Диагностика и обслуживание',
    content: 'Современная специализированная компания, имеющая огромный рабочий опыт по выбору и замене оригинальных, надежных запасных частей...',
    link: '/articles/diagnostika'
  },
  {
    _id: 2,
    date: '04.06.2024',
    title: 'Замена, промывка инжектора',
    content: 'Инжектор в автомобиле призван выполнять свою основную задачу по экономичному впрыску бензина в двигатель. При эксплуатации ТС происходит загрязнение топливной системы...',
    link: '/articles/injector'
  },
  {
    _id: 3,
    date: '14.05.2024',
    title: 'Тормозная система: безопасность превыше всего',
    content: 'Неисправная тормозная система может привести к серьезным последствиям. Регулярная проверка и замена изношенных частей обеспечат вашу безопасность на дороге и предотвратят возможные аварии...',
    link: '/articles/brakes'
  }
];

const ArticlesView: React.FC = () => {
  // const [articles, setArticles] = useState<Article[]>([]);

  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     try {
  //       const response = await fetch('/api/articles');
  //       if (response.ok) {
  //         const data = await response.json();
  //         setArticles(data);
  //       } else {
  //         console.error('Failed to fetch articles');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching articles:', error);
  //     }
  //   };

  //   fetchArticles();
  // }, []);

  return (
    <div className='container'>
      <h1>Список статей</h1>
      <ul className='articles-list'>
        {articles.map(article => (
          <li key={article._id}>
            <Link to={`/articles/${article._id}`} className='btn'>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div >
  );
};

export default ArticlesView;

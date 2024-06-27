import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './article-styles.css'

interface Article {
  id: number;
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

const ArticleView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const idNum = Number(id)
  // const [article, setArticle] = useState<Article | null>(null);

  // useEffect(() => {
  //   const fetchArticle = async () => {
  //     try {
  //       const response = await fetch(`/api/articles/${id}`);
  //       if (response.ok) {
  //         const data = await response.json();
  //         setArticle(data);
  //       } else {
  //         console.error('Failed to fetch article');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching article:', error);
  //     }
  //   };

  //   fetchArticle();
  // }, [id]);

  const article = articles[idNum - 1]

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <section className='article-details container'>
      <Link to='/articles' className='btn'>Назад</Link>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </section>

  );
};

export default ArticleView;

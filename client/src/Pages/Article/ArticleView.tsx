import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

interface Article {
  id: number;
  title: string;
  content: string;
}

const ArticleView: React.FC = () => {

  const article = {
    _id: 3,
    date: '14.05.2024',
    title: 'Тормозная система: безопасность превыше всего',
    content: 'Неисправная тормозная система может привести к серьезным последствиям. Регулярная проверка и замена изношенных частей обеспечат вашу безопасность на дороге и предотвратят возможные аварии...',
    link: '/articles/brakes'
  }


  // const { id } = useParams<{ id: string }>();
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

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='container'>
        <h1>{article.title}</h1>
        <p>{article.content}</p>
      </div>
      <Link to='/articles' className='btn'>Назад</Link>
    </>
  );
};

export default ArticleView;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Article {
  _id: number;
  title: string;
  content: string;
}

const ArticlesView: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles');
        if (response.ok) {
          const data = await response.json();
          setArticles(data);
        } else {
          console.error('Failed to fetch articles');
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Список статей</h1>
      <ul>
        {articles.map(article => (
          <li key={article._id}>
            <Link to={`/articles/${article._id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesView;

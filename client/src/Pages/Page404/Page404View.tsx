import React from 'react';
import { Link } from 'react-router-dom';
import './Page404Styles.css';

const Page404View: React.FC = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Страница не найдена</h1>
      <p>Извините, но запрашиваемая вами страница не существует.</p>
      <Link to="/" className="back-link">Вернуться на главную</Link>
    </div>
  );
}

export default Page404View;

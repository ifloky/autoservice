import React from 'react';
import { Helmet } from 'react-helmet';

const MainPageView: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Ремонт авто в Минске</title>
        <meta name="description" content="У нас вы можете дешево отремотрировать ваш авто" />
      </Helmet>
      <h1>Main Page</h1>
      <nav>
        <ul>
          <li>Oil Change</li>
          <li>Brake Replacement</li>
          <li>Engine Diagnostics</li>
          <li>Tire Rotation</li>
        </ul>
      </nav>
    </div>
  );
};

export default MainPageView;
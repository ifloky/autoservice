import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppointmentForm from './components/AppointmentForm';
import AppointmentsList from './components/AppointmentsList';
import ArticleView from './Pages/Article/ArticleView';
import ArticlesView from './Pages/Articles/ArticlesView';
import MainPageView from './Pages/MainPage/MainPageView';
import Page404View from './Pages/Page404/Page404View';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainPageView />} />
          <Route path="/articles" element={<ArticlesView />} />
          <Route path="/articles/:id" element={<ArticleView />} />
          <Route path="/appointment" element={<AppointmentForm />} />
          <Route path="/appointments" element={<AppointmentsList />} />

          <Route path="*" element={<Page404View />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
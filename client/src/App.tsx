import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleView from './Pages/Article/ArticleView';
import ArticlesView from './Pages/Articles/ArticlesView';
import MainPageView from './Pages/MainPage/MainPageView';
import Page404View from './Pages/Page404/Page404View';
import { Contacts } from "./Pages/Contacts/Contacts";

import Header from './components/Header/Header';
import './App.css'
import Footer from './components/Footer/Footer';
import AppointmentList from './Pages/AppointmentList/AppointmentList';
import About from './Pages/About/About';
import { WorkPerformed } from './Pages/WorkPerformed/WorkPerformed';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className='content'>
          <Routes>
            <Route path="/" element={<MainPageView />} />
            <Route path="/articles" element={<ArticlesView />} />
            <Route path="/articles/:id" element={<ArticleView />} />
            <Route path='/appointment' element={<AppointmentList />} />
            <Route path='/about' element={<About />} />
            <Route path='/work-performed' element={<WorkPerformed />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path="*" element={<Page404View />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
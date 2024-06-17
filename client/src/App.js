import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './components/Services';
import AppointmentForm from './components/AppointmentForm';
import AppointmentsList from './components/AppointmentsList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/appointment" element={<AppointmentForm />} />
          <Route path="/appointments" element={<AppointmentsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
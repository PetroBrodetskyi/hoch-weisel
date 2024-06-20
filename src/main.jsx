import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Events from './pages/Events';
import History from './pages/History';
import './index.css';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/hoch-weisel">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

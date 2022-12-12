import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './app.css';
import { Home, PageNotFound } from './pages';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route path="*" element={<Navigate to={'/not-found'} />} />
          <Route path="/not-found" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

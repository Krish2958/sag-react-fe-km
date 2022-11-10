import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import { Home } from './pages';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import './app.css';
import React from 'react';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home, PageNotFound } from './pages';
import Clubs from './pages/Clubs';
import Sports from './pages/Sports';
import About from './pages/About';
import Events from './pages/Events';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <SideBar>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/" element={<Events />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to={'/not-found'} />} />
            <Route path="/not-found" element={<PageNotFound />} />
          </Routes>
        </SideBar>
      </BrowserRouter>
    </div>
  );
};

export default App;

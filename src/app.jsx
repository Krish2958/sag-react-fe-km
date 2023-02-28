import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './app.css';
import './pages/Home/components/Sidebar/SideBar.css';
import { AuthRoute, ProtectedRoute, PublicRoute } from './helpers';
import { Home, PageNotFound } from './pages';
import SideBar from './pages/Home/components/Sidebar/SideBar';
import About from './pages/About';
import Clubs from './pages/Clubs';
import Sports from './pages/Sports';
import Events from './pages/Events';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route element={<AuthRoute />}>
              {/* Login Route */}
              {/* SignUp Route */}
            </Route>
            <Route path="/" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/clubs" element={<Clubs />} />

            <Route element={<PublicRoute />}>
              {/* All Public Routes go here. */}
            </Route>

            <Route element={<ProtectedRoute />}>
              {/* All Protected Routes go here. */}
            </Route>
          </Route>

          <Route path="*" element={<Navigate to={'/not-found'} />} />
          <Route path="/not-found" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

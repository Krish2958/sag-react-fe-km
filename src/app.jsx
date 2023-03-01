import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './app.css';
import './pages/Home/components/Sidebar/SideBar.css';
import { AuthRoute, ProtectedRoute, PublicRoute } from './helpers';
import { Home, PageNotFound } from './pages';
import SideBar from './pages/Home/components/Sidebar';
import About from './pages/Home/components/About/About';
import Clubs from './pages/Home/components/Clubs/Clubs';
import Sports from './pages/Home/components/Sports/Sports';
import Events from './pages/Home/components/Events/Events';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <SideBar />
            <Route element={<AuthRoute />}>
              {/* Login Route */}
              {/* SignUp Route */}
            </Route>

            <Route element={<PublicRoute />}>
              {/* All Public Routes go here. */}
              <Route path="/" element={<Events />} />
              <Route path="/about" element={<About />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/clubs" element={<Clubs />} />
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

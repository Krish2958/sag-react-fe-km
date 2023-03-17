import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './app.css';
import { AuthRoute, ProtectedRoute, PublicRoute } from './helpers';
import {
  Home,
  Login,
  PageNotFound,
  Events,
  About,
  Clubs,
  Sports,
} from './pages';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {/* Navigate to Events page by default */}
          <Route path="/" element={<Navigate to={Events.route} />} />

          {/* Auth Routes */}
          <Route element={<AuthRoute />}>
            {/* Login Route */}
            <Route path={Login.route} element={<Login />} />
          </Route>

          {/* Main Routes */}
          <Route exact path={Home.route} element={<Home />}>
            <Route element={<PublicRoute />}>
              {/* All Public Routes go here. */}
              <Route path={Events.route} element={<Events />} />
              <Route path={Clubs.route} element={<Clubs />} />
              <Route path={Sports.route} element={<Sports />} />
              <Route path={About.route} element={<About />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              {/* All Protected Routes go here. */}
            </Route>
          </Route>

          <Route path="*" element={<Navigate to={PageNotFound.route} />} />
          <Route path={PageNotFound.route} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

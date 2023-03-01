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
          <Route exact path={Home.route} element={<Home />}>
            <Route element={<AuthRoute />}>
              {/* Login Route */}
              <Route path={Login.route} element={<Login />} />
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

          <Route path="*" element={<Navigate to={PageNotFound.route} />} />
          <Route path={PageNotFound.route} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './app.css';
import { AuthRoute, ProtectedRoute, PublicRoute } from './helpers';
import { Home, Login, PageNotFound } from './pages';

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

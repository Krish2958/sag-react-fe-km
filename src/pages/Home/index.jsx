import React from 'react';
import { Outlet } from 'react-router-dom';
import './home.css';

export const Home = () => {
  return (
    <div className="home">
      You have successfully started the react app
      {/* Profile Button Components */}
      {/* Navigation Panel Component */}
      <Outlet />
    </div>
  );
};

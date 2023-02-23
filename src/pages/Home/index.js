import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './home.css';

export const Home = () => {
  return (
    <div className="home">
      {/* Profile Button Components */}

      {/* Navigation Panel Component */}

      <Outlet />
    </div>
  );
};

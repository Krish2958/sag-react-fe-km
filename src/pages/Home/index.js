import React from 'react';
import { EventsSection } from './components';
import './home.css';

export const Home = () => {
  return (
    <div className="home">
      {/* Header Section */}
      <header>SAG Web App started successfully!</header>

      {/* Upcoming Events Section */}
      <EventsSection />

      {/* Club Section */}
      {/* Footer Section */}
    </div>
  );
};

export default Home;

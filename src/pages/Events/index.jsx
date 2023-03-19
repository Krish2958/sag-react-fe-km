import React from 'react';
import EventCard from './components/Card';

export const Events = () => {
  return (
    <>
      <div className="title">Events</div>
      <EventCard />
    </>
  );
};

Events.route = '/events';

import React from 'react';
import { default as EventCard } from './EventCard';
import { Button } from '../../../../components';
import './EventCard.css';
import image from './art_craft-club-logo-removebg-preview 1.png';
import image1 from './publication-club-logo6 1.png';
const EventsSection = () => {
  return (
    <div>
      <EventCard
        clubname={'Art & Craft Club'}
        clublogo={<img src={image} />}
        pilltext_1={'Art  '}
        pilltext_2={'Competition'}
        pillvariant_1={'warning'}
        pillvariant_2={'danger'}
        eventposterURL={
          'https://t2.gstatic.com/images?q=tbn:ANd9GcRwAVGd70RjVWBB8igTst56Yr8bhUK9ubxAQkvyAxahyGpnm-dW'
        }
      >
        Salvador Dali
      </EventCard>
      <EventCard
        clubname={'Publication Club'}
        clublogo={<img src={image1} />}
        pilltext_1={'Writing'}
        pilltext_2={'Competition'}
        pillvariant_1={'info'}
        pillvariant_2={'danger'}
        eventposterURL={
          'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8qCc9Ck-zGDax-BhTtIEXP9QEziOmrKpCLVU-_QdLN6ET98G4'
        }
      >
        Article Writing Competition
      </EventCard>
      <Button className="button" variant="secondary">
        View all Events
      </Button>
    </div>
  );
};

export default EventsSection;

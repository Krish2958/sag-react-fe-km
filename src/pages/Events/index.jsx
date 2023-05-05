import React from 'react';
import EventCard from './components/Card';
import { LogoIdentifier } from '../../components';

export const Events = () => {
  return (
    <div className="title">
      Events
      <EventCard
        title="Essay Writing Competition"
        category={['Competition', 'Quizzes']}
        clubname="Art & Craft Club"
        eventdate="23"
        month="May"
        pastEvent={false}
        clublogo={LogoIdentifier.ArtAndCraftClub}
      />
      <EventCard
        title="Semantics"
        category={['Competition', 'Quizzes']}
        clubname="Literal Club"
        eventdate="23"
        month="Mar"
        pastEvent={true}
        clublogo={LogoIdentifier.LiteralClub}
      />
    </div>
  );
};

Events.route = '/events';

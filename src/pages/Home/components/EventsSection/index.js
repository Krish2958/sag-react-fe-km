import React from 'react';
import EventCard from './EventCard';
import { Button, LogoIdentifier, PillVariant } from '../../../../components';

const initialEventsData = [
  {
    title: 'Doodle Art, Painting & Sketching Competition',
    posterSource:
      'https://t2.gstatic.com/images?q=tbn:ANd9GcRwAVGd70RjVWBB8igTst56Yr8bhUK9ubxAQkvyAxahyGpnm-dW',
    pills: [
      {
        text: 'Art',
        variant: PillVariant.Warning,
        color: '#123344',
      },
      {
        text: 'Competition',
        variant: PillVariant.Danger,
        color: '#435CA7',
      },
    ],
    clubLogoSource: LogoIdentifier.ArtAndCraftClub,
    clubName: 'Art & Craft Club',
    onClickRegister: () => {
      console.log('Register for Salvador Dali.');
    },
    onClickViewDetails: () => {
      console.log('View details of Salvador Dali');
    },
  },
  {
    title: 'Article Writing Competition',
    posterSource:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8qCc9Ck-zGDax-BhTtIEXP9QEziOmrKpCLVU-_QdLN6ET98G4',
    pills: [
      {
        text: 'Writing',
        variant: PillVariant.Info,
        color: '#123344',
      },
      {
        text: 'Competition',
        variant: PillVariant.Danger,
        color: '#435CA7',
      },
    ],
    clubLogoSource: LogoIdentifier.PublicationClub,
    clubName: 'Publication Club',
    onClickRegister: () => {
      console.log('Register for Article Writing Competition.');
    },
    onClickViewDetails: () => {
      console.log('View details of Article Writing Competition');
    },
  },
];

const EventsSection = () => {
  // const [eventsData, setEventsData] = useState(initialEventsData);

  return (
    <div>
      {initialEventsData.map((eventData, index) => (
        <EventCard key={eventData.title + index} {...eventData} />
      ))}

      <Button className="button" variant="secondary">
        View all Events
      </Button>
    </div>
  );
};

export default EventsSection;

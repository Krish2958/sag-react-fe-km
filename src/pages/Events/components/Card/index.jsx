import React from 'react';
import { Card } from 'react-bootstrap';
import './EventCard.css';
import { Icon, Logo, LogoIdentifier } from '..//..//..//..//components';
const EventCard = () => {
  return (
    <Card className="ECard">
      <Card.Img
        className="imgcard"
        variant="top"
        src="src/assets/images/Rectangle 224.png"
      />
      <Card.Body>
        <Card.Title className="ititle">Essay Writing Competition</Card.Title>
        <div className="club">
          {/* <Icon imageSource='src/assets/images/club-logos/publication-club-logo.png' iconSize='2rem' ></Icon> */}
          <Card.Text className="textclub">Publication Club</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EventCard;

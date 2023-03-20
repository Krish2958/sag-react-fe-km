import React from 'react';
import { Card } from 'react-bootstrap';
import './EventCard.css';
const EventCard = () => {
  return (
    <Card className="Card">
      <Card.Img
        className="imgcard"
        variant="top"
        src="src/assets/images/Rectangle 224.png"
      />
      <Card.Body>
        <Card.Title className="title">Essay Writing Competition</Card.Title>
        <Card.Text className="club ">Publication Club</Card.Text>
        <div className="square">
          <div className="date">24</div>
          <div className="month">MAR</div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EventCard;

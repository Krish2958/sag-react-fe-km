import React from 'react';
import { Card } from 'react-bootstrap';
import './EventCard.css';
const EventCard = () => {
  return (
    <Card className="ECard">
      <Card.Img
        className="imgcard"
        variant="top"
        src="src/assets/images/Rectangle 224.png"
      />
      <Card.Body>
        <Card.Title >
          <div className='bstitle'>
          Essay Writing Competition</div>
        <Card.Text>
          <h5 className="club ">Publication Club</h5>
        <div className="square">
          <div className="content">
          <h3 className="date">24</h3>
          <h5 className="month">Mar</h5>
          </div>
        </div>
        </Card.Text>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default EventCard;

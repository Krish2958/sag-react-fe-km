import React from 'react';
import { Button, Pill, Icon } from '../../../../components';
import PropTypes from 'prop-types';
import './EventCard.css';

const EventCard = ({
  children,
  clubname,
  clublogo,
  pilltext_1,
  pilltext_2,
  pillvariant_1,
  pillvariant_2,
  eventposterURL,
}) => {
  return (
    <div className="container">
      <div className="card">
        <img className="img" src={eventposterURL} alt="rover" />
        <div className="eventname">{children}</div>
        <div className="card-body">
          <div className="pilltag-p">
            <Pill variant={pillvariant_1}>{pilltext_1}</Pill>
          </div>
          <div className="pilltag-s">
            <Pill variant={pillvariant_2}>{pilltext_2}</Pill>
          </div>
          <Button className="buttonp" variant="primary">
            View Details
          </Button>
          <Button className="buttons" variant="secondary">
            Register
          </Button>
          <span>
            <Icon className="clubicon" srcImage={clublogo}></Icon>
            <div className="clubname">{clubname}</div>
          </span>
        </div>
      </div>
    </div>
  );
};
EventCard.propTypes = {
  children: PropTypes.node.isRequired,
  clubname: PropTypes.string,
  clublogo: PropTypes.element,
  pilltext_1: PropTypes.string,
  pilltext_2: PropTypes.string,
  pillvariant_1: PropTypes.string,
  pillvariant_2: PropTypes.string,
  eventposterURL: PropTypes.element,
};

export default EventCard;

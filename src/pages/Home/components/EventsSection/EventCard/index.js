import React from 'react';
import {
  Button,
  Pill,
  Icon,
  isHexColorCode,
  ButtonVariant,
} from '../../../../../components';
import PropTypes from 'prop-types';
import './EventCard.css';

const EventCard = ({
  title,
  posterSource,
  pills,
  clubLogoSource,
  clubName,
  onClickViewDetails,
  onClickRegister,
}) => {
  return (
    <div className="card event-card">
      <img
        className="event-poster-image"
        src={posterSource}
        alt="Event Poster"
      />
      <div className="event-details-container">
        <span className="event-title">{title}</span>

        <div className="event-pills-container">
          {pills.map((pill, index) => (
            <Pill key={pill.text + index} {...pill}>
              {pill.text}
            </Pill>
          ))}
        </div>

        <span className="event-club-label">
          <Icon imageSource={clubLogoSource}></Icon>
          <span>{clubName}</span>
        </span>

        <div className="event-card-buttons-container">
          <Button variant={ButtonVariant.Primary} onClick={onClickViewDetails}>
            View Details
          </Button>

          <Button variant={ButtonVariant.Secondary} onClick={onClickRegister}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  title: PropTypes.string,
  posterSource: PropTypes.string,
  pills: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      color: isHexColorCode,
    }),
  ),
  clubLogoSource: PropTypes.string,
  clubName: PropTypes.string,
  onClickRegister: PropTypes.func,
  onClickViewDetails: PropTypes.func,
};

export default EventCard;

import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './EventCard.css';
import { PropTypes } from 'prop-types';
import {
  Badge,
  Icon,
  IconIdentifier,
  Colors,
  LogoIdentifier,
  Logo,
  Button,
  ButtonVariant,
} from '../../../../components';
import { getFormattedDate } from '../../../../helpers/utils/formatters';

const EventCard = ({
  title,
  clubName,
  clubLogo,
  eventDate,
  pastEvent,
  thumbnailSource,
  badgeData,
}) => {
  const [isNotifiable, setNotifiable] = useState(true);

  const onClickNotifyHandler = () => {
    setNotifiable((current) => !current);
  };

  const { month, date } = getFormattedDate(eventDate);
  const isSingleDigitDate = String(date).length < 2;

  return (
    <Card className="sag-event-card" onClick={null}>
      <Card.Img
        className="sag-event-card__image"
        variant="top"
        src={thumbnailSource}
      />
      <Card.Body>
        <Card.Title className="sag-event-card__title">{title}</Card.Title>
        <Button
          className="sag-event-card__notification"
          onClick={onClickNotifyHandler}
          variant={ButtonVariant.Secondary}
        >
          {pastEvent ? (
            <Icon
              className="sag-event-card__icon"
              iconIdentifier={IconIdentifier.Gallery}
            />
          ) : isNotifiable ? (
            <Icon
              className="sag-event-card__icon"
              iconIdentifier={IconIdentifier.Bell}
            />
          ) : (
            <Icon
              className="sag-event-card__icon"
              iconIdentifier={IconIdentifier.BellOff}
            />
          )}
        </Button>
        <div className="sag-event-card__badge">
          {badgeData.map((badge, index) => (
            <Badge
              key={index}
              iconIdentifier={badge.iconIdentifier}
              color={badge.color}
              text={badge.text}
            />
          ))}
        </div>
        <span className="sag-event-card__club">
          <Logo
            className="sag-event-card__club__logo"
            logoIdentifier={clubLogo}
          />
          <Card.Text className="sag-event-card__club__name">
            {clubName}
          </Card.Text>
        </span>
        <div
          className="sag-event-card__date__box"
          style={{
            backgroundColor: pastEvent ? Colors.Secondary : Colors.Primary,
          }}
        >
          <h3
            className={`sag-event-card__date ${
              isSingleDigitDate ? 'sag-event-card__date--centered' : ''
            }`}
          >
            {date}
          </h3>
          <h5 className="sag-event-card__month">{month}</h5>
        </div>
      </Card.Body>
    </Card>
  );
};

EventCard.propTypes = {
  title: PropTypes.node.isRequired,
  clubName: PropTypes.node.isRequired,
  clubLogo: PropTypes.oneOf(Object.values(LogoIdentifier)),
  eventDate: PropTypes.node.isRequired,
  pastEvent: PropTypes.bool,
  thumbnailSource: PropTypes.node.isRequired,
  badgeData: PropTypes.arrayOf(
    PropTypes.shape({
      iconIdentifier: PropTypes.oneOf(Object.values(IconIdentifier)).isRequired,
      color: PropTypes.string.isRequired,
      text: PropTypes.node.isRequired,
    }),
  ).isRequired,
};

export default EventCard;

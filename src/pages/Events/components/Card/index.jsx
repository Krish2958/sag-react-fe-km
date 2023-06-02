import { React, useState } from 'react';
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
} from '../../../../components';
const EventCard = ({
  title,
  category,
  clubname,
  clublogo,
  eventdate,
  month,
  pastEvent,
  imageUrl,
}) => {
  const [isNotifiable, setNotifiable] = useState(true);

  const handleToggle = () => {
    setNotifiable((current) => !current);
  };

  return (
    <Card className="sag-event-card" onClick={null}>
      <Card.Img
        className="sag-event-card__image"
        variant="top"
        src={imageUrl}
      />
      <Card.Body>
        <Card.Title className="sag-event-card__title">{title}</Card.Title>
        <div className="sag-event-card__notification" onClick={handleToggle}>
          {pastEvent ? (
            <Icon
              className="sag-event-card__gallery"
              iconIdentifier={IconIdentifier.Gallery}
            />
          ) : isNotifiable ? (
            <Icon
              className="sag-event-card__bell"
              iconIdentifier={IconIdentifier.Bell}
            />
          ) : (
            <Icon
              className="sag-event-card__belloff"
              iconIdentifier={IconIdentifier.BellOff}
            />
          )}
        </div>
        <div className="sag-event-card__badge">
          <Badge
            iconIdentifier={IconIdentifier.Trophy}
            color="#F03FA9"
            text={category[0]}
          />
          <Badge
            iconIdentifier={IconIdentifier.Bulb}
            color="#16537E"
            text={category[1]}
          />
        </div>
        <span className="sag-event-card__club">
          <Logo
            className="sag-event-card__club__logo"
            logoIdentifier={clublogo}
            iconSize="2px"
          ></Logo>
          <Card.Text className="sag-event-card__club__name">
            {clubname}
          </Card.Text>
        </span>
        <div
          className="sag-event-card__date__box"
          style={{
            backgroundColor: pastEvent ? Colors.Secondary : Colors.Primary,
          }}
        >
          {
            <>
              <h3 className="sag-event-card__date">{eventdate}</h3>
              <h5 className="sag-event-card__month">{month}</h5>
            </>
          }
        </div>
      </Card.Body>
    </Card>
  );
};

EventCard.propTypes = {
  title: PropTypes.node.isRequired,
  category: PropTypes.node,
  clubname: PropTypes.node.isRequired,
  clublogo: PropTypes.oneOf(Object.values(LogoIdentifier)),
  eventdate: PropTypes.node.isRequired,
  month: PropTypes.node.isRequired,
  pastEvent: PropTypes.node.bool,
  imageUrl: PropTypes.node.isRequired,
};

export default EventCard;

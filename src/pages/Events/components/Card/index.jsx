import { React, useState } from 'react';
import { Card } from 'react-bootstrap';
import './EventCard.css';
import { PropTypes } from 'prop-types';
import { Badge, Icon, IconIdentifier,Colors } from '../../../../components';
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
    <Card className="sag-event__card" onClick={null}>
      <Card.Img
        className="sag-event-card__image"
        variant="top"
        src={imageUrl}
      />
      <Card.Body>
        <Card.Title className="sag-card__title">{title}</Card.Title>
        <div className="sag-notification" onClick={handleToggle}>
          {pastEvent ? (
            <Icon
              className="sag-card__gallery"
              iconIdentifier={IconIdentifier.Gallery}
            />
          ) : isNotifiable ? (
            <Icon
              className="sag-card__bell"
              iconIdentifier={IconIdentifier.Bell}
            />
          ) : (
            <Icon
              className="sag-card__belloff"
              iconIdentifier={IconIdentifier.BellOff}
            />
          )}
        </div>
        <div className="sag-card__badge">
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
        <span className="sag-card__club">
          <Icon
            className="sag-logoclub"
            imageSource={clublogo}
            iconSize="2px"
          ></Icon>
          <Card.Text className="sag-event__clubname">{clubname}</Card.Text>
        </span>
        <div
          className="sag-event__square"
          style={{ backgroundColor: pastEvent ? Colors.Secondary : Colors.Primary }}
        >
          {
            <>
              <h3 className="sag-event__date">{eventdate}</h3>
              <h5 className="sag-event__month">{month}</h5>
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
  clublogo: PropTypes.node.isRequired,
  eventdate: PropTypes.node.isRequired,
  month: PropTypes.node.isRequired,
  pastEvent: PropTypes.node.bool,
  imageUrl: PropTypes.node.isRequired,
};

export default EventCard;

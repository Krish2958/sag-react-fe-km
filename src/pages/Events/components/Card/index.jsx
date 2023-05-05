import { React, useState } from 'react';
import { Card } from 'react-bootstrap';
import './EventCard.css';
import { PropTypes } from 'prop-types';
import { Badge, Icon, IconIdentifier } from '../../../../components';
const EventCard = ({
  title,
  category,
  clubname,
  clublogo,
  eventdate,
  month,
  pastEvent,
}) => {
  const [isNotifiable, setNotifiable] = useState(true);

  const handleToggle = () => {
    setNotifiable((current) => !current);
  };

  return (
    <Card className="sag-card" onClick={null}>
      <Card.Img
        className="sag-imgcard"
        variant="top"
        src="src/assets/images/Rectangle 224.png"
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
          <Card.Text className="sag-clubname">{clubname}</Card.Text>
        </span>
        <div
          className="sag-square"
          style={{ backgroundColor: pastEvent ? '#DCDCDC' : '#0C3B5B' }}
        >
          {
            <>
              <h3 className="sag-date">{eventdate}</h3>
              <h5 className="sag-month">{month}</h5>
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
};

export default EventCard;

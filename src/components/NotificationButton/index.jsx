import React, { useState } from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import { Button, ButtonVariant, Icon, IconIdentifier } from '..';
import { Illustration } from '../../assets/images';
import './Notification.css';

const NotificationButton = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div>
      <Button
        style={{ backgroundColor: show ? 'white' : '#DCDCDC' }}
        onClick={handleClick}
        className="notification-bell-icon-button"
        variant={ButtonVariant.Secondary}
      >
        <Icon iconIdentifier={IconIdentifier.Bell} />
      </Button>
      <Overlay
        className="notification-overlay"
        show={show}
        target={target}
        placement="bottom"
      >
        <Popover>
          <Popover.Body>
            <img className="illustration" src={Illustration.BellCrossed} />
            <p>
              <strong>No Notifications Yet.</strong>
            </p>
            You have no notifications right now.
            <br />
            Come back later.
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
};

export default NotificationButton;

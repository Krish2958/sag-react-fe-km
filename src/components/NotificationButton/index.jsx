import React, { useState, useRef } from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import { Button, ButtonVariant, Icon, IconIdentifier } from '..';
import { Illustration } from '../../assets/images';
import './Notification.css';

const NotificationButton = () => {
  const [showNotificationOverlay, setShowNotificationOverlay] = useState(false);
  const targetRef = useRef(null);

  const handleClick = (event) => {
    setShowNotificationOverlay(!showNotificationOverlay);
    targetRef.current = event.target;
  };

  return (
    <div>
      <Button
        style={{
          backgroundColor: showNotificationOverlay ? 'white' : '#DCDCDC',
        }}
        onClick={handleClick}
        className="notification-bell-icon-button"
        variant={ButtonVariant.Secondary}
      >
        <Icon iconIdentifier={IconIdentifier.Bell} />
      </Button>
      <Overlay
        className="notification-overlay"
        show={showNotificationOverlay}
        target={targetRef.current}
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

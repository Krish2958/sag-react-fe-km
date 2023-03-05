import React, { useState } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import { Button, ButtonVariant, Icon, IconIdentifier } from '../../components';
import { Illustration } from '../../assets/images';
import './notification.css';

export const NotificationButton = () => {
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

import React, { useState } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import { Button, ButtonVariant, Icon, IconIdentifier } from '../../components';
import { Illustration } from '../../assets/images';
import './notification.css';

export const Notification = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const iconStyle = {
    backgroundColor: show ? 'white' : '#DCDCDC',
  };

  return (
    <div>
      <Button
        style={iconStyle}
        onClick={handleClick}
        className="bell-button"
        variant={ButtonVariant.Secondary}
      >
        <Icon iconIdentifier={IconIdentifier.Calendar} />
      </Button>
      <Overlay
        className="popover"
        show={show}
        target={target}
        placement="bottom"
      >
        <Popover id="popover-contained">
          <Popover.Body>
            <img className="illustration" src={Illustration.UserChilling} />
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

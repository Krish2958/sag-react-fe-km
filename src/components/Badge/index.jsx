import React from 'react';
import { Badge as BootstrapBadge } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

import { isHexColorCode, Colors } from '../helpers';
import { Icon } from '../../components';
import './Badge.css';

const Badge = ({ text, iconIdentifier, color = Colors.Primary }) => {
  return (
    <BootstrapBadge
      className="sag-badge-padding"
      bg="sag-color"
      style={{ backgroundColor: color }}
    >
      <Icon
        className="sag-icon"
        iconIdentifier={iconIdentifier}
        color={Colors.White}
      />
      {text}
    </BootstrapBadge>
  );
};

Badge.propTypes = {
  text: PropTypes.node.isRequired,
  iconIdentifier: PropTypes.node.isRequired,
  color: isHexColorCode,
};

export default Badge;

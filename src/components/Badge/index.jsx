import React from 'react';
import { Badge as BootstrapBadge } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

import { isHexColorCode, Colors } from '../helpers';
import { Icon, IconIdentifier } from '../../components';
import './Badge.css';

const Badge = ({ text, iconIdentifier, color = Colors.Primary }) => {
  return (
    <BootstrapBadge
      className="sag-badge"
      bg="sag-color"
      style={{ backgroundColor: color }}
    >
      <Icon
        className="sag-icon"
        iconIdentifier={iconIdentifier}
        color={Colors.White}
        iconSize="10"
      />
      {text}
    </BootstrapBadge>
  );
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  iconIdentifier: PropTypes.oneOf(Object.values(IconIdentifier)),
  color: isHexColorCode,
};

export default Badge;

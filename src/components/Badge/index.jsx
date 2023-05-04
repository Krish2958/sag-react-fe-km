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
      bg={null}
      style={{ backgroundColor: color }}
    >
      <Icon
        className="sag-badge__icon"
        iconIdentifier={iconIdentifier}
        color={Colors.White}
      />
      {text}
    </BootstrapBadge>
  );
};

Badge.propTypes = {
  text: PropTypes.string,
  iconIdentifier: PropTypes.oneOf(Object.values(IconIdentifier)),
  color: isHexColorCode,
};

export default Badge;

import React from 'react';
import { Badge as BootstrapBadge } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import './Badge.css';
import { Colors } from '../helpers';
import { Icon, IconIdentifier } from '../../components';

const Badge = ({ children, iconIdentifier, color = Colors.Primary }) => {
  return (
    <span className="badge">
      <BootstrapBadge
        className="badge-padding"
        bg="n"
        style={{ backgroundColor: color }}
      >
        <Icon
          className="icon"
          iconIdentifier={iconIdentifier}
          color={Colors.White}
        ></Icon>
        <div className="child">{children}</div>
      </BootstrapBadge>
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  iconIdentifier: PropTypes.oneOf(Object.values(IconIdentifier)),
  color: PropTypes.oneOf(Object.values(Colors)),
};

export default Badge;

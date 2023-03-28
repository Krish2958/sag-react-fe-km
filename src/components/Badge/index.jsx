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
        bsPrefix=""
        className="sagbadge-padding"
        bg=""
        style={{ backgroundColor: color }}
      >
        <Icon
          bsPrefix=""
          className="sagicon"
          iconIdentifier={iconIdentifier}
          color={Colors.White}
        />
        <div className="sagchild">{children}</div>
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

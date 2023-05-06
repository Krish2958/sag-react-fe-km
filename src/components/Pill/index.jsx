import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import './Pill.css';
import { Colors } from '../helpers';

const Pill = ({ children, color = Colors.Primary }) => {
  return (
    <Badge
      pill
      bg=""
      className="pill-padding"
      style={{ backgroundColor: color }}
    >
      {children}
    </Badge>
  );
};

Pill.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(Object.values(Colors)),
};

export default Pill;

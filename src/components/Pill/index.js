import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import './Pill.css';
const Pill = ({ children, variant = 'primary' }) => {
  return (
    <Badge pill bg={variant} className="pill-padding">
      {children}
    </Badge>
  );
};
Pill.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'dark',
  ]),
  children: PropTypes.node.isRequired,
};
export default Pill;

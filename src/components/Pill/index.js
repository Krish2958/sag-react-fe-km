import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import './Pill.css';
import { PillVariant } from './PillVariant';
import { isHexColorCode } from '../helpers';

const Pill = ({ children, variant = PillVariant.Primary, color }) => {
  return (
    <Badge pill bg={variant} className="pill-padding" color={color}>
      {children}
    </Badge>
  );
};

Pill.propTypes = {
  variant: PropTypes.oneOf(Object.values(PillVariant)),
  children: PropTypes.node.isRequired,
  color: isHexColorCode,
};

export default Pill;
export { PillVariant };

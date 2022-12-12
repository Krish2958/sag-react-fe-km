import React from 'react';
import PropType from 'prop-types';
import './Logo.css';

const Logo = ({ logo }) => {
  let className = 'logo-shadow';
  return <div className={className}>{logo}</div>;
};

Logo.propTypes = {
  logo: PropType.element,
};

export default Logo;

import React from 'react';
import PropType from 'prop-types';
import './Logo.css';

const Logo = ({ image }) => {
  let className = 'logo-shadow';
  return <div className={className}>{image}</div>;
};

Logo.propTypes = {
  image: PropType.element,
};

export default Logo;

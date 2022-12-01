import React from 'react';
import PropType from 'prop-types';
import './Icon.css';

const Icon = ({ identifier, isEnlarged = false }) => {
  let className = 'icon-container';

  if (isEnlarged) {
    let className = `enlarged-${className}`;
  }

  return <div className={className}>{identifier}</div>;
};

Icon.propTypes = {
  identifier: PropType.element,
  isEnlarged: PropType.bool,
};

export default Icon;

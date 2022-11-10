/* eslint-disable react/prop-types */
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Button as BootstrapButton } from 'react-bootstrap';
import './button.css';

const Button = ({ variant = 'primary', className = '', children }) => {
  const classNames = [`sag-button--${variant}`, className];

  return (
    <BootstrapButton variant="primary" className={classNames.join(' ')}>
      {Children.toArray(children)}
    </BootstrapButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;

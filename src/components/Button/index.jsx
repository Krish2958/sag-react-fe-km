import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Button as BootstrapButton } from 'react-bootstrap';
import './Button.css';

export const ButtonVariant = {
  Primary: 'primary',
  Secondary: 'secondary',
};

const Button = ({
  onClick,
  variant = ButtonVariant.Primary,
  className = '',
  children,
}) => {
  const classNames = [`sag-button--${variant}`, className];

  return (
    <BootstrapButton
      variant="primary"
      className={classNames.join(' ')}
      onClick={onClick}
    >
      {Children.toArray(children)}
    </BootstrapButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(Object.values(ButtonVariant)),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;

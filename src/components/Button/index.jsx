import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Button as BootstrapButton } from 'react-bootstrap';
import './Button.css';
import { Colors } from '../../components';

export const ButtonVariant = {
  Primary: 'primary',
  Secondary: 'secondary',
};

const Button = ({
  onClick,
  variant = ButtonVariant.Primary,
  className = '',
  children,
  fontColor,
  ...rest
}) => {
  const classNames = [`sag-button--${variant}`, className];

  return (
    <BootstrapButton
      variant="primary"
      className={classNames.join(' ')}
      onClick={onClick}
      style={{ color: fontColor }}
      {...rest}
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
  fontColor: PropTypes.oneOf(Object.values(Colors)),
};

export default Button;

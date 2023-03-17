import React from 'react';
import PropType from 'prop-types';
import './Logo.css';
import { LogoIdentifier } from './LogoIdentifier';

const Logo = ({ className, logoIdentifier }) => {
  let classNames = 'sag-logo';
  if (className) {
    classNames = `${classNames} ${className}`;
  }

  return (
    <div className={classNames}>
      <img src={logoIdentifier} />
    </div>
  );
};

Logo.propTypes = {
  className: PropType.string,
  logoIdentifier: PropType.oneOf(Object.values(LogoIdentifier)),
};

export default Logo;
export { LogoIdentifier };

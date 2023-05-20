import React from 'react';
import PropType from 'prop-types';
import './Logo.css';
import { LogoIdentifier } from './LogoIdentifier';

const Logo = ({ className, logoIdentifier, showDropShadow = true }) => {
  const classNamesList = ['sag-logo'];
  if (className) {
    classNamesList.push(className);
  }
  if (showDropShadow) {
    classNamesList.push('sag-logo-drop-shadown');
  }

  const classNames = classNamesList.join(' ');

  return (
    <div className={classNames}>
      <img src={logoIdentifier} />
    </div>
  );
};

Logo.propTypes = {
  className: PropType.string,
  logoIdentifier: PropType.oneOf(Object.values(LogoIdentifier)),
  showDropShadow: PropType.bool,
};

export default Logo;
export { LogoIdentifier };

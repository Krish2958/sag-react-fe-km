import React from 'react';
import PropType from 'prop-types';
import './Logo.css';
import { LogoIdentifier } from './LogoIdentifier';

const Logo = ({ logo }) => {
  let className = 'logo-shadow';
  return (
    <div className={className}>
      <img src={logo} />
    </div>
  );
};

Logo.propTypes = {
  logo: PropType.oneOf(Object.values(LogoIdentifier)),
};

export default Logo;
export { LogoIdentifier };

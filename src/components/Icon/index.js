import React from 'react';
import PropType from 'prop-types';
import IcoMoon from 'icomoon-react';
import iconSet from '../../assets/icons/selection.json';
import './Icon.css';
import { IconIdentifier } from './IconIdentifier';
import { isUndefined } from 'lodash';

const Icon = ({
  iconIdentifier,
  srcImage,
  className = '',
  isEnlarged = false,
  iconSize = 18,
}) => {
  let iconClassName = 'icon-container';

  if (isEnlarged) {
    iconClassName = `enlarged-${iconClassName}`;
  }

  if (!isUndefined(srcImage)) {
    return (
      <div className={[iconClassName, className].join(' ')}>{srcImage}</div>
    );
  }

  return (
    <div className={[iconClassName, className].join(' ')}>
      <IcoMoon iconSet={iconSet} icon={iconIdentifier} size={iconSize} />
    </div>
  );
};

Icon.propTypes = {
  className: PropType.string,
  iconIdentifier: PropType.oneOf(Object.values(IconIdentifier)),
  srcImage: PropType.element,
  isEnlarged: PropType.bool,
  iconSize: PropType.number,
};

export default Icon;
export { IconIdentifier };

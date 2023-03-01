import React from 'react';
import PropType from 'prop-types';
import IcoMoon from 'icomoon-react';
import iconSet from '../../assets/icons/selection.json';
import './Icon.css';
import { IconIdentifier } from './IconIdentifier';
import { isUndefined } from 'lodash';

const Icon = ({
  iconIdentifier,
  imageSource,
  className = '',
  iconSize = 18,
}) => {
  let iconClassName = 'icon-container';

  if (!isUndefined(imageSource)) {
    return (
      <div className={[iconClassName, className].join(' ')}>
        <img src={imageSource} />
      </div>
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
  imageSource: PropType.string,
  isEnlarged: PropType.bool,
  iconSize: PropType.number,
};

export default Icon;
export { IconIdentifier };

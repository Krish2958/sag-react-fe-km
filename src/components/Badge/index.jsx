import React from 'react'
import Badge from 'react-bootstrap/Badge'
import { PropTypes } from 'prop-types'
import {useState} from 'react';
import { EventBadgeVariant } from './EventBadgeVariant';
import './Badge.css';
import { Icon, IconIdentifier } from '../../components';


const EventBadge = ({ children, variant, icon }) => {

    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
      };
      const handleMouseOut = () => {
        setIsHovering(false);
      };
    return (
 <span className='badge'>

      <Badge  bg={variant} className="Badge-padding"  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
       <Icon  className='icon' iconIdentifier={icon}></Icon> 
       {isHovering && <div className='child'>{children}</div>}
      </Badge>
      </span>
    );
  };

  EventBadge.propTypes = {
    variant: PropTypes.oneOf(Object.values(EventBadgeVariant)),
    children: PropTypes.node.isRequired,
    icon: PropTypes.oneOf(Object.values(IconIdentifier)),
  };

  export default EventBadge
  export { EventBadgeVariant, IconIdentifier };
  export { Icon };
  
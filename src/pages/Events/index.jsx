import React from 'react';
import { Badge, IconIdentifier } from '../../components';
import { Colors } from '../../components';
export const Events = () => {
  return (
    <div className="title">
      Events
      <Badge iconIdentifier={IconIdentifier.Bulb} color={Colors.PillBlue}>
        Hello
      </Badge>
    </div>
  );
};

Events.route = '/events';

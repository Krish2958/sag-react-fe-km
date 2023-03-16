import React, { useState } from 'react';
import PropType from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';
import { MenuItem } from 'react-pro-sidebar';
import { sidebarMenuStyles } from './constants';
import { Colors, Icon, IconIdentifier } from '../../../../components';

export const SidebarMenuItem = ({
  title,
  navRoute,
  isActive,
  iconIdentifier,
}) => {
  // Hooks.
  const navigate = useNavigate();

  // Handlers.
  const onMouseDownHandler = () => {
    navigate(navRoute);
  };

  return (
    <MenuItem
      rootStyles={sidebarMenuStyles.menuItem}
      key={title}
      icon={
        <Icon
          iconSize={24}
          iconIdentifier={iconIdentifier}
          color={isActive ? Colors.White : Colors.Primary}
        />
      }
      active={isActive}
      component={<NavLink onMouseDown={onMouseDownHandler} />}
    >
      {title}
    </MenuItem>
  );
};

SidebarMenuItem.propTypes = {
  title: PropType.string.isRequired,
  navRoute: PropType.string.isRequired,
  isActive: PropType.bool.isRequired,
  iconIdentifier: PropType.oneOf(Object.values(IconIdentifier)).isRequired,
};

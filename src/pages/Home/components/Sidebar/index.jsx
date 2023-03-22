import React, { useState } from 'react';
import { Sidebar as ProSidebar, Menu } from 'react-pro-sidebar';
import {
  Button,
  ButtonVariant,
  Colors,
  Icon,
  IconIdentifier,
  Logo,
  LogoIdentifier,
} from '../../../../components';
import { Events, Clubs, Sports, About } from '../../../../pages';
import { menuItemsTitle, sidebarMenuStyles } from './constants';
import { SidebarMenuItem } from './SidebarMenuItem';
import './Sidebar.css';

export const SideBar = () => {
  // States.
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [isCollapseButtonPressed, setIsCollapseButtonPressed] = useState(false);

  // Constants.
  const menuItemsList = [
    {
      title: menuItemsTitle.Events,
      iconIdentifier: IconIdentifier.Calendar,
      route: Events.route,
    },
    {
      title: menuItemsTitle.Clubs,
      iconIdentifier: IconIdentifier.Groups,
      route: Clubs.route,
    },
    {
      title: menuItemsTitle.Sports,
      iconIdentifier: IconIdentifier.Soccer,
      route: Sports.route,
    },
    {
      title: menuItemsTitle.About,
      iconIdentifier: IconIdentifier.Info,
      route: About.route,
    },
  ];

  // Handlers.
  const onPressEventCollapseButtonHandler = () => {
    setIsCollapseButtonPressed((prev) => !prev);
  };

  return (
    <ProSidebar
      className="sag-sidebar"
      defaultCollapsed={isSidebarCollapsed}
      collapsedWidth="4rem"
      width="14rem"
      backgroundColor={Colors.White}
      rootStyles={sidebarMenuStyles.sidebar}
    >
      {/* Header Logo */}
      <div className="sag-sidebar-logo-container">
        {isSidebarCollapsed ? (
          <Logo
            className="sag-sidebar-logo-collapsed"
            logoIdentifier={LogoIdentifier.SAG}
            showDropShadow={false}
          />
        ) : (
          <>
            <Logo
              className="sag-sidebar-logo-uncollapsed"
              logoIdentifier={LogoIdentifier.SAG}
              showDropShadow={false}
            />
            <div className="sag-sidebar-logo-text-container">
              <span className="sag-sidebar-logo-text">
                Student&apos;s Activity Group
              </span>
              <span className="sag-sidebar-logo-subtext">[M.L.V.T.E.C.]</span>
            </div>
          </>
        )}
      </div>

      {/* Main Menu */}
      <Menu
        menuItemStyles={{
          button: ({ active }) =>
            active
              ? sidebarMenuStyles.menuItemButtonActive
              : sidebarMenuStyles.menuItemButton,
          icon: sidebarMenuStyles.menuButtonIcon,
        }}
      >
        {menuItemsList.map((menuItem) => (
          <SidebarMenuItem
            key={menuItem.title}
            title={menuItem.title}
            navRoute={menuItem.route}
            iconIdentifier={menuItem.iconIdentifier}
            isActive={window.location.pathname === menuItem.route}
          />
        ))}
      </Menu>

      {/* Collapse Button */}
      <Button
        className="sag-sidebar-collapse-button"
        variant={ButtonVariant.Secondary}
        onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        onMouseDown={onPressEventCollapseButtonHandler}
        onMouseUp={onPressEventCollapseButtonHandler}
      >
        <Icon
          className="sag-sidebar-collapse-button-icon"
          iconIdentifier={
            isSidebarCollapsed
              ? IconIdentifier.ChevronRight
              : IconIdentifier.ChevronLeft
          }
          color={isCollapseButtonPressed ? Colors.White : Colors.Primary}
        />
        {!isSidebarCollapsed && 'Collapse'}
      </Button>
    </ProSidebar>
  );
};

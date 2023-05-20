import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button, ButtonVariant } from '../../components';
import { PageWrapper, SideBar } from './components';
import { isAuthenticated } from '../../helpers';
import { Login } from '../Login';
import './Home.css';

export const Home = () => {
  // Hooks.
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Handlers.
  const onClickLoginHandler = () => {
    navigate(Login.route);
  };

  // Renders.
  const renderProfileButtons = () => {
    if (pathname === Login.route) {
      return;
    }

    if (!isAuthenticated()) {
      return (
        <Button
          className="home-page-login-button"
          variant={ButtonVariant.Secondary}
          onClick={onClickLoginHandler}
        >
          Login
        </Button>
      );
    }

    // TODO: Show profile buttons if authenticated
  };

  return (
    <div className="home">
      {/* Profile Button Components */}
      {renderProfileButtons()}

      {/* Navigation Panel Component */}
      <SideBar />

      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </div>
  );
};

Home.route = '/';

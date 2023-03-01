import React from 'react';
import { Illustration } from '../../assets/images';
import { Button, ButtonVariant, Icon, IconIdentifier } from '../../components';
import './Login.css';

export const Login = () => {
  return (
    <div className="login-page">
      <div className="login-form-container">
        <h1 className="title">Get Started with SAG</h1>
        <img className="illustration" src={Illustration.UserChilling} />
        <Button className="login-form-button" variant={ButtonVariant.Secondary}>
          <Icon iconIdentifier={IconIdentifier.Google} /> Sign-in with Google
        </Button>
      </div>
      <img className="illustration" src={Illustration.UserInDoubt} />
    </div>
  );
};

Login.route = '/login';

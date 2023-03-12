import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { Illustration } from '../../assets/images';
import { Button, ButtonVariant, Icon, IconIdentifier } from '../../components';
import './Login.css';


export const Login = () => {
  const googleSignInHandler = useGoogleLogin({
    onSuccess: (codeResponse) => {},
    hosted_domain: "mlvti.ac.in",
    onError: () => {},
  }
  );
  return (
    <div className="login-page">
      <div className="login-form-container">
        <h1 className="title">Get Started with SAG</h1>
        <img className="illustration" src={Illustration.UserChilling} />
        <Button className="login-form-button" variant={ButtonVariant.Secondary} onClick={() => googleSignInHandler()}>
          <Icon iconIdentifier={IconIdentifier.Google} /> Sign-in with Google
        </Button>
      </div>
      <img className="illustration" src={Illustration.UserInDoubt} />
    </div>
  );
};

Login.route = '/login';

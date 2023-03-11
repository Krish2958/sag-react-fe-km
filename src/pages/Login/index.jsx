import React from 'react';
import { Illustration } from '../../assets/images';
import { Button, ButtonVariant, Icon, IconIdentifier } from '../../components';
import './Login.css';
import { useGoogleLogin } from '@react-oauth/google';

const domain ="mlvti.ac.in"
export const Login = () => {
  const googleSignInHandler = useGoogleLogin({
    onSuccess: codeResponse => {},
    hosted_domain: domain,
    onError:() => {},
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

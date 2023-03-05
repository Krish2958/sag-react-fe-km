import React from 'react';
import { Illustration } from '../../assets/images';
import { Button, ButtonVariant, Icon, IconIdentifier } from '../../components';
import './Login.css';
import { useGoogleLogin } from '@react-oauth/google';


export const Login = () => {
  const signin = useGoogleLogin({
    onSuccess: codeResponse => console.log(codeResponse),
    // flow: 'auth-code',
    hosted_domain: 'mlvti.ac.in',
    onError:() => console.log('Login Failed'),
  }
  );
  return (
    <div className="login-page">
      <div className="login-form-container">
        <h1 className="title">Get Started with SAG</h1>
        <img className="illustration" src={Illustration.UserChilling} />
        <Button className="login-form-button" variant={ButtonVariant.Secondary} onClick={() => signin()}>
          <Icon iconIdentifier={IconIdentifier.Google} /> Sign-in with Google
        </Button>
      </div>
      <img className="illustration" src={Illustration.UserInDoubt} />
    </div>
  );
};

Login.route = '/login';

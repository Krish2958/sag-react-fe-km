import React from 'react';
import './home.css';
import { GoogleLogin } from '@react-oauth/google';

const responseMessage = (response) => {
  console.log(response);
};
const errorMessage = (error) => {
  console.log(error);
};
export const Home = () => {
  return (
    <div className="home">
      {/* Header Section */}
      <header>SAG Web App started successfully!</header>
      <div>
        <h4>React Google Login</h4>
        <br />
        <br />
        <div>
          <GoogleLogin
            useOneTap="True"
            onSuccess={responseMessage}
            onError={errorMessage}
          />
        </div>
      </div>
      {/* Upcoming Events Section */}

      {/* Club Section */}
      {/* Footer Section */}
    </div>
  );
};

export default Home;

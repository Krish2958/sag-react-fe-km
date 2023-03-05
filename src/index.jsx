import React from 'react';
import ReactDOM from 'react-dom/client';

// Add bootstrap to the project
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

import './index.css';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="#">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </GoogleOAuthProvider>,
);

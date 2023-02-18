import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
// Add bootstrap to the project
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import './index.css';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="987099510004-2nqd8vmmoo7vnpiuegldrp8hs2phkheq.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById('root'),
);

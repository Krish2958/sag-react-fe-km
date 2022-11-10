import React from 'react';
import ReactDOM from 'react-dom/client';

// Add bootstrap to the project
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import './index.css';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

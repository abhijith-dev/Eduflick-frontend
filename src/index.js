import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouteController from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteController />
  </React.StrictMode>
);


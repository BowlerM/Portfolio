// index.js
import React from 'react';
import ReactDOM from 'react-dom'; // For React 17 or below
import { BrowserRouter } from 'react-router-dom'; // React Router for handling routing
import App from './App'; // Your main App component

// Render the App component wrapped in BrowserRouter for routing support
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root') // Renders the app in the "root" div in your HTML
);



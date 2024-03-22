import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Main App Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Service Worker Registration
const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('ServiceWorker registration successful with scope:', registration.scope);
        })
        .catch(err => {
          console.error('ServiceWorker registration failed:', err);
        });
    });
  }
};

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PWAPrompt from 'react-ios-pwa-prompt'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /><PWAPrompt />
  </React.StrictMode>
);
serviceWorkerRegistration.register();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA



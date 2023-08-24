import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
    <Auth0Provider
        domain="dev-je70tlvgnhpmpmh1.us.auth0.com"
        clientId="ds6PtYxtRf6jv4Z6qx8st0Jd6Xugi6rU"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
    </Auth0Provider>,
);

// ReactDOM.render(<App />, document.getElementById('root'));


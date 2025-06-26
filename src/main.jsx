// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
<GoogleOAuthProvider clientId="683889323132-c1s1k5o4iutetau5uks04c2iq3gcaeon.apps.googleusercontent.com.apps.googleusercontent.com">
  <App />
</GoogleOAuthProvider>

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

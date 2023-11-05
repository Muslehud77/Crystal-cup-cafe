import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Router from './Router/Router';
import AuthProvider from './ContextProvider/AuthContext';





ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <Router></Router>
    </React.StrictMode>
  </AuthProvider>
);

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Router from './Router/Router';
import AuthProvider from './ContextProvider/AuthContext';
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router></Router>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

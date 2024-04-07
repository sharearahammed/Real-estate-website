import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './assets/Router/router.jsx';
import AuthConfiguration from './assets/Components/Authconfiguration/Authconfiguration.jsx';
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthConfiguration>
    <RouterProvider router={router} />
    </AuthConfiguration>
    </HelmetProvider>
    
  </React.StrictMode>,
)

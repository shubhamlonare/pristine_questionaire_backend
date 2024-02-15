import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider } from "react-router-dom";
import Intern from './intern.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import HomePage from './HomePage.jsx';


import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import GeoLocation from './components/GeoLocation.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(<>
    <Route path='/intern' Component={Intern} />
    <Route index path='/' Component={HomePage} />
    <Route index path='/login' Component={Login} />
    <Route path='/register' Component={Register} />
    <Route path="/" element={<App />}>
      <Route path='parentData' element={<App />} />
    </Route>
  </>
  )
);

// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

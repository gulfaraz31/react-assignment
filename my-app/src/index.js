import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import App from './App';
import Contacts from './components/contact';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import Memo from './components/memo';
import UserState from './components/userstate';
import UserDetail from './components/userdetail';


let router = createBrowserRouter([
  {
    path: "/",
    element:<Contacts/>
  },
  {
    path: "/Home",
    element:<Home/>
  },
  {
    path:"/Login",
    element:<Login/>

  },
  {
    path:"/Signup",
    element:<Signup/>
  },
  {
    path:"/Memo",
    element:<Memo/>
  }

  
    
  

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <UserState>
      <App />
      <UserDetail/>
    </UserState>
  </React.StrictMode>
);


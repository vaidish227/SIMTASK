import React from 'react'
import {
    //Route,
    createBrowserRouter,
    RouterProvider,
    //Routes,
  } from "react-router-dom";

  /** import all components */
import Username from './component/Username';
import Password from './component/Password';
import Register from './component/Register';
import Profile from './component/Profile';
import Recovery from './component/Recovery';
import Reset from './component/Reset';
import PageNotFound from './component/PageNotFound';


/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth.js'

/**Root Routes */
/*const router =createBrowserRouter([
    {
        path: "/",
        element: <div>Root Routes</div>
    },
    {
        path: "/register",
        element: <div>Register Routes</div>
    },
])*/



const router = createBrowserRouter([
    {
        path : '/',
        element : <Username></Username>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/password',
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : '/profile',
        element : <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    },
])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
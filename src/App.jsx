import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/mainLayout';
import Home from './Pages/Home/Home';
import Product from './Pages/Single-Product/Product';

const routes = createBrowserRouter([

    {path: '/', element: <MainLayout />, children: [

        {path: '/', element: <Home />},
        {path: '/single-pro/:id', element: <Product />},

    ]},

])

export default function App() {

    return <React.Fragment>

        <RouterProvider router={routes} />

    </React.Fragment>

}

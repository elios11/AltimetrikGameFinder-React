import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Layout from '@components/Layout/Layout';
import UseIsLoggedIn from '@hooks/UseIsLoggedIn';
import ForgotPassword from '@pages/ForgotPassword';
import Home from '@pages/Home';
import LastSearches from '@pages/LastSearches';
import Login from '@pages/Login';
import PageNotFound from '@pages/PageNotFound';
import Register from '@pages/Register';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<UseIsLoggedIn needAccess={false} />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Route>
            <Route element={<UseIsLoggedIn needAccess={true} />}>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/last-searches" element={<LastSearches />} />
                </Route>
            </Route>
            <Route path="/" element={<Layout />}>
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </>,
    ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);

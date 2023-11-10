import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Layout from '@components/Layout/Layout';
import UseIsLoggedIn from '@hooks/UseIsLoggedIn';
import ForgotPassword from '@pages/ForgotPassword';
import LastSearches from '@pages/LastSearches';
import Login from '@pages/Login';
import PageNotFound from '@pages/PageNotFound/PageNotFound';
import Register from '@pages/Register';
import HomeGames from '@components/GamesHub/HomeGames/HomeGames';
import ThisWeekGames from '@components/GamesHub/ThisWeekGames/ThisWeekGames';
import ThisMonthGames from '@components/GamesHub/ThisMonthGames/ThisMonthGames';
import ComingSoonGames from '@components/GamesHub/ComingSoonGames/ComingSoonGames';
import BestGamesOfYear from '@components/GamesHub/BestGamesOfYear/BestGamesOfYear';
import SearchedGames from './components/GamesHub/SearchedGames/SearchedGames';

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
                    <Route path="/" element={<HomeGames />} />
                    <Route path="last_searches" element={<LastSearches />} />
                    <Route path="this_week" element={<ThisWeekGames />} />
                    <Route path="this_month" element={<ThisMonthGames />} />
                    <Route path="coming_soon" element={<ComingSoonGames />} />
                    <Route path="best_of_year" element={<BestGamesOfYear />} />
                    <Route path="search" element={<SearchedGames />} />
                </Route>
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </>,
    ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);

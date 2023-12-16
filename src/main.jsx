import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import BestGamesOfYear from '@components/GamesHub/BestGamesOfYear/BestGamesOfYear';
import ComingSoonGames from '@components/GamesHub/ComingSoonGames/ComingSoonGames';
import HomeGames from '@components/GamesHub/HomeGames/HomeGames';
import ThisMonthGames from '@components/GamesHub/ThisMonthGames/ThisMonthGames';
import ThisWeekGames from '@components/GamesHub/ThisWeekGames/ThisWeekGames';
import Layout from '@components/Layout/Layout';
import ForgotPassword from '@pages/ForgotPassword';
import LastSearches from '@pages/LastSearches';
import Login from '@pages/Login';
import PageNotFound from '@pages/PageNotFound/PageNotFound';
import Register from '@pages/Register';

import SearchedGames from './components/GamesHub/SearchedGames/SearchedGames';
import ThemeProvider from './context/ThemeContext';
import './index.css';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<HomeGames />} />
                <Route path="last_searches" element={<LastSearches />} />
                <Route path="this_week" element={<ThisWeekGames />} />
                <Route path="this_month" element={<ThisMonthGames />} />
                <Route path="coming_soon" element={<ComingSoonGames />} />
                <Route path="best_of_year" element={<BestGamesOfYear />} />
                <Route path="search" element={<SearchedGames />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </>,
    ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>,
);

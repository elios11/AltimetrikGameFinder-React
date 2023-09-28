import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { getCookie } from '../hooks/useCookie';

const UseIsLoggedIn = () => {
    const navigate = useNavigate();

    const loggedInUser = getCookie('authToken');

    useEffect(() => {
        if (loggedInUser) {
            navigate('/');
        }
    }, []);

    return <Outlet />;
};

export default UseIsLoggedIn;

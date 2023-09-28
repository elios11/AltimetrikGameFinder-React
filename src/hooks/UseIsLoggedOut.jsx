import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { getCookie } from '../hooks/useCookie';

const IsLoggedOut = () => {
    const navigate = useNavigate();

    const loggedInUser = getCookie('authToken');

    useEffect(() => {
        if (!loggedInUser) {
            navigate('/login');
        }
    }, []);

    return <Outlet />;
};

export default IsLoggedOut;

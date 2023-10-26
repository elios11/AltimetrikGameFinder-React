import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { getCookie } from '@utils/cookies';
import PropTypes from 'prop-types';

const UseIsLoggedIn = ({ needAccess }) => {
    const navigate = useNavigate();

    const loggedInUser = getCookie('authToken');

    useEffect(() => {
        if (loggedInUser && !needAccess) {
            navigate('/');
        }
        if (!loggedInUser && needAccess) {
            navigate('/login');
        }
    }, []);

    return <Outlet />;
};

UseIsLoggedIn.propTypes = {
    needAccess: PropTypes.bool,
};

export default UseIsLoggedIn;

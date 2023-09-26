import { useState } from 'react';

import registerOrLogin from '@api/registerOrLogin';

function LoginTest() {
    // Disabled next line till const response is used
    /* eslint-disable-next-line */
    const [response, setResponse] = useState({
        data: {},
        loading: false,
        error: null,
    });

    const handleLogin = () => {
        const route = '/login';
        const email = 'wewe@wewe.com';
        const password = 'Hola123$';
        registerOrLogin(email, password, route, setResponse);
    };

    const handleRegister = () => {
        const route = '/register';
        const email = 'wewe@wewe.com';
        const password = 'Hola123$';
        registerOrLogin(email, password, route, setResponse);
    };

    return (
        <>
            <div>
                <button onClick={handleLogin}>login</button>
            </div>
            <div>
                <button onClick={handleRegister}>register</button>
            </div>
        </>
    );
}

export default LoginTest;

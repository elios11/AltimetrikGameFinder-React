import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { handleRegisterAndLogin } from '@/utils/loginHandlers';

function LoginTest() {
    // Disabled next line till const response is used
    /* eslint-disable-next-line */
    const [response, setResponse] = useState({
        data: {},
        loading: false,
        error: null,
    });

    const navigate = useNavigate();

    const email = 'wewe@wewe.com';
    const password = 'Hola123$';

    return (
        <>
            <div>
                <button onClick={() => handleRegisterAndLogin(setResponse, '/login', email, password, navigate)}>
                    login
                </button>
            </div>
            <div>
                <button onClick={() => handleRegisterAndLogin(setResponse, '/register', email, password, navigate)}>
                    register
                </button>
            </div>
            <h1>1{response.data.accessToken}</h1>
            <h1>2{response.error}</h1>
        </>
    );
}

export default LoginTest;

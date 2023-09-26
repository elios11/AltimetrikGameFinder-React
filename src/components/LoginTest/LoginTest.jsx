import { useState } from 'react';

import { handleLogin, handleRegister } from '@/utils/loginHandlers';

function LoginTest() {
    // Disabled next line till const response is used
    /* eslint-disable-next-line */
    const [response, setResponse] = useState({
        data: {},
        loading: false,
        error: null,
    });

    return (
        <>
            <div>
                <button onClick={() => handleLogin(setResponse)}>login</button>
            </div>
            <div>
                <button onClick={() => handleRegister(setResponse)}>register</button>
            </div>
        </>
    );
}

export default LoginTest;

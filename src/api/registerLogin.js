import { useState } from 'react';

const authRequest = async (email, password, route) => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState('');

    try {
        const response = await fetch(`http://localhost:3000${route}`, {
            method: 'POST',
            body: JSON.stringify({ email: email, password: password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();

        // if (data.accessToken && checkLocalStorage()) {
        //     localStorage.setItem('authToken', data.accessToken);
        //     window.location.replace('./src/home/home.html');
        //     return;
        // }

        if (!response.ok) {
            throw new Error('Error http: ' + data.status);
        }

        setData(data);
    } catch (e) {
        throw new Error(setError(`Cannot fetch the data, error with status ${e.status}`));
    } finally {
        setLoading(false);
    }

    return { data, loading, error };
};

export default authRequest;

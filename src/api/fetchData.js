import { useState, useEffect } from 'react';

export default function fetchData(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const rawgioApiKey = import.meta.env.VITE_API_KEY;
    const requestOptions = {
        headers: {
            'Target-URL': 'https://rawg.io',
            Authorization: '', // cors-proxy expects this attribute, otherwise it fails
        },
    };

    useEffect(() => {
        fetch(`${url}?key=${rawgioApiKey}`, requestOptions)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Request failed with status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => setData(data))
            .catch((error) => {
                setError(`Cannot fetch the data, error with status ${error}`);
                throw new Error(error);
            })
            .finally(() => setLoading(false));
    }, [loading]);

    return { data, loading, error };
}

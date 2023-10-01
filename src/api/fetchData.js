import { useEffect, useState } from 'react';

export default function fetchData(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const apiKey = import.meta.env.VITE_API_KEY;
    const corsProxy = import.meta.env.VITE_CORS_PROXY;

    useEffect(() => {
        fetch(`${corsProxy}${url}?key=${apiKey}`)
            .then((res) => {
                if (!res.ok) {
                    setError(`Request failed with status: ${res.status}`);
                    throw new Error(error);
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

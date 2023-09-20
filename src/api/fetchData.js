import { useState, useEffect } from 'react';

export default function fetchData(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        try {
            fetch(url)
                .then((res) => res.json())
                .then((data) => setData(data));
        } catch (e) {
            throw new Error(
                setError(
                    `Cannot fetch the data, error with status ${response.status}`
                )
            );
        } finally {
            setLoading(false);
        }
    }, [loading]);

    return { data, loading, error };
}

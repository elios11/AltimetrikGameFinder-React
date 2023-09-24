import { useState, useEffect } from 'react';

export default function fetchData(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const rawgioApiKey = ""
    const requestOptions = {
        headers: {
            "Target-URL": "https://rawg.io",
            "Authorization": "" // the cors-proxy expects this attribute, otherwise it fails
        }
    }

    useEffect(() => {
        fetch(`${url}?key=${rawgioApiKey}`, requestOptions)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch(error => {
                throw new Error(
                    setError(
                        `Cannot fetch the data, error with status ${error}`
                    )
                )
            })
            .finally(() => setLoading(false))
    }, [loading]);

    return { data, loading, error };
}

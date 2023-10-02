import { useEffect } from 'react';

export default function fetchGames(url, searchQuery, page, gameId) {
    const result = { loading: false, data: {}, error: null };

    const apiKey = import.meta.env.VITE_API_KEY;
    const corsProxy = import.meta.env.VITE_CORS_PROXY;

    let route = `${corsProxy}${url}&key=${apiKey}`;
    route = searchQuery ? `${corsProxy}${url}?key=${apiKey}&search=${searchQuery}` : route;
    route = page ? `${route}&page=${page}` : route;
    route = gameId ? `${corsProxy}${url}${gameId}?key=${apiKey}` : route;

    useEffect(() => {
        fetch(route)
            .then((res) => {
                if (!res.ok) {
                    result.error = `Request failed with status: ${res.status}`;
                    throw new Error(result.error);
                }
                return res.json();
            })
            .then((data) => (result.data = data))
            .catch((error) => {
                result.error = `Cannot fetch the data, error with status ${error}`;
                throw new Error(result.error);
            })
            .finally(() => (result.loading = false));
    }, [result.loading]);

    return result;
}

export default async function fetchGames(url, searchQuery, page, gameId, gameParam) {
    const apiKey = import.meta.env.VITE_API_KEY;
    const corsProxy = import.meta.env.VITE_CORS_PROXY;
    const result = { loading: true, data: {}, error: null };

    let route = `${corsProxy}${url}?key=${apiKey}`;
    route = searchQuery ? `${corsProxy}${url}?key=${apiKey}&search=${searchQuery}` : route;
    route = page ? `${route}&page=${page}` : route;
    route = gameId ? `${corsProxy}${url}${gameId}?key=${apiKey}` : route;
    route = gameParam ? `${corsProxy}${url}${gameId}/${gameParam}?key=${apiKey}` : route;

    try {
        const response = await fetch(route);

        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        const data = await response.json();
        result.data = data;
        result.loading = false;

        return result;
    } catch (error) {
        result.error = error;
        result.loading = false;

        return result;
    }
}

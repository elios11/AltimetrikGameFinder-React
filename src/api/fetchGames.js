export default async function fetchGames(url, searchQuery, page, gameId, gameParam, dates, ordering) {
    const apiKey = import.meta.env.VITE_API_KEY;
    let corsProxy;
    const result = { loading: true, data: {}, error: null };

    if (window.location.hostname === 'localhost' || window.location.origin === 'http://localhost:3000') {
        corsProxy = import.meta.env.VITE_CORS_PROXY;
    } else {
        corsProxy = '';
    }

    let route = `${corsProxy}${url}?key=${apiKey}`;
    if (gameId) {
        route = gameId ? `${corsProxy}${url}${gameId}?key=${apiKey}` : route;
        route = gameParam ? `${corsProxy}${url}${gameId}/${gameParam}?key=${apiKey}` : route;
    } else {
        route = searchQuery ? `${route}&search=${searchQuery}` : route;
        route = dates ? `${route}&dates=${dates}` : route;
        route = ordering ? `${route}&ordering=${ordering}` : route;
        route = page ? `${route}&page=${page}` : route;
    }

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

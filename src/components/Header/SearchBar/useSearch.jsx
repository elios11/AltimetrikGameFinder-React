import { useEffect, useState } from 'react';
import { setCookie, getCookie } from '@utils/cookies';
import fetchGames from '@api/fetchGames';

/* Save search results to result context */
export default function useSearch(debouncedSearch) {
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (debouncedSearch !== null) {
            if (debouncedSearch !== '' && debouncedSearch.trim().length === 0) {
                return;
            }
            setResult({ loading: true, data: {} });

            fetchGames('https://rawg.io/api/games/', debouncedSearch)
                .then((result) => setResult(result))
                .catch((e) => setResult(e));

            if (debouncedSearch !== '') {
                const lastSearchesJson = getCookie('lastSearches');
                const lastSearchesArray = lastSearchesJson ? JSON.parse(lastSearchesJson) : null;

                if (lastSearchesJson) {
                    const lastSearchesNewArray = [...lastSearchesArray, debouncedSearch];
                    const lastSearchesNewJson = JSON.stringify(lastSearchesNewArray);
                    setCookie('lastSearches', lastSearchesNewJson);
                } else {
                    const lastSearchesNewArray = [debouncedSearch];
                    const lastSearchesNewJson = JSON.stringify(lastSearchesNewArray);
                    setCookie('lastSearches', lastSearchesNewJson);
                }
            }
        }
    }, [debouncedSearch]);

    return result;
}

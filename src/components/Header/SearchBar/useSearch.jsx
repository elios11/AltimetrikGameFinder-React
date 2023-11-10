import { useEffect, useState } from 'react';
import { setCookie, getCookie } from '@utils/cookies';
import fetchGames from '@api/fetchGames';

/* Save search results to result context */
export default function useSearch(searchString) {
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (searchString !== null) {
            if (searchString !== '' && searchString.trim().length === 0) {
                return;
            }
            setResult({ loading: true, data: {}, error: null });

            fetchGames('https://rawg.io/api/games/', searchString)
                .then((result) => setResult(result))
                .catch((e) => setResult(e));

            if (searchString !== '') {
                const lastSearchesJson = getCookie('lastSearches');
                const lastSearchesArray = lastSearchesJson ? JSON.parse(lastSearchesJson) : [];

                if (!lastSearchesArray.includes(searchString)) {
                    lastSearchesArray.unshift(searchString);
                    const lastSearchesNewJson = JSON.stringify(lastSearchesArray);
                    setCookie('lastSearches', lastSearchesNewJson);
                }
            }
        }
    }, [searchString]);

    return result;
}

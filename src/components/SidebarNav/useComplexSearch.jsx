import { useEffect, useState } from 'react';

import fetchGames from '@api/fetchGames';

/* Save search results to result context */
export default function useComplexSearch(debouncedComplexSearch) {
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (debouncedComplexSearch !== null) {
            setResult({ loading: true, data: {} });

            fetchGames(
                'https://rawg.io/api/games/',
                '',
                null,
                null,
                null,
                debouncedComplexSearch?.dates,
                debouncedComplexSearch?.ordering,
            )
                .then((result) => setResult(result))
                .catch((e) => setResult(e));
        }
    }, [debouncedComplexSearch]);

    return result;
}

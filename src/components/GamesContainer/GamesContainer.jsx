import fetchGames from '@api/fetchGames';
import GameCard from './GameCard/GameCard';
import { useEffect, useState } from 'react';

export default function GamesContainer() {
    const [result, setResult] = useState({ loading: true, data: {}, error: null });

    /* Fetches games data and set the result to state */
    useEffect(() => {
        const getGamesData = async () => await fetchGames('https://rawg.io/api/games/');
        getGamesData()
            .then((result) => setResult(result))
            .catch((err) => setResult(err));
    }, []);

    const gameCards = result?.data?.results?.map((game, index) => (
        <GameCard game={game} key={index} ranking={index + 1} />
    ));

    return <div>{!result.loading && gameCards}</div>;
}

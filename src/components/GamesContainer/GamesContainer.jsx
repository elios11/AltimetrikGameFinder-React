import { useContext, useEffect } from 'react';
import fetchGames from '@api/fetchGames';
import GameCard from './GameCard/GameCard';
import styles from './gamesContainer.module.css';
import RequestsContext from '@context/RequestsContext';

export default function GamesContainer() {
    const { result, setResult } = useContext(RequestsContext);

    /* Fetches games data and set the result to state */
    useEffect(() => {
        fetchGames('https://rawg.io/api/games/')
            .then((result) => setResult(result))
            .catch((err) => setResult(err));
    }, []);

    const gameCards = result?.data?.results?.map((game, index) => <GameCard game={game} key={index} />);

    return <div className={styles['games-container']}>{!result.loading && gameCards}</div>;
}

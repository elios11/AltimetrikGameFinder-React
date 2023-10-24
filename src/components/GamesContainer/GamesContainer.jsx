import { useContext, useEffect } from 'react';

import fetchGames from '@api/fetchGames';
import Skeleton from '@components/Skeleton/Skeleton';
import RequestsContext from '@context/RequestsContext';
import SingleColumnContext from '@context/SingleColumnContext';

import GameCard from './GameCard/GameCard';
import styles from './gamesContainer.module.css';

export default function GamesContainer() {
    const { result, setResult } = useContext(RequestsContext);
    const { singleColumn } = useContext(SingleColumnContext);

    /* Fetches games data and set the result to state */
    useEffect(() => {
        fetchGames('https://rawg.io/api/games/')
            .then((result) => setResult(result))
            .catch((err) => setResult(err));
    }, []);

    const gameCards = result?.data?.results?.map((game, index) => <GameCard game={game} key={index} />);

    const skeletons = Array.from({ length: 20 }, (_, i) => <Skeleton key={i} />);

    return (
        <div className={styles[singleColumn ? 'games-container' : 'games-container']}>
            {result.loading && skeletons}
            {!result.loading && gameCards}
        </div>
    );
}

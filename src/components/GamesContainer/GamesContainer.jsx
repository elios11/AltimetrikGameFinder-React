import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import fetchGames from '@api/fetchGames';
import Skeleton from '@components/Skeleton/Skeleton';
import RequestsContext from '@context/RequestsContext';
import SingleColumnContext from '@context/SingleColumnContext';

import GameCard from './GameCard/GameCard';
import styles from './gamesContainer.module.css';
import fetchGamesDescription from '@api/fetchGamesDescription';

export default function GamesContainer({ setModalGameId }) {
    const { result, setResult, setGamesDescription } = useContext(RequestsContext);
    const { singleColumn } = useContext(SingleColumnContext);

    /* Fetches games data and set the result to state */
    useEffect(() => {
        fetchGames('https://rawg.io/api/games/')
            .then((result) => setResult(result))
            .catch((err) => setResult(err));
    }, []);

    /* Fetches games description and set the result to gamesDescription state */
    useEffect(() => {
        if (result && result.data.results) {
            fetchGamesDescription(result.data.results)
                .then((values) => {
                    const descriptionsObject = {};
                    values.forEach((value) => {
                        descriptionsObject[value.data.id] = value.data;
                    });
                    setGamesDescription(descriptionsObject);
                })
                .catch((e) => setGamesDescription(e));
        }
    }, [result]);

    function updateGameModalId(e) {
        if (e.currentTarget.id) {
            setModalGameId(parseInt(e.currentTarget.id));
        }
    }

    const gameCards = result?.data?.results?.map((game, index) => (
        <GameCard game={game} key={index} id={game.id} onClick={updateGameModalId} />
    ));

    const skeletons = Array.from({ length: 20 }, (_, i) => <Skeleton key={i} />);

    return (
        <div className={styles[singleColumn ? 'games-container' : 'games-container']}>
            {result.loading && skeletons}
            {!result.loading && gameCards}
        </div>
    );
}

GamesContainer.propTypes = {
    setModalGameId: PropTypes.func,
};

import { useContext, useEffect } from 'react';

import fetchGamesDescription from '@api/fetchGamesDescription';
import Skeleton from '@components/Skeleton/Skeleton';
import RequestsContext from '@context/RequestsContext';
import SingleColumnContext from '@context/SingleColumnContext';
import PropTypes from 'prop-types';

import GameCard from './GameCard/GameCard';
import styles from './gamesContainer.module.css';

export default function GamesContainer({ setModalGameId }) {
    const { result, gamesDescription, setGamesDescription } = useContext(RequestsContext);
    const { singleColumn } = useContext(SingleColumnContext);

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
        <GameCard
            game={game}
            key={index}
            id={game.id}
            onClick={updateGameModalId}
            description={gamesDescription[game.id]?.description_raw}
        />
    ));

    const gamesContainerStyles = singleColumn
        ? `${styles['games-container']} ${styles['single-column']}`
        : styles['games-container'];

    const skeletons = Array.from({ length: 20 }, (_, i) => <Skeleton key={i} />);

    return <div className={gamesContainerStyles}>{result.loading ? skeletons : gameCards}</div>;
}

GamesContainer.propTypes = {
    setModalGameId: PropTypes.func,
};

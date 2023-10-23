import PropTypes from 'prop-types';
import styles from './GameCard.module.css';
import GameCardImage from './GameCardImage/GameCardImage';
import GameCardInfo from './GameCardInfo/GameCardInfo';
import SingleColumnContext from '@context/SingleColumnContext';
import { useContext } from 'react';

export default function GameCard({ game, onClick, description }) {
    const { singleColumn } = useContext(SingleColumnContext);

    const gameCardStyles = singleColumn ? styles['card'] + ' ' + styles['single-column'] : styles['card'];

    return (
        <button className={gameCardStyles} aria-label={`Show ${game.name} data`} onClick={onClick} id={game.id}>
            <GameCardImage image={game.background_image} />
            <GameCardInfo game={game} description={description} />
        </button>
    );
}

GameCard.propTypes = {
    game: PropTypes.object,
    onClick: PropTypes.func,
    description: PropTypes.string,
};

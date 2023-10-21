import PropTypes from 'prop-types';
import styles from './GameCard.module.css';
import GameCardImage from './GameCardImage/GameCardImage';
import GameCardInfo from './GameCardInfo/GameCardInfo';

export default function GameCard({ game, onClick }) {
    return (
        <button className={styles.card} aria-label={`Show ${game.name} data`} onClick={onClick} id={game.id}>
            <GameCardImage image={game.background_image} />
            <GameCardInfo game={game} />
        </button>
    );
}

GameCard.propTypes = {
    game: PropTypes.object,
    onClick: PropTypes.func,
};

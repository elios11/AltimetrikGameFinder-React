import PropTypes from 'prop-types';
import styles from './GameCardInfo.module.css';
import GameCardInfoAtributes from './GameCardInfoAtributes/GameCardInfoAtributes';
import GameCardPlatformIcons from './GameCardPlatformIcons/GameCardPlatformIcons';
import { useContext } from 'react';
import SingleColumnContext from '@context/SingleColumnContext';

export default function GameCardInfo({ game, description }) {
    function parseDate(dateString) {
        const date = new Date(dateString);
        return `${date.toLocaleString('en-US', {
            month: 'short',
        })} ${date.getDate()}, ${date.getFullYear()}`;
    }

    const genreNames = game.genres.map((genre) => genre.name);

    const { singleColumn } = useContext(SingleColumnContext);

    const gameInfoStyles = singleColumn
        ? styles['card__game-info'] + ' ' + styles['single-column']
        : styles['card__game-info'];

    return (
        <div className={gameInfoStyles}>
            <div className={styles['card__title-and-ranking']}>
                <h3 className={styles['card__title']}>{game.name}</h3>
                <p className={styles['card__ranking']}>#{game.id}</p>
            </div>
            <div className={styles['card__game-details']}>
                <div className={styles['card__game-details-atributes']}>
                    <GameCardInfoAtributes tag="Release date: " info={parseDate(game.released)} />
                    <GameCardInfoAtributes tag="Genres: " info={genreNames.join(', ')} />
                </div>
                <GameCardPlatformIcons parentPlatforms={game.parent_platforms} />
            </div>
            <div className={styles['card__game-description']}>
                <p className={styles['card__game-description-text']}>
                    {description ? description : 'Loading description...'}
                </p>
            </div>
        </div>
    );
}

GameCardInfo.propTypes = {
    game: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        genres: PropTypes.array,
        released: PropTypes.string,
        parent_platforms: PropTypes.array,
    }),
    description: PropTypes.string,
};

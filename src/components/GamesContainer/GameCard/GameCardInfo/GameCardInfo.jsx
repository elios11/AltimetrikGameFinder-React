import PropTypes from 'prop-types';
import styles from './GameCardInfo.module.css';
import GameCardInfoAtributes from './GameCardInfoAtributes/GameCardInfoAtributes';
import GameCardPlatformIcons from './GameCardPlatformIcons/GameCardPlatformIcons';

export default function GameCardInfo({ game }) {
    function parseDate(dateStrig) {
        const date = new Date(dateStrig);
        return `${date.toLocaleString('en-US', {
            month: 'short',
        })} ${date.getDate()}, ${date.getFullYear()}`;
    }

    const genreNames = game.genres.map((genre) => genre.name);

    return (
        <div className={styles['card__game-info']}>
            <div className={styles['card__title-and-ranking']}>
                <h3 className={styles['card__title']}>{game.name}</h3>
                <p className={styles['card__renking']}>#{game.id}</p>
            </div>
            <div className={styles['card__game-details']}>
                <div className={styles['card__game-details-atributes']}>
                    <GameCardInfoAtributes tag="Release date: " info={parseDate(game.released)} />
                    <GameCardInfoAtributes tag="Genres: " info={genreNames.join(', ')} />
                </div>
                <GameCardPlatformIcons parentPlatforms={game.parent_platforms} />
            </div>
            <div className={styles.description}>
                <p className={styles.descriptionText}></p>
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
};

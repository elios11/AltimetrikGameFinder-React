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
        <div className={styles.gameInfo}>
            <div className={styles.titleAndRanking}>
                <h3 className={styles.gameTitle}>{game.name}</h3>
                <p className={styles.ranking}></p>
            </div>
            <div className={styles.gameDetails}>
                <div className={styles.gameDetailsAttributes}>
                    <GameCardInfoAtributes tag="Release date: " info={parseDate(game.released)} />
                    <GameCardInfoAtributes tag="Genres: " info={genreNames.join(', ')} />
                </div>
                <GameCardPlatformIcons
                    parentPlatformIds={game.parent_platforms.map((parentPlatform) => parentPlatform.platform.id)}
                />
            </div>
            <div className={styles.description}>
                <p className={styles.descriptionText}></p>
            </div>
        </div>
    );
}

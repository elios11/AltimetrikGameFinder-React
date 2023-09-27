import styles from './GameCard.module.css';
import GameCardImage from './GameCardImage/GameCardImage';
import GameCardInfo from './GameCardInfo/GameCardInfo';

export default function GameCard({ game }) {
    return (
        <div className={styles.card}>
            <GameCardImage image={game.background_image} />
            <GameCardInfo game={game} />
        </div>
    );
}

import styles from './GameCardImage.module.css';
import notLiked from '../../../../assets/GameCard/like/notLiked.png';

export default function GameCardImage({ image }) {
    return (
        <div className={styles.gameImage} style={{ backgroundImage: `url(${image})` }}>
            <img className="likeIcon" src={notLiked} />
        </div>
    );
}

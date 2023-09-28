import styles from './GameCardImage.module.css';
import notLiked from '../../../../assets/GameCard/like/not-liked.svg';

export default function GameCardImage({ image }) {
    return (
        <div className={styles['card__background-image']} style={{ backgroundImage: `url(${image})` }}>
            <img className={styles['card__like-icon']} src={notLiked} />
        </div>
    );
}

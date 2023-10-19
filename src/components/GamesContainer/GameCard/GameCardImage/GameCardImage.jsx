import PropTypes from 'prop-types';

import notLiked from '../../../../assets/GameCard/like/not-liked.svg';
import styles from './GameCardImage.module.css';

export default function GameCardImage({ image }) {
    return (
        <div className={styles['card__background-image']} style={{ backgroundImage: `url(${image})` }}>
            <img className={styles['card__like-icon']} src={notLiked} alt="like" />
        </div>
    );
}

GameCardImage.propTypes = {
    image: PropTypes.string,
};

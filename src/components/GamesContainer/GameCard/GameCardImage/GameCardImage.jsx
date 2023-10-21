import { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './GameCardImage.module.css';
import notLiked from '../../../../assets/GameCard/like/not-liked.svg';
import SingleColumnContext from '@context/SingleColumnContext';

export default function GameCardImage({ image }) {
    const { singleColumn } = useContext(SingleColumnContext);

    const gameImageStyles = singleColumn
        ? styles['card__background-image'] + ' ' + styles['single-column']
        : styles['card__background-image'];

    return (
        <div className={gameImageStyles} style={{ backgroundImage: `url(${image})` }}>
            <img className={styles['card__like-icon']} src={notLiked} alt="like" />
        </div>
    );
}

GameCardImage.propTypes = {
    image: PropTypes.string,
};

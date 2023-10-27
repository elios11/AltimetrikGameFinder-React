import { useContext } from 'react';

import notLiked from '@assets/GameCard/like/not-liked.svg';
import transparent from '@assets/GameCard/transparent.svg';
import SingleColumnContext from '@context/SingleColumnContext';

import stylesFromCard from '@/components/GamesContainer/GameCard/GameCard.module.css';
import stylesFromCardInfo from '@/components/GamesContainer/GameCard/GameCardInfo/GameCardInfo.module.css';

import styles from './Skeleton.module.css';

export default function Skeleton() {
    const { singleColumn } = useContext(SingleColumnContext);

    const gameCardStyles = singleColumn
        ? stylesFromCard['card'] + ' ' + stylesFromCard['single-column']
        : styles['card'];

    return (
        <div className={gameCardStyles}>
            <div className={`${styles['card']} ${styles['skeleton']}`}>
                <img src={transparent} className={styles['skeleton-image']} alt="skeleton" />
                <img src={notLiked} alt="Like button: white heart" />
                <div className={`${styles['container']} ${styles['skeleton-container']}`}>
                    <div className={styles['first-row']}>
                        {/* eslint-disable-next-line  */}
                        <h3 className={`${styles['skeleton-paragraph']} ${styles['skeleton-h']}`}></h3>
                        <p></p>
                    </div>
                    <div className={styles['tablet-row']}>
                        <div>
                            <div
                                className={`${styles['second-row']} ${styles['skeleton-row']} ${styles['skeleton-paragraph']}`}
                            >
                                <p></p>
                                <p className={`${styles['genres']} ${styles['date']}`}></p>
                            </div>
                            <div
                                className={`${styles['third-row']} ${styles['date']} ${styles['skeleton-row']} ${styles['skeleton-paragraph']}`}
                            >
                                <p></p>
                                <p className={styles['genres']}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {singleColumn && (
                <div className={`${stylesFromCardInfo['card__game-info']} ${stylesFromCardInfo['single-column']}`}>
                    <p
                        className={`${styles['skeleton-row']} ${styles['skeleton-paragraph']} ${styles['skeleton-description']}`}
                    ></p>
                    <p
                        className={`${styles['skeleton-row']} ${styles['skeleton-paragraph']} ${styles['skeleton-description']}`}
                    ></p>
                    <p
                        className={`${styles['skeleton-row']} ${styles['skeleton-paragraph']} ${styles['skeleton-description']}`}
                    ></p>
                </div>
            )}
        </div>
    );
}

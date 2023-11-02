import { useContext } from 'react';

import SingleColumnContext from '@context/SingleColumnContext';
import PropTypes from 'prop-types';

import styles from '@/components/GamesContainer/GameCard/GameCardInfo/GameCardInfo.module.css';

import skeletonStyles from './Skeleton.module.css';

export default function SkeletonCardInfo({ description }) {
    const { singleColumn } = useContext(SingleColumnContext);

    const gameInfoStyles = singleColumn
        ? `${styles['card__game-info']} ${styles['single-column']}`
        : styles['card__game-info'];

    return (
        <div className={gameInfoStyles}>
            <div className={skeletonStyles['skeleton-container']}>
                {/* eslint-disable-next-line */}
                <h3
                    className={`${styles['card__title']} ${skeletonStyles['skeleton-paragraph']} ${skeletonStyles['skeleton-h']}`}
                ></h3>
                <div className={skeletonStyles['skeleton-container2']}>
                    <p
                        className={`${styles['card__ranking']} ${skeletonStyles['skeleton-paragraph']} ${skeletonStyles['skeleton-row']}`}
                    ></p>
                    <p
                        className={`${styles['card__ranking']} ${skeletonStyles['skeleton-paragraph']} ${skeletonStyles['skeleton-row']}`}
                    ></p>
                </div>
            </div>
            {description && (
                <div className={styles['card__game-description']}>
                    <p
                        className={`${skeletonStyles['skeleton']} ${skeletonStyles['skeleton-row']} ${skeletonStyles['skeleton-description']}`}
                    ></p>
                    <p
                        className={`${skeletonStyles['skeleton']} ${skeletonStyles['skeleton-row']} ${skeletonStyles['skeleton-description']}`}
                    ></p>
                    <p
                        className={`${skeletonStyles['skeleton']} ${skeletonStyles['skeleton-row']} ${skeletonStyles['skeleton-description']}`}
                    ></p>
                </div>
            )}
        </div>
    );
}

SkeletonCardInfo.propTypes = {
    description: PropTypes.bool,
};

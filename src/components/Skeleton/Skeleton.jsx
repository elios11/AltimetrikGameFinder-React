import { useContext } from 'react';

import transparent from '@assets/GameCard/transparent.svg';
import GameCardImage from '@components/GamesContainer/GameCard/GameCardImage/GameCardImage';
import SingleColumnContext from '@context/SingleColumnContext';

import styles from '@/components/GamesContainer/GameCard/GameCard.module.css';

import skeletonStyles from './Skeleton.module.css';
import SkeletonCardInfo from './SkeletonCardInfo';

export default function Skeleton() {
    const { singleColumn } = useContext(SingleColumnContext);

    const gameCardStyles = singleColumn ? styles['card'] + ' ' + styles['single-column'] : styles['card'];

    return (
        <button className={`${gameCardStyles} ${skeletonStyles['skeleton']}`}>
            <GameCardImage image={transparent} />
            <SkeletonCardInfo description={singleColumn} />
        </button>
    );
}

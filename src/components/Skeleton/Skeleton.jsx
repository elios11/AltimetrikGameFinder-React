import notLiked from '@assets/GameCard/like/not-liked.svg';
import transparent from '@assets/GameCard/transparent.svg';

import styles from './Skeleton.module.css';

export default function Skeleton() {
    return (
        <div className={styles['list-item']}>
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
                    {/* <p id="singleDispDesc" className={styles['skeletonParagraph']}></p> */}
                </div>
            </div>
        </div>
    );
}

import { useState } from 'react';

import action from '@assets/icons/action.svg';
import chatBubbles from '@assets/icons/chat-bubbles.svg';
import defaultImgSrc from '@assets/icons/default-img.png';
import heartIcon from '@assets/icons/heart.svg';
import thumbsUp from '@assets/icons/thumbs-up.svg';
import GameCardPlatformIcons from '@components/GamesContainer/GameCard/GameCardInfo/GameCardPlatformIcons/GameCardPlatformIcons';
import formatDate from '@utils/formatDate';
import useTheme from '@context/useTheme';

import PropTypes from 'prop-types';
import styles from './GameDataModalInfo.module.css';

export default function GameDataModalInfo({ gameData, gameAssets, closeModal, setShowingDescription }) {
    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const { isDarkMode } = useTheme();
    const parentPlatforms = gameData?.parent_platforms.map((platform) => platform.platform.name);
    const formattedDate = formatDate(gameData?.released);
    const genres = gameData?.genres.map((genre) => genre.name);
    const publishers = gameData?.publishers.map((publisher) => publisher.name);
    const developers = gameData?.developers.map((developer) => developer.name);
    let images = {
        0: defaultImgSrc,
        1: defaultImgSrc,
        2: defaultImgSrc,
        3: defaultImgSrc,
        4: defaultImgSrc,
    };

    gameAssets?.images?.map((image, index) => (images[index] = image.image));

    function toggleDescription() {
        if (window.innerWidth < 1200) {
            setDescriptionOpen((prevDescriptionOpen) => !prevDescriptionOpen);
        }
    }

    function showDescriptionDesktop() {
        setShowingDescription(true);
    }

    return (
        gameData && (
            <div className={styles['game-modal-data']}>
                {/* prettier-ignore */}
                <button className={styles['close-modal-btn']} onClick={closeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.5856 10.5866C10.9606 10.2116 11.4692 10.001 11.9996 10.001C12.5299 10.001 13.0385 10.2116 13.4136 10.5866L23.9996 21.1731L34.5856 10.5866C34.7701 10.3955 34.9908 10.2432 35.2348 10.1383C35.4788 10.0335 35.7412 9.97834 36.0068 9.97603C36.2723 9.97372 36.5357 10.0243 36.7815 10.1249C37.0273 10.2255 37.2506 10.374 37.4384 10.5618C37.6261 10.7496 37.7747 10.9729 37.8752 11.2187C37.9758 11.4645 38.0264 11.7279 38.0241 11.9934C38.0218 12.259 37.9666 12.5215 37.8618 12.7655C37.757 13.0095 37.6046 13.2302 37.4136 13.4147L26.8276 24.0012L37.4136 34.5877C37.7779 34.9649 37.9795 35.4702 37.9749 35.9946C37.9704 36.519 37.76 37.0207 37.3892 37.3915C37.0184 37.7623 36.5168 37.9727 35.9924 37.9772C35.468 37.9818 34.9628 37.7802 34.5856 37.4159L23.9996 26.8293L13.4136 37.4159C13.0364 37.7802 12.5312 37.9818 12.0068 37.9772C11.4824 37.9727 10.9808 37.7623 10.6099 37.3915C10.2391 37.0207 10.0288 36.519 10.0242 35.9946C10.0197 35.4702 10.2213 34.9649 10.5856 34.5877L21.1716 24.0012L10.5856 13.4147C10.2106 13.0396 10 12.531 10 12.0006C10 11.4703 10.2106 10.9616 10.5856 10.5866Z"
                              fill="#ffffff"/>
                    </svg>
                </button>
                <GameCardPlatformIcons
                    parentPlatforms={gameData?.parent_platforms}
                    containerStylesClass={styles['game-modal-data__platforms']}
                    iconStylesClass={styles['game-modal-data__platforms__icons']}
                />
                <h2 className={styles['game-modal-data__title']}>{gameData?.name || 'No name data available...'}</h2>
                <div className={styles['game-modal-data__labels-container']}>
                    <p
                        className={`${styles['game-modal-data__labels-container__label']} ${
                            !isDarkMode && styles['highlight']
                        }`}
                    >
                        May 31, 2021
                    </p>
                    <p className={styles['game-modal-data__labels-container__label']}>
                        <span className="text-primary">#1</span>TOP 2021
                    </p>
                    <p className={styles['game-modal-data__labels-container__label']}>
                        <span className="text-primary">#9</span>RPG
                    </p>
                </div>
                <button
                    className={`${styles['game-modal-data__description-btn']}`}
                    style={{ textAlign: 'start' }}
                    onClick={toggleDescription}
                >
                    <p
                        className={`${styles['game-modal-data__description']} ${
                            descriptionOpen ? styles['description-open'] : ''
                        }`}
                    >
                        {gameData?.description_raw || 'No description data available...'}
                    </p>
                </button>
                <button
                    className={`text-primary ${styles['game-modal-data__read-more-btn']}`}
                    onClick={showDescriptionDesktop}
                >
                    Read more
                </button>
                <div className={styles['game-modal-data__wishlist_btn']}>
                    <button className={`primary-button ${styles['game-modal-data__button']}`}>Add to wishlist</button>
                    <img src={heartIcon} alt="heart icon" />
                </div>
                <button
                    className={`secondary-button ${styles['game-modal-data__button']} ${styles['game-modal-data__purchase-btn']}`}
                >
                    Purchase
                </button>
                <div className={styles['game-modal-data__properties']}>
                    <div
                        className={`${styles['game-modal-data__property']} ${styles['game-modal-data__platforms-name']}`}
                    >
                        <h3 className="text-muted">Platforms</h3>
                        <h4>{parentPlatforms.join(', ') || 'No platforms data available...'}</h4>
                    </div>
                    <div className={`${styles['game-modal-data__property']} ${styles['game-modal-data__release']}`}>
                        <h3 className="text-muted">Release date</h3>
                        <h4>{formattedDate || 'No release date data available...'}</h4>
                    </div>
                    <div className={`${styles['game-modal-data__property']} ${styles['game-modal-data__publisher']}`}>
                        <h3 className="text-muted">Publisher</h3>
                        <h4>{publishers.join(', ') || 'No publishers data available...'}</h4>
                    </div>
                    <div className={`${styles['game-modal-data__property']} ${styles['game-modal-data__website']}`}>
                        <h3 className="text-muted">Website</h3>
                        <a href={gameData?.website}>
                            <h4>{gameData?.website || 'No website data available...'}</h4>
                        </a>
                    </div>
                    <div className={`${styles['game-modal-data__property']} ${styles['game-modal-data__genres']}`}>
                        <h3 className="text-muted">Genre</h3>
                        <h4>{genres.join(', ') || 'No genres data available...'}</h4>
                    </div>
                    <div className={`${styles['game-modal-data__property']} ${styles['game-modal-data__developer']}`}>
                        <h3 className="text-muted">Developer</h3>
                        <h4>{developers.join(', ') || 'No developers data available...'}</h4>
                    </div>
                    <div className={`${styles['game-modal-data__property']} ${styles['game-modal-data__age-rating']}`}>
                        <h3 className="text-muted">Age rating</h3>
                        <h4>{gameData?.esrb_rating?.name || 'Not rated'}</h4>
                    </div>
                </div>
                <div className={styles['game-modal-data__critics-container']}>
                    <img src={chatBubbles} alt="game reviews icon" />
                    <img src={thumbsUp} alt="thumbs up icon" />
                    <img src={action} alt="share game icon" />
                </div>
                <div className={styles['game-modal-data__assets']}>
                    {(gameAssets?.videos?.[0]?.data.max && (
                        <video controls>
                            <source src={gameAssets.videos[0].data[480]} type="video/mp4" />
                            <source src={gameAssets.videos[0].data.max} type="video/mp4" />
                            <track kind="metadata" label="Game trailer" />
                            <track kind="captions" label="No captions" src="" default />
                        </video>
                    )) || <img src={images[4]} alt="Game screenshot" />}
                    <img src={images[0]} alt="Game screenshot 1" />
                    <img src={images[1]} alt="Game screenshot 2" />
                    <img src={images[2]} alt="Game screenshot 3" />
                    <img src={images[3]} alt="Game screenshot 4" />
                </div>
            </div>
        )
    );
}

GameDataModalInfo.propTypes = {
    gameData: PropTypes.object,
    gameAssets: PropTypes.shape({ images: PropTypes.array, videos: PropTypes.array }),
    closeModal: PropTypes.func.isRequired,
    setShowingDescription: PropTypes.func,
};

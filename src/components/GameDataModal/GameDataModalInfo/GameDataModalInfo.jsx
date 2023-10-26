import { useState } from 'react';

import action from '@assets/icons/action.svg';
import chatBubbles from '@assets/icons/chat-bubbles.svg';
import defaultImgSrc from '@assets/icons/default-img.png';
import heartIcon from '@assets/icons/heart.svg';
import thumbsUp from '@assets/icons/thumbs-up.svg';
import GameCardPlatformIcons from '@components/GamesContainer/GameCard/GameCardInfo/GameCardPlatformIcons/GameCardPlatformIcons';
import formatDate from '@utils/formatDate';
import PropTypes from 'prop-types';

import styles from './GameDataModalInfo.module.css';

export default function GameDataModalInfo({ gameData, gameAssets }) {
    const [descriptionOpen, setDescriptionOpen] = useState(false);

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

    return (
        gameData && (
            <div className={styles['game-modal-data']}>
                <GameCardPlatformIcons
                    parentPlatforms={gameData.parent_platforms}
                    containerStylesClass={styles['game-modal-data__platforms']}
                    iconStylesClass={styles['game-modal-data__platforms__icons']}
                />
                <h2 className={styles['game-modal-data__title']}>{gameData?.name || 'No name data available...'}</h2>
                <div className={styles['game-modal-data__labels-container']}>
                    <p className={styles['game-modal-data__labels-container__label']}>May 31, 2021</p>
                    <p className={styles['game-modal-data__labels-container__label']}>
                        <span className="text-primary">#1</span>TOP 2021
                    </p>
                    <p className={styles['game-modal-data__labels-container__label']}>
                        <span className="text-primary">#9</span>RPG
                    </p>
                </div>
                <button style={{ textAlign: 'start' }} onClick={() => setDescriptionOpen((prevState) => !prevState)}>
                    <p
                        className={`${styles['game-modal-data__description']} ${
                            descriptionOpen ? styles['description-open'] : ''
                        }`}
                    >
                        {gameData?.description_raw || 'No description data available...'}
                    </p>
                </button>
                <div className={styles['game-modal-data__wishlist_btn']}>
                    <button className={`primary-button ${styles['game-modal-data__button']}`}>Add to wishlist</button>
                    <img src={heartIcon} alt="heart icon" />
                </div>
                <button className={`secondary-button ${styles['game-modal-data__button']}`}>Purchase</button>
                <div className={styles['game-modal-data__properties']}>
                    <div className={`${styles['game-modal-data__property']} ${styles['platforms']}`}>
                        <h3 className="text-muted">Platforms</h3>
                        <h4>{parentPlatforms.join(', ') || 'No platforms data available...'}</h4>
                    </div>
                    <div className={`${styles['game-modal-data__property']} ${styles['']}`}>
                        <h3 className="text-muted">Release date</h3>
                        <h4>{formattedDate || 'No release date data available...'}</h4>
                    </div>
                    <div className={`${styles['game-modal-data__property']} ${styles['']}`}>
                        <h3 className="text-muted">Publisher</h3>
                        <h4>{publishers.join(', ') || 'No publishers data available...'}</h4>
                    </div>
                    <div className={`${styles['game-modal-data__property']} ${styles['']}`}>
                        <h3 className="text-muted">Website</h3>
                        <a href={gameData?.website}>
                            <h4>{gameData?.website || 'No website data available...'}</h4>
                        </a>
                    </div>
                    <div className={`${styles['game-modal-data__property']} ${styles['']}`}>
                        <h3 className="text-muted">Genre</h3>
                        <h4>{genres.join(', ') || 'No genres data available...'}</h4>
                    </div>
                    <div className={`${styles['game-modal-data__property']} ${styles['']}`}>
                        <h3 className="text-muted">Developer</h3>
                        <h4>{developers.join(', ') || 'No developers data available...'}</h4>
                    </div>
                    <div className={`${styles['game-modal-data__property']} ${styles['']}`}>
                        <h3 className="text-muted">Age rating</h3>
                        <h4>{gameData?.esrb_rating.name || 'Not rated'}</h4>
                    </div>
                    <div className={`${styles['game-modal-data__critics-container']} ${styles['']}`}>
                        <img src={chatBubbles} alt="game reviews icon" />
                        <img src={thumbsUp} alt="thumbs up icon" />
                        <img src={action} alt="share game icon" />
                    </div>
                </div>
                <div className={`${styles['game-modal-data__assets']} ${styles['']}`}>
                    {(gameAssets?.videos?.[0]?.data.max && (
                        <video controls>
                            <source src={gameAssets.videos[0].data[480]} type="video/mp4" />
                            <source src={gameAssets.videos[0].data.max} type="video/mp4" />
                            <track kind="metadata" label="Game trailer" />
                            <track kind="captions" label="No captions" src="" default />
                        </video>
                    )) || <img src={images[4]} alt="Game trailer" />}
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
};

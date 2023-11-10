import styles from './GameDataModalBack.module.css';
import infoStyles from '../GameDataModalInfo/GameDataModalInfo.module.css';
import PropTypes from 'prop-types';
import useTheme from '@context/useTheme';
import GameCardPlatformIcons from '@components/GamesContainer/GameCard/GameCardInfo/GameCardPlatformIcons/GameCardPlatformIcons';

export default function GameDataModalBack({ gameData, closeModal, setShowingDescription }) {
    function hideDescription() {
        setShowingDescription(false);
    }
    const { isDarkMode } = useTheme();

    return (
        <div className={styles['game-data-back-modal']}>
            {/* prettier-ignore */}
            <button onClick={hideDescription}>
                <svg className={styles['game-data-back-modal__back-btn']} width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Left Chevron">
                    <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M23.4589 6.97093C23.738 7.25004 23.8947 7.62855 23.8947 8.02321C23.8947 8.41787 23.738 8.79638 23.4589 9.07549L14.0926 18.4418L23.4589 27.8081C23.7301 28.0889 23.8801 28.4648 23.8767 28.8551C23.8733 29.2453 23.7168 29.6186 23.4408 29.8946C23.1649 30.1705 22.7915 30.3271 22.4013 30.3304C22.0111 30.3338 21.6351 30.1838 21.3544 29.9127L10.9358 19.4941C10.6567 19.215 10.5 18.8365 10.5 18.4418C10.5 18.0472 10.6567 17.6686 10.9358 17.3895L21.3544 6.97093C21.6335 6.6919 22.012 6.53516 22.4067 6.53516C22.8013 6.53516 23.1798 6.6919 23.4589 6.97093Z"
                          fill="var(--neutral-color-3)"/>
                    </g>
                </svg>
            </button>
            {/* prettier-ignore */}
            <button className={infoStyles['close-modal-btn']} onClick={closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.5856 10.5866C10.9606 10.2116 11.4692 10.001 11.9996 10.001C12.5299 10.001 13.0385 10.2116 13.4136 10.5866L23.9996 21.1731L34.5856 10.5866C34.7701 10.3955 34.9908 10.2432 35.2348 10.1383C35.4788 10.0335 35.7412 9.97834 36.0068 9.97603C36.2723 9.97372 36.5357 10.0243 36.7815 10.1249C37.0273 10.2255 37.2506 10.374 37.4384 10.5618C37.6261 10.7496 37.7747 10.9729 37.8752 11.2187C37.9758 11.4645 38.0264 11.7279 38.0241 11.9934C38.0218 12.259 37.9666 12.5215 37.8618 12.7655C37.757 13.0095 37.6046 13.2302 37.4136 13.4147L26.8276 24.0012L37.4136 34.5877C37.7779 34.9649 37.9795 35.4702 37.9749 35.9946C37.9704 36.519 37.76 37.0207 37.3892 37.3915C37.0184 37.7623 36.5168 37.9727 35.9924 37.9772C35.468 37.9818 34.9628 37.7802 34.5856 37.4159L23.9996 26.8293L13.4136 37.4159C13.0364 37.7802 12.5312 37.9818 12.0068 37.9772C11.4824 37.9727 10.9808 37.7623 10.6099 37.3915C10.2391 37.0207 10.0288 36.519 10.0242 35.9946C10.0197 35.4702 10.2213 34.9649 10.5856 34.5877L21.1716 24.0012L10.5856 13.4147C10.2106 13.0396 10 12.531 10 12.0006C10 11.4703 10.2106 10.9616 10.5856 10.5866Z"
                        fill="var(--neutral-color-3)"/>
                </svg>
            </button>
            <GameCardPlatformIcons
                parentPlatforms={gameData?.parent_platforms}
                containerStylesClass={infoStyles['game-modal-data__platforms']}
                iconStylesClass={`${infoStyles['game-modal-data__platforms__icons']} ${styles['game-data-back-modal__platforms__icons']}`}
                darkIcons={isDarkMode}
            />
            <h3 className={`${infoStyles['game-modal-data__title']} ${styles['game-data-back-modal__title']}`}>
                {gameData?.name || 'Game name was not found...'}
            </h3>
            <p
                className={`${infoStyles['game-modal-data__description']} ${styles['game-modal-data-back__description']}`}
            >
                {gameData?.description_raw || 'Game description was not found...'}
            </p>
        </div>
    );
}

GameDataModalBack.propTypes = {
    gameData: PropTypes.object,
    closeModal: PropTypes.func.isRequired,
    setShowingDescription: PropTypes.func,
};

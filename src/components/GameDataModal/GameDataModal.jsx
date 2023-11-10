import { useContext, useEffect, useState } from 'react';

import fetchGameAssets from '@api/fetchGameAssets';
import fetchGames from '@api/fetchGames';
import Dialog from '@components/Dialog';
import Loader from '@components/Loader/Loader';
import RequestsContext from '@context/RequestsContext';
import PropTypes from 'prop-types';

import styles from './GameDataModal.module.css';
import GameDataModalInfo from './GameDataModalInfo/GameDataModalInfo';
import GameDataModalBack from './GameDataModalBack/GameDataModalBack';

export default function GameDataModal({ isModalOpen, closeModal, openModal, setModalGameId, modalGameId }) {
    const [gameData, setGameData] = useState(null);
    const [showingDescription, setShowingDescription] = useState(false);
    const { gamesDescription, setGameAssets, gameAssets } = useContext(RequestsContext);
    const dialogElement = document.querySelector(`.${styles.dialog}`);

    const modalBackground = `
        linear-gradient(
            180deg,
            var(--modal-bg-initial),
            var(--modal-bg-end) var(--background-img-height)
        ),
        url("${gameData?.background_image}"`;

    if (dialogElement) {
        dialogElement.style.setProperty('background-image', modalBackground);
    }

    useEffect(() => {
        if (!modalGameId) {
            return;
        }

        fetchGameAssets(modalGameId)
            .then((result) => setGameAssets(result))
            .catch((e) => setGameAssets(e));

        if (gamesDescription[modalGameId]) {
            setGameData(gamesDescription[modalGameId]);
            openModal();
        } else {
            fetchGames('https://rawg.io/api/games/', null, null, modalGameId)
                .then((result) => {
                    setGameData(result.data);
                    openModal();
                })
                .catch((err) => setGameData(err));
        }
    }, [modalGameId]);

    function onDialogClose() {
        closeModal();
        setModalGameId(null);
        setGameData(null);
        setGameAssets(null);
        setShowingDescription(false);
    }

    if (isModalOpen) {
        document.body.classList.add('overflow-hidden');
        document.body.classList.add('game-modal-open');
    } else {
        document.body.classList.remove('overflow-hidden');
        document.body.classList.remove('game-modal-open');
    }

    return (
        modalGameId && (
            <>
                <Loader />
                <Dialog
                    type="modal"
                    isModalOpen={isModalOpen}
                    onClose={onDialogClose}
                    customStyles={`${styles.dialog} ${showingDescription ? styles['show-description'] : ''}`}
                >
                    {showingDescription ? (
                        <GameDataModalBack
                            gameData={gameData}
                            closeModal={closeModal}
                            setShowingDescription={setShowingDescription}
                        />
                    ) : (
                        <GameDataModalInfo
                            gameData={gameData}
                            gameAssets={gameAssets}
                            closeModal={closeModal}
                            setShowingDescription={setShowingDescription}
                        />
                    )}
                </Dialog>
            </>
        )
    );
}

GameDataModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    setModalGameId: PropTypes.func.isRequired,
    modalGameId: PropTypes.number,
};

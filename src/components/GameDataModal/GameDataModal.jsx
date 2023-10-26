import { useContext, useEffect, useState } from 'react';

import fetchGameAssets from '@api/fetchGameAssets';
import fetchGames from '@api/fetchGames';
import Dialog from '@components/Dialog';
import RequestsContext from '@context/RequestsContext';
import PropTypes from 'prop-types';

import styles from './GameDataModal.module.css';
import GameDataModalInfo from './GameDataModalInfo/GameDataModalInfo';

export default function GameDataModal({ isModalOpen, closeModal, openModal, setModalGameId, modalGameId }) {
    const [gameData, setGameData] = useState(null);
    const { gamesDescription, setGameAssets, gameAssets } = useContext(RequestsContext);
    const dialogElement = document.querySelector(`.${styles.dialog}`);

    const modalBackground = `
        linear-gradient(
            180deg,
            rgba(48, 48, 48, 0),
            rgba(48, 48, 48, 1) var(--background-img-height)
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
    }

    return (
        modalGameId && (
            <Dialog type="modal" isModalOpen={isModalOpen} onClose={onDialogClose} customStyles={styles.dialog}>
                <GameDataModalInfo gameData={gameData} gameAssets={gameAssets} />
            </Dialog>
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

import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import fetchGames from '@api/fetchGames';
import Dialog from '@components/Dialog';
import GameDataModalInfo from './GameDataModalInfo/GameDataModalInfo';
import RequestsContext from '@context/RequestsContext';

export default function GameDataModal({ isModalOpen, closeModal, modalGameId }) {
    const [gameData, setGameData] = useState();
    const { gamesDescription } = useContext(RequestsContext);

    useEffect(() => {
        if (!modalGameId) {
            return;
        }

        if (gamesDescription[modalGameId]) {
            setGameData(gamesDescription[modalGameId]);
        } else {
            fetchGames('https://rawg.io/api/games/', null, null, modalGameId)
                .then((result) => {
                    setGameData(result.data);
                })
                .catch((err) => setGameData(err));
        }
    }, [modalGameId]);

    return (
        <Dialog type="modal" isModalOpen={isModalOpen} closeModal={closeModal}>
            <GameDataModalInfo gameData={gameData} />
        </Dialog>
    );
}

GameDataModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    modalGameId: PropTypes.string.isRequired,
};

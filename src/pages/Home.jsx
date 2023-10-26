import { useState } from 'react';

import GameDataModal from '@components/GameDataModal';
import GamesContainer from '@components/GamesContainer/GamesContainer';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalGameId, setModalGameId] = useState(null);

    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);

    return (
        <>
            <GamesContainer setModalGameId={setModalGameId} />
            <GameDataModal
                isModalOpen={isModalOpen}
                openModal={openModal}
                closeModal={closeModal}
                setModalGameId={setModalGameId}
                modalGameId={modalGameId}
            />
        </>
    );
}

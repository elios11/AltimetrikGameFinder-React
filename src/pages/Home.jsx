import { useState } from 'react';

import GameDataModal from '@components/GameDataModal';
import GamesContainer from '@components/GamesContainer/GamesContainer';
import SidebarNav from '@components/SidebarNav/SidebarNav';
import styles from './Home.module.css';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalGameId, setModalGameId] = useState(null);

    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);

    return (
        <div className={styles['home']}>
            <div className={styles['home__sidebar']}>
                <SidebarNav />
            </div>
            <div className={styles['home__games-container']}>
                <GamesContainer setModalGameId={setModalGameId} />
            </div>
            <GameDataModal
                isModalOpen={isModalOpen}
                openModal={openModal}
                closeModal={closeModal}
                setModalGameId={setModalGameId}
                modalGameId={modalGameId}
            />
        </div>
    );
}

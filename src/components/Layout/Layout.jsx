import styles from './Layout.module.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { RequestsContextProvider } from '@context/RequestsContext';
import { SingleColumnContextProvider } from '@context/SingleColumnContext';

import MainSection from '@components/MainSection/MainSection';
import SidebarNav from '@components/SidebarNav/SidebarNav';
import Header from '../Header/Header';
import GameDataModal from '@components/GameDataModal/GameDataModal';

export default function Layout() {
    const [title, setTitle] = useState();
    const [subtitle, setSubtitle] = useState();
    const [columnButtons, setColumnButtons] = useState();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const closeSidebar = () => setIsSidebarOpen(false);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalGameId, setModalGameId] = useState(null);

    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);

    return (
        <div>
            <RequestsContextProvider>
                <SingleColumnContextProvider>
                    <div className={styles.layoutContainer}>
                        <div className={styles.header}>
                            <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                        </div>
                        <div className={styles.body}>
                            <div className={styles.main}>
                                <MainSection title={title} subtitle={subtitle} columnButtons={columnButtons} />
                            </div>
                            <div className={styles['main__body-content']}>
                                <div className={styles['body__sidebar']}>
                                    <SidebarNav setIsSidebarOpen={setIsSidebarOpen} />
                                </div>
                                <Outlet
                                    context={{ closeSidebar, setModalGameId, setTitle, setSubtitle, setColumnButtons }}
                                />
                            </div>
                        </div>
                        <div className={styles['fading-bottom']}></div>
                        <GameDataModal
                            isModalOpen={isModalOpen}
                            openModal={openModal}
                            closeModal={closeModal}
                            setModalGameId={setModalGameId}
                            modalGameId={modalGameId}
                        />
                    </div>
                </SingleColumnContextProvider>
            </RequestsContextProvider>
        </div>
    );
}

import { Outlet, useLocation } from 'react-router-dom';

import MainSection from '@components/MainSection/MainSection';
import { RequestsContextProvider } from '@context/RequestsContext';
import { SingleColumnContextProvider } from '@context/SingleColumnContext';

import Header from '../Header/Header';
import styles from './Layout.module.css';

export default function Layout() {
    const location = useLocation();
    const latestSearches = location.pathname === '/last-searches';
    const title = latestSearches ? 'Latest searches' : 'New and trending';
    const subtitle = latestSearches ? '' : 'Based on player counts and release date';

    return (
        <div>
            <RequestsContextProvider>
                <SingleColumnContextProvider>
                    <div className={styles.layoutContainer}>
                        <div className={styles.header}>
                            <Header />
                        </div>
                        <div className={styles.body}>
                            <div className={styles.main}>
                                <MainSection title={title} subtitle={subtitle} />
                            </div>
                            <Outlet />
                        </div>
                        <div className={styles['fading-bottom']}></div>
                    </div>
                </SingleColumnContextProvider>
            </RequestsContextProvider>
        </div>
    );
}

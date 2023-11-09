import LastSearches from '@components/LastSearches/LastSearches';
import SidebarNav from '@components/SidebarNav/SidebarNav';
import styles from './LastSearchesPage.module.css';
import homeStyles from './Home.module.css';

export default function LastSearchesPage() {
    return (
        <>
            <div className={styles['last-searches-container']}>
                <div className={`${homeStyles['home__sidebar']} ${styles['last-searches-container__sidebar']}`}>
                    <SidebarNav />
                </div>
                <div className={styles['last-searches']}>
                    <LastSearches />
                </div>
            </div>
        </>
    );
}

import LastSearches from '@components/LastSearches/LastSearches';
import styles from './LastSearchesPage.module.css';

export default function LastSearchesPage() {
    return (
        <div className={styles['last-searches']}>
            <LastSearches />
        </div>
    );
}

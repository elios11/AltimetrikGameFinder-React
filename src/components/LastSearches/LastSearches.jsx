import { useEffect, useState } from 'react';

import clock from '@assets/lastSearches/clock.svg';
import { getCookie, removeCookie } from '@utils/cookies';

import styles from './LastSearches.module.css';

export default function LastSearches() {
    const [lastSearches, setLastSearches] = useState([]);

    useEffect(() => {
        const lastSearchesJson = getCookie('lastSearches');
        const lastSearches = lastSearchesJson ? JSON.parse(lastSearchesJson) : [];
        setLastSearches(lastSearches);
    }, []);

    const handleClear = () => {
        removeCookie('lastSearches');
        setLastSearches([]);
    };

    return (
        <div className={styles['latestSearchesContainer']}>
            <div className={`${styles['titles']} ${styles['latestSearchesTitles']}`}>
                <h1>Latest searches</h1>
            </div>
            <div className={styles['searchedItem']}>
                {lastSearches.length > 0 ? (
                    lastSearches.map((item, index) => (
                        <div key={index}>
                            <img src={clock} alt="Last searches icon: light violet magnifying glass" />
                            <p>{item}</p>
                        </div>
                    ))
                ) : (
                    <div>
                        <p>Nothing searched yet ...</p>
                    </div>
                )}
            </div>
            <div>
                <button className={styles['clearSearchesBtn']} onClick={handleClear}>
                    Clear searches
                </button>
            </div>
        </div>
    );
}

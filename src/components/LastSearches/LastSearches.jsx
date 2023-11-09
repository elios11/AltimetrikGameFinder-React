import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import clock from '@assets/icons/clock.svg';
import Loader from '@components/Loader/Loader';
import { getCookie, removeCookie } from '@utils/cookies';
import RequestsContext from '@context/RequestsContext';
import styles from './LastSearches.module.css';
import useSearch from '../Header/SearchBar/useSearch';

export default function LastSearches() {
    const navigate = useNavigate();
    const [lastSearches, setLastSearches] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);
    const { setResult } = useContext(RequestsContext);
    const results = useSearch(selectedGame);

    useEffect(() => {
        const lastSearchesJson = getCookie('lastSearches');
        const lastSearches = lastSearchesJson ? JSON.parse(lastSearchesJson) : [];
        setLastSearches(lastSearches);
    }, []);

    useEffect(() => {
        if (results && results?.data.results) {
            setResult(results);
            navigate('/', { state: { avoidFetch: true } });
        }
    }, [results]);

    const searchGame = (searchString) => {
        setSelectedGame(searchString);
    };

    const handleClear = () => {
        removeCookie('lastSearches');
        setLastSearches([]);
    };

    return (
        <div className={styles['latest-searches']}>
            {results && results?.loading && <Loader />}
            <div className={styles['latest-searches__searched-items-container']}>
                {lastSearches.length > 0 ? (
                    lastSearches.map((item, index) => (
                        <button key={index} onClick={() => searchGame(item)}>
                            <img
                                className={styles['latest-searches__searched_item_icon']}
                                src={clock}
                                alt="Last searches icon: light violet magnifying glass"
                            />
                            <p className={styles['latest-searches__searched_item']}>{item}</p>
                        </button>
                    ))
                ) : (
                    <div>
                        <p className={styles['latest-searches__feedback']}>Nothing searched yet...</p>
                    </div>
                )}
            </div>
            <div>
                <button className={styles['latest-searches__clear-search-btn']} onClick={handleClear}>
                    Clear searches
                </button>
            </div>
        </div>
    );
}

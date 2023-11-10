import { useEffect, useState } from 'react';
import { createSearchParams, useNavigate, useOutletContext } from 'react-router-dom';

import clock from '@assets/icons/clock.svg';
import { getCookie, removeCookie } from '@utils/cookies';
import styles from './LastSearches.module.css';
import updateTitle from '@utils/updateTitle';

export default function LastSearches() {
    const navigate = useNavigate();
    const [lastSearches, setLastSearches] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);
    const { setTitle, setSubtitle, setColumnButtons } = useOutletContext();

    useEffect(() => {
        updateTitle('GameFinder | Last searches');
        setTitle('Last searches');
        setSubtitle("List of the games that you've searched for");
        setColumnButtons(false);

        const lastSearchesJson = getCookie('lastSearches');
        const lastSearches = lastSearchesJson ? JSON.parse(lastSearchesJson) : [];
        setLastSearches(lastSearches);
    }, []);

    useEffect(() => {
        if (selectedGame) {
            navigate({
                pathname: '/search',
                search: createSearchParams({
                    game: selectedGame,
                }).toString(),
            });
        }
    }, [selectedGame]);

    const searchGame = (searchString) => {
        setSelectedGame(searchString);
    };

    const handleClear = () => {
        removeCookie('lastSearches');
        setLastSearches([]);
    };

    return (
        <div className={styles['latest-searches']}>
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

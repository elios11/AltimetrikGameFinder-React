import { useContext, useEffect, useState } from 'react';

import fetchGames from '@api/fetchGames';
import clearSearchBtn from '@assets/icons/close-x-btn.svg';
import searchBarIcon from '@assets/icons/search.svg';
import RequestsContext from '@context/RequestsContext';
import useDebounce from '@hooks/useDebounce';
import { setCookie, getCookie } from '@utils/cookies';

import styles from './SearchBar.module.css';

export default function SearchBar() {
    const [search, setSearch] = useState(null);
    const debouncedSearch = useDebounce(search, 250);
    const { setResult } = useContext(RequestsContext);

    useEffect(() => {
        if (debouncedSearch !== null) {
            fetchGames('https://rawg.io/api/games/', debouncedSearch)
                .then((result) => setResult(result))
                .catch((e) => setResult(e));

            if (debouncedSearch !== '') {
                const lastSearchesJson = getCookie('lastSearches');
                const lastSearchesArray = lastSearchesJson ? JSON.parse(lastSearchesJson) : null;

                if (lastSearchesJson) {
                    const lastSearchesNewArray = [...lastSearchesArray, debouncedSearch];
                    const lastSearchesNewJson = JSON.stringify(lastSearchesNewArray);
                    setCookie('lastSearches', lastSearchesNewJson);
                } else {
                    const lastSearchesNewArray = [debouncedSearch];
                    const lastSearchesNewJson = JSON.stringify(lastSearchesNewArray);
                    setCookie('lastSearches', lastSearchesNewJson);
                }
            }
        }
    }, [debouncedSearch]);

    const handleSetSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleClearSearch = () => {
        const searchBarInput = document.getElementById('searchBar');
        searchBarInput.value = '';
        setSearch('');
    };

    return (
        <div className={styles['search-bar']}>
            <img className={styles['search-bar__icon']} src={searchBarIcon} alt="search bar icon" />
            <input
                className={styles['search-bar__input']}
                onChange={handleSetSearch}
                id="searchBar"
                type="text"
                placeholder="Search games..."
            />

            <button
                className={`${styles['search-bar__clear-search-btn']} ${search === '' ? 'display-none' : ''}`}
                onClick={handleClearSearch}
                id="clearSearchBtn"
            >
                <img src={clearSearchBtn} alt="clear search button" />
            </button>
        </div>
    );
}

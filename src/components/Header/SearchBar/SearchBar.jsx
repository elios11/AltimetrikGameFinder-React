import { useContext, useEffect, useState } from 'react';
import RequestsContext from '@context/RequestsContext';
import styles from './SearchBar.module.css';
import searchBarIcon from '@assets/icons/search.svg';
import clearSearchBtn from '@assets/icons/close-x-btn.svg';
import fetchGames from '@api/fetchGames';
import useDebounce from '@hooks/useDebouce';

export default function SearchBar() {
    const [search, setSearch] = useState(null);
    const debouncedSearch = useDebounce(search, 250);
    const { setResult } = useContext(RequestsContext);

    useEffect(() => {
        if (debouncedSearch !== null) {
            fetchGames('https://rawg.io/api/games/', debouncedSearch)
                .then((result) => setResult(result))
                .catch((e) => setResult(e));
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

            <button className={styles['search-bar__clear-search-btn']} onClick={handleClearSearch} id="clearSearchBtn">
                <img src={clearSearchBtn} alt="clear search button" />
            </button>
        </div>
    );
}

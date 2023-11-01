import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';
import { useContext, useEffect, useRef, useState } from 'react';
import RequestsContext from '@context/RequestsContext';

import clearSearchBtn from '@assets/icons/close-x-btn.svg';
import searchBarIcon from '@assets/icons/search.svg';
import useDebounce from '@hooks/useDebounce';
import useOutsideClick from '@hooks/useOutsideClick';
import useSearch from './useSearch';

export default function SearchBar({ closeSearchBar, searchBarIconRef }) {
    const [search, setSearch] = useState(null);
    const searchBarRef = useRef(null);
    const debouncedSearch = useDebounce(search, 250);
    const results = useSearch(debouncedSearch);
    const { setResult } = useContext(RequestsContext);

    useEffect(() => {
        if (results) {
            setResult(results);
        }
    }, [results]);

    const handleSetSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleClearSearch = () => {
        const searchBarInput = document.getElementById('searchBar');
        searchBarInput.value = '';
        setSearch('');
    };

    const handleOutsideClick = (e) => {
        if (searchBarIconRef?.current?.contains(e.target)) {
            return;
        }
        closeSearchBar();
    };
    useOutsideClick(searchBarRef, handleOutsideClick);

    return (
        <div className={styles['search-bar']}>
            <img className={styles['search-bar__icon']} src={searchBarIcon} alt="search bar icon" />
            <input
                className={styles['search-bar__input']}
                onChange={handleSetSearch}
                id="searchBar"
                type="text"
                placeholder="Search games..."
                ref={searchBarRef}
            />

            <button
                className={`${styles['search-bar__clear-search-btn']} ${
                    search === '' || search === null ? 'display-none' : 'display-block'
                }`}
                onClick={handleClearSearch}
                id="clearSearchBtn"
            >
                <img src={clearSearchBtn} alt="clear search button" />
            </button>
        </div>
    );
}

SearchBar.propTypes = {
    closeSearchBar: PropTypes.func.isRequired,
    searchBarIconRef: PropTypes.object,
};

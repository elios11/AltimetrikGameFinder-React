import styles from './SearchBar.module.css';
import searchBarIcon from '@assets/icons/search.svg';
import clearSearchBtn from '@assets/icons/close-x-btn.svg';

export default function SearchBar() {
    return (
        <div className={styles['search-bar']}>
            <img src={searchBarIcon} alt="search bar icon" />
            <input id="searchBar" type="text" placeholder="Search games..." />
            <img id="clearSearchBtn" src={clearSearchBtn} alt="clear search button" />
        </div>
    );
}

import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import pageLogo from '@assets/brand/dark-logo.svg';
import Sidebar from '@components/Sidebar/Sidebar';

import LogoutModal from '../LogoutModal/LogoutModal';
import HamburgerMenuIcon from './HamburgerMenuIcon/HamburgerMenuIcon';
import styles from './Header.module.css';
import SearchBar from './SearchBar/SearchBar';

export default function Header({ isSidebarOpen, setIsSidebarOpen }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const [scrollData, setScrollData] = useState({ y: 0, lastY: 0 });
    const [hideHeader, setHideHeader] = useState(false);

    /* Reference to avoid closing of search bar on click of search icon */
    const searchBarIconRef = useRef(null);

    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);

    const closeSearchBar = () => setIsSearchBarOpen(false);

    const toggleSearchBar = () => setIsSearchBarOpen((prevIsOpen) => !prevIsOpen);

    function handleLogoutModal() {
        openModal();
    }

    /* Setting scrollY data */
    useEffect(() => {
        function handleScroll() {
            setScrollData((prevScrollData) => {
                return { y: window.scrollY, lastY: prevScrollData.y };
            });
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });

    /* Handling state of hiding bar on scroll */
    useEffect(() => {
        if (scrollData.lastY === scrollData.y) {
            return;
        }

        if (scrollData.y > 200) {
            setHideHeader(false);
        } else {
            setHideHeader(true);
        }

        if (scrollData.lastY > scrollData.y || scrollData.y < 200) {
            setHideHeader(false);
        } else {
            setHideHeader(true);
        }
    }, [scrollData]);

    return (
        <nav
            className={`${styles.header} ${isSearchBarOpen ? styles['show-search-bar'] : ''} 
                ${hideHeader ? styles['hide-navbar'] : ''}`}
        >
            <div className={styles['header__menu']}>
                <HamburgerMenuIcon isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            </div>
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            <a href="/">
                <img className={styles['header__logo']} src={pageLogo} alt="Page logo" />
            </a>
            <button className={styles['header__search-icon']} ref={searchBarIconRef} onClick={toggleSearchBar}>
                {/* prettier-ignore */}
                <svg aria-label="search icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 5.0006C8.67392 5.0006 7.40215 5.52738 6.46447 6.46507C5.52678 7.40275 5 8.67452 5 10.0006C5 11.3267 5.52678 12.5985 6.46447 13.5361C7.40215 14.4738 8.67392 15.0006 10 15.0006C11.3261 15.0006 12.5979 14.4738 13.5355 13.5361C14.4732 12.5985 15 11.3267 15 10.0006C15 8.67452 14.4732 7.40275 13.5355 6.46507C12.5979 5.52738 11.3261 5.0006 10 5.0006ZM3 10.0006C3 8.89186 3.26338 7.79898 3.76843 6.81195C4.27349 5.82492 5.00578 4.97199 5.90501 4.32337C6.80423 3.67476 7.84467 3.24903 8.94064 3.08124C10.0366 2.91344 11.1568 3.00839 12.2089 3.35825C13.2609 3.70811 14.2149 4.30289 14.9921 5.09359C15.7693 5.8843 16.3476 6.84832 16.6794 7.90628C17.0111 8.96423 17.0868 10.0858 16.9001 11.1788C16.7135 12.2717 16.27 13.3047 15.606 14.1926L20.707 19.2926C20.8946 19.4801 21.0001 19.7345 21.0002 19.9997C21.0003 20.265 20.895 20.5195 20.7075 20.7071C20.52 20.8947 20.2656 21.0002 20.0004 21.0003C19.7351 21.0004 19.4806 20.8951 19.293 20.7076L14.193 15.6076C13.1525 16.3859 11.9159 16.8593 10.6217 16.9747C9.32741 17.0901 8.02658 16.843 6.86481 16.261C5.70304 15.679 4.72618 14.7852 4.0436 13.6795C3.36103 12.5738 2.99967 11.3 3 10.0006Z"
                          fill="white"/>
                </svg>
            </button>
            <button onClick={handleLogoutModal} className={styles['header__log-out-btn']}>
                Log out
            </button>
            <LogoutModal isModalOpen={isModalOpen} closeModal={closeModal} />
            <div className={styles['header__profile-img']}></div>
            <div className={styles['header__search-bar']}>
                <SearchBar closeSearchBar={closeSearchBar} searchBarIconRef={searchBarIconRef} />
            </div>
        </nav>
    );
}

Header.propTypes = {
    isSidebarOpen: PropTypes.bool,
    setIsSidebarOpen: PropTypes.func,
};

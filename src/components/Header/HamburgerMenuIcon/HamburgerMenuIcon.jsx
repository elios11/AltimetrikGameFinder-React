import PropTypes from 'prop-types';

import styles from './HamburgerMenuIcon.module.css';

export default function HamburgerMenuIcon({ setIsSidebarOpen, isSidebarOpen }) {
    const sidebarOpen = isSidebarOpen ? styles['hamburger-menu-icon--open'] : '';

    function toggleSidebar() {
        setIsSidebarOpen((prevState) => !prevState);
    }

    return (
        <>
            <button className={`${styles['hamburger-menu-icon']} ${sidebarOpen}`} onClick={toggleSidebar}>
                <div></div>
                <div></div>
                <div></div>
            </button>
        </>
    );
}

HamburgerMenuIcon.propTypes = { isSidebarOpen: PropTypes.bool, setIsSidebarOpen: PropTypes.func };

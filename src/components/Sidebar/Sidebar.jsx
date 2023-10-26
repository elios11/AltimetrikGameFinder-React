import calendar from '@assets/sidebar/calendar.svg';
import clock from '@assets/sidebar/clock.svg';
import desktopAvatarCustom from '@assets/sidebar/desktopavatarcustom.svg';
import search from '@assets/sidebar/search.svg';
import star from '@assets/sidebar/star.svg';
import thumbsUp from '@assets/sidebar/thumbs-up.svg';
import Toggle from '@components/Toggle';
import PropTypes from 'prop-types';
import SidebarNav from '@components/SidebarNav/SidebarNav';

import styles from './Sidebar.module.css';

export default function Sidebar({ isSidebarOpen }) {
    const sidebarClosedClass = isSidebarOpen ? '' : styles['closed'];

    return (
        <div className={`${styles.sidebar} ${sidebarClosedClass}`}>
            <div className={styles.sidebar__header}>
                <img src={desktopAvatarCustom} alt="Avatar" className={styles['sidebar__avatar']} />
                <div className={styles['sidebar__title']}>
                    <h2>User</h2>
                    <p>@user</p>
                </div>
            </div>
            <div className={styles['sidebar__line-div']}></div>
            <SidebarNav />
            <div className={styles['sidebar__line-div']}></div>
            <div className={styles['sidebar__dark-mode']}>
                <span className={styles['sidebar__dark-mode__text']}>Dark mode</span>
                <Toggle />
            </div>
            <div className={styles['sidebar__line-div']}></div>
            <div className={styles['sidebar__logout']}>Logout</div>
        </div>
    );
}

Sidebar.propTypes = { isSidebarOpen: PropTypes.bool };

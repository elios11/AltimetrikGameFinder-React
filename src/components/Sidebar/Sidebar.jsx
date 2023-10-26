import calendar from '@assets/sidebar/calendar.svg';
import clock from '@assets/sidebar/clock.svg';
import desktopAvatarCustom from '@assets/sidebar/desktopavatarcustom.svg';
import search from '@assets/sidebar/search.svg';
import star from '@assets/sidebar/star.svg';
import thumbsUp from '@assets/sidebar/thumbs-up.svg';
import Toggle from '@components/Toggle';
import PropTypes from 'prop-types';

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
            <nav className={styles['sidebar__nav']}>
                <div className={styles['sidebar__nav__links']}>
                    <a className={styles['sidebar__nav-item']} href="/">
                        Home
                    </a>
                    <a className={styles['sidebar__nav-item']} href="/">
                        Reviews
                    </a>
                    <a className={styles['sidebar__nav-item']} href="/">
                        New Releases
                    </a>
                </div>
                <div className={styles['sidebar__nav__trending']}>
                    <div className={styles['sidebar__nav-item-with-icon']}>
                        <img src={star} alt="This week icon" />
                        <a href="/">This week</a>
                    </div>
                    <div className={styles['sidebar__nav-item-with-icon']}>
                        <img src={calendar} alt="This month icon" />
                        <a href="/">This month</a>
                    </div>
                    <div className={styles['sidebar__nav-item-with-icon']}>
                        <img src={clock} alt="Coming soon icon" />
                        <a href="/">Coming soon</a>
                    </div>
                </div>

                <div className={styles['sidebar__nav__popular']}>
                    <h2 className={styles['sidebar__nav-section-title']}>Popular</h2>
                    <div className={styles['sidebar__nav-item-with-icon']}>
                        <img src={search} alt="Last searches icon" />
                        <a href="/" className={styles['sidebar__nav-item-with-icon__last-search']}>
                            Last searches
                        </a>
                    </div>
                    <div className={styles['sidebar__nav-item-with-icon']}>
                        <img src={thumbsUp} alt="Best of the year icon" />
                        <a href="/">Best of the year</a>
                    </div>
                </div>
            </nav>
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

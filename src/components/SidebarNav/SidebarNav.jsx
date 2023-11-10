import { NavLink } from 'react-router-dom';

import calendar from '@assets/sidebar/calendar.svg';
import clock from '@assets/sidebar/clock.svg';
import search from '@assets/sidebar/search.svg';
import star from '@assets/sidebar/star.svg';
import thumbsUp from '@assets/sidebar/thumbs-up.svg';
import PropTypes from 'prop-types';

import styles from './SidebarNav.module.css';

export default function SidebarNav({ setIsSidebarOpen }) {
    const closeSidebar = () => {
        if (setIsSidebarOpen) {
            setIsSidebarOpen(false);
        }
    };

    return (
        <nav className={styles['sidebar__nav']}>
            <div className={styles['sidebar__nav__links']}>
                <NavLink to="/" className={styles['sidebar__nav-item']}>
                    Home
                </NavLink>
                <p className={styles['sidebar__nav-item']}>Reviews</p>
                <p className={styles['sidebar__nav-item']}>New Releases</p>
            </div>
            <div className={styles['sidebar__nav__trending']}>
                <NavLink to="/this_week" className={styles['sidebar__nav-item-with-icon']}>
                    <img src={star} alt="This week icon" />
                    <p>This week</p>
                </NavLink>
                <NavLink to="/this_month" className={styles['sidebar__nav-item-with-icon']}>
                    <img src={calendar} alt="This month icon" />
                    <p>This month</p>
                </NavLink>
                <NavLink to="/coming_soon" className={styles['sidebar__nav-item-with-icon']}>
                    <img src={clock} alt="Coming soon icon" />
                    <p>Coming soon</p>
                </NavLink>
            </div>

            <div className={styles['sidebar__nav__popular']}>
                <h2 className={styles['sidebar__nav-section-title']}>Popular</h2>
                <div className={styles['sidebar__nav-item-with-icon']}>
                    <img src={search} alt="Last searches icon" />
                    <NavLink
                        to="/last_searches"
                        className={styles['sidebar__nav-item-with-icon__last-search']}
                        onClick={() => closeSidebar()}
                    >
                        Last searches
                    </NavLink>
                </div>
                <NavLink to="/best_of_year" className={styles['sidebar__nav-item-with-icon']}>
                    <img src={thumbsUp} alt="Best of the year icon" />
                    <p>Best of the year</p>
                </NavLink>
            </div>
        </nav>
    );
}

SidebarNav.propTypes = { setIsSidebarOpen: PropTypes.func };

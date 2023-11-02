import { Link } from 'react-router-dom';

import calendar from '@assets/sidebar/calendar.svg';
import clock from '@assets/sidebar/clock.svg';
import search from '@assets/sidebar/search.svg';
import star from '@assets/sidebar/star.svg';
import thumbsUp from '@assets/sidebar/thumbs-up.svg';

import styles from './SidebarNav.module.css';

export default function SidebarNav() {
    return (
        <nav className={styles['sidebar__nav']}>
            <div className={styles['sidebar__nav__links']}>
                <Link className={styles['sidebar__nav-item']} to="/">
                    Home
                </Link>
                <p className={styles['sidebar__nav-item']}>Reviews</p>
                <p className={styles['sidebar__nav-item']}>New Releases</p>
            </div>
            <div className={styles['sidebar__nav__trending']}>
                <div className={styles['sidebar__nav-item-with-icon']}>
                    <img src={star} alt="This week icon" />
                    <p>This week</p>
                </div>
                <div className={styles['sidebar__nav-item-with-icon']}>
                    <img src={calendar} alt="This month icon" />
                    <p>This month</p>
                </div>
                <div className={styles['sidebar__nav-item-with-icon']}>
                    <img src={clock} alt="Coming soon icon" />
                    <p>Coming soon</p>
                </div>
            </div>

            <div className={styles['sidebar__nav__popular']}>
                <h2 className={styles['sidebar__nav-section-title']}>Popular</h2>
                <div className={styles['sidebar__nav-item-with-icon']}>
                    <img src={search} alt="Last searches icon" />
                    <Link to="/last_searches" className={styles['sidebar__nav-item-with-icon__last-search']}>
                        Last searches
                    </Link>
                </div>
                <div className={styles['sidebar__nav-item-with-icon']}>
                    <img src={thumbsUp} alt="Best of the year icon" />
                    <p>Best of the year</p>
                </div>
            </div>
        </nav>
    );
}

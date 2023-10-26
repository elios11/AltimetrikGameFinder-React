import styles from './SidebarNav.module.css';
import clock from '@assets/sidebar/clock.svg';
import calendar from '@assets/sidebar/calendar.svg';
import star from '@assets/sidebar/star.svg';
import thumbsUp from '@assets/sidebar/thumbs-up.svg';
import search from '@assets/sidebar/search.svg';

export default function SidebarNav() {
    return (
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
    );
}

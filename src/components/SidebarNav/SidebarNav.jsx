import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import calendar from '@assets/sidebar/calendar.svg';
import clock from '@assets/sidebar/clock.svg';
import search from '@assets/sidebar/search.svg';
import star from '@assets/sidebar/star.svg';
import thumbsUp from '@assets/sidebar/thumbs-up.svg';
import RequestsContext from '@context/RequestsContext';
import useDebounce from '@hooks/useDebounce';
import PropTypes from 'prop-types';

import styles from './SidebarNav.module.css';
import useComplexSearch from './useComplexSearch';

export default function SidebarNav({ setIsSidebarOpen }) {
    const [complexSearch, setComplexSearch] = useState(null);
    const debouncedComplexSearch = useDebounce(complexSearch, 250);
    const results = useComplexSearch(debouncedComplexSearch);
    const { setResult } = useContext(RequestsContext);

    useEffect(() => {
        if (results) {
            setResult(results);
        }
    }, [results]);

    const formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };

    const closeSidebar = () => {
        if (setIsSidebarOpen) {
            setIsSidebarOpen(false);
        }
    };

    const homeSearch = () => {
        setComplexSearch();
    };

    const thisWeekSearch = () => {
        const currentDate = new Date();
        const otherDate = new Date();
        otherDate.setDate(otherDate.getDate() - 7);
        setComplexSearch({ dates: `${formatDate(otherDate)},${formatDate(currentDate)}` });
        closeSidebar();
    };

    const thisMonthSearch = () => {
        const currentDate = new Date();
        const otherDate = new Date();
        otherDate.setMonth(otherDate.getMonth() - 1);
        setComplexSearch({ dates: `${formatDate(otherDate)},${formatDate(currentDate)}` });
        closeSidebar();
    };

    const comingSoonSearch = () => {
        const currentDate = new Date();
        const otherDate = new Date();
        otherDate.setMonth(otherDate.getMonth() + 3);
        setComplexSearch({ dates: `${formatDate(currentDate)},${formatDate(otherDate)}` });
        closeSidebar();
    };

    const bestOfTheYearSearch = () => {
        const currentDate = new Date();
        const currentYear = new Date().getFullYear();
        const firstDay = new Date(currentYear, 0, 1);
        setComplexSearch({ dates: `${formatDate(firstDay)},${formatDate(currentDate)}`, ordering: `-rating` });
        closeSidebar();
    };

    return (
        <nav className={styles['sidebar__nav']}>
            <div className={styles['sidebar__nav__links']}>
                <Link className={styles['sidebar__nav-item']} to="/" onClick={homeSearch}>
                    Home
                </Link>
                <p className={styles['sidebar__nav-item']}>Reviews</p>
                <p className={styles['sidebar__nav-item']}>New Releases</p>
            </div>
            <div className={styles['sidebar__nav__trending']}>
                <Link to="/" className={styles['sidebar__nav-item-with-icon']} onClick={thisWeekSearch}>
                    <img src={star} alt="This week icon" />
                    <p>This week</p>
                </Link>
                <Link to="/" className={styles['sidebar__nav-item-with-icon']} onClick={thisMonthSearch}>
                    <img src={calendar} alt="This month icon" />
                    <p>This month</p>
                </Link>
                <Link to="/" className={styles['sidebar__nav-item-with-icon']} onClick={comingSoonSearch}>
                    <img src={clock} alt="Coming soon icon" />
                    <p>Coming soon</p>
                </Link>
            </div>

            <div className={styles['sidebar__nav__popular']}>
                <h2 className={styles['sidebar__nav-section-title']}>Popular</h2>
                <div className={styles['sidebar__nav-item-with-icon']}>
                    <img src={search} alt="Last searches icon" />
                    <Link
                        to="/last_searches"
                        className={styles['sidebar__nav-item-with-icon__last-search']}
                        onClick={() => closeSidebar()}
                    >
                        Last searches
                    </Link>
                </div>
                <Link to="/" className={styles['sidebar__nav-item-with-icon']} onClick={bestOfTheYearSearch}>
                    <img src={thumbsUp} alt="Best of the year icon" />
                    <p>Best of the year</p>
                </Link>
            </div>
        </nav>
    );
}

SidebarNav.propTypes = { setIsSidebarOpen: PropTypes.func };

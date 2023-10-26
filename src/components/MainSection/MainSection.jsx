import Toggle from '@components/Toggle';
import PropTypes from 'prop-types';

import { MultipleColumnsBtn, SingleColumnBtn } from './Columns';
import styles from './MainSection.module.css';
import { useLocation } from 'react-router-dom';

export default function MainSection({ title, subtitle }) {
    const location = useLocation();

    return (
        <main className={styles['main-section']}>
            <h1 className={styles['main-section__title']}>{title}</h1>
            {subtitle && <h2 className={styles['main-section__subtitle']}>{subtitle}</h2>}
            <div className={styles['main-section__switchTheme']}>
                <p>Dark mode</p>
                <Toggle />
            </div>
            {location.pathname !== '/last-searches' && (
                <div className={styles['main-section__columns']}>
                    <MultipleColumnsBtn />
                    <SingleColumnBtn />
                </div>
            )}
        </main>
    );
}

MainSection.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

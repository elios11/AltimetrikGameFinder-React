import styles from './MainSection.module.css';
import { MultipleColumnsBtn, SingleColumnBtn } from './Columns';
import SwitchThemeBtn from './SwitchThemeBtn';
import PropTypes from 'prop-types';

export default function MainSection({ title, subtitle }) {
    return (
        <main className={styles['main-section']}>
            <h1 className={styles['main-section__title']}>{title}</h1>
            {subtitle && <h2 className={styles['main-section__subtitle']}>{subtitle}</h2>}
            <div className={styles['main-section__switchTheme']}>
                <p>Dark mode</p>
                <SwitchThemeBtn />
            </div>
            <div className={styles['main-section__columns']}>
                <MultipleColumnsBtn />
                <SingleColumnBtn />
            </div>
        </main>
    );
}

MainSection.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

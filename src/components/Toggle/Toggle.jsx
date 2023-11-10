import { useTheme } from '@context/ThemeContext';

import styles from './Toggle.module.css';

export default function Toggle() {
    const { isDarkMode, toggleTheme } = useTheme();
    return (
        <label className={styles['switch']}>
            <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
            <span className={`${styles['slider']} ${styles['round']}`}></span>
        </label>
    );
}

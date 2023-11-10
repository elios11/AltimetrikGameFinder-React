import useTheme from '@context/useTheme';
import { setCookie } from '@utils/cookies';
import styles from './Toggle.module.css';
import { useEffect } from 'react';

export default function Toggle() {
    const { isDarkMode, toggleTheme } = useTheme();

    useEffect(() => {
        if (!isDarkMode) {
            document.body.classList.add('light');
        } else {
            document.body.classList.remove('light');
        }

        setCookie('darkMode', isDarkMode, 100000);
    }, [isDarkMode]);

    return (
        <label className={styles['switch']}>
            <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
            <span className={`${styles['slider']} ${styles['round']}`}></span>
        </label>
    );
}

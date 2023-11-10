import { createContext, useState, useMemo, useEffect } from 'react';
import { getCookie } from '@utils/cookies';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const darkModeFromCookie = getCookie('darkMode');
    const [isDarkMode, setIsDarkMode] = useState(darkModeFromCookie ? JSON.parse(darkModeFromCookie) : true);

    useEffect(() => {
        if (getCookie('darkMode')) {
            setIsDarkMode(JSON.parse(getCookie('darkMode')));
            return;
        }
        const mq = window.matchMedia('(prefers-color-scheme: dark)');

        if (mq.matches) {
            setIsDarkMode(true);
        }

        // This callback will fire if the perferred color scheme changes without a reload
        mq.addEventListener('change', (evt) => {
            setIsDarkMode(evt.matches);
        });
    }, []);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const theme = useMemo(() => {
        return {
            isDarkMode,
            toggleTheme,
        };
    }, [isDarkMode]);

    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export default ThemeProvider;

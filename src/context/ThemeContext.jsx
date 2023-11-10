import { createContext, useContext, useState, useMemo } from 'react';

import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

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

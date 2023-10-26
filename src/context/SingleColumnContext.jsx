import { useState, createContext } from 'react';

import PropTypes from 'prop-types';

const SingleColumnContext = createContext(null);

export function SingleColumnContextProvider({ children }) {
    const [singleColumn, setSingleColumn] = useState(false);

    return (
        <SingleColumnContext.Provider value={{ singleColumn, setSingleColumn }}>
            {children}
        </SingleColumnContext.Provider>
    );
}

SingleColumnContextProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export default SingleColumnContext;

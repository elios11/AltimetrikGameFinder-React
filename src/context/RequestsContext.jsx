import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const RequestsContext = createContext(null);

export function RequestsContextProvider({ children }) {
    const [result, setResult] = useState({ loading: true, data: {}, error: null });

    return <RequestsContext.Provider value={{ result, setResult }}>{children}</RequestsContext.Provider>;
}

RequestsContextProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export default RequestsContext;

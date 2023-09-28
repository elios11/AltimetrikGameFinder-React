import registerOrLogin from '@api/registerOrLogin';

/**
 * Handles user registration or login by calling the registerOrLogin function and updating the response state.
 *
 * @param {function} setResponse - A state setter function to update response state.
 * @param {string} route - The API route for registration or login.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @param {function} navigate - For redirecting after login. useNavigate from react-router-dom.
 *
 * @throws {Error} If there is an HTTP error or an exception is thrown during the request.
 *
 * @returns {void}
 */
export const handleRegisterAndLogin = (setResponse, route, email, password, navigate) => {
    registerOrLogin(email, password, route, setResponse, navigate);
};

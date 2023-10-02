import registerOrLogin from '@api/registerOrLogin';

/**
 * Handles user registration or login based on the provided data and updates the response state accordingly.
 *
 * @param {Function} setResponse - A function to update the response state.
 * @param {Object} loginOrRegisterData - An object containing user login or registration data.
 * @param {string} route - The route for registration or login.
 * @param {Function} navigate - A function to navigate to a specific route.
 * @returns {void}
 */
export const handleRegisterAndLogin = async (setResponse, loginOrRegisterData, route, navigate) => {
    setResponse((prevResp) => ({
        ...prevResp,
        loading: true,
    }));

    const { email, password } = loginOrRegisterData;
    const res = await registerOrLogin(email, password, route, navigate);
    setResponse(res);
};

import { setCookie } from '@utils/cookies';

/**
 * Sends a POST request to the specified API route for user registration or login.
 *
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @param {string} route - The API route for registration or login.
 * @param {function} setResponse - A state setter function to update response state.
 * @param {function} navigate - For redirecting after login. useNavigate from react-router-dom.
 *
 * @throws {Error} If there is an HTTP error or an exception is thrown during the request.
 *
 * @returns {void}
 */
const registerOrLogin = async (email, password, route, navigate) => {
    const response = { loading: false, data: {}, error: null };

    try {
        // Start loading
        response.loading = true;

        const responseFromServer = await fetch(import.meta.env.VITE_REACT_APP_API_URL + route, {
            method: 'POST',
            body: JSON.stringify({ email: email, password: password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await responseFromServer.json();

        if (!responseFromServer.ok) {
            response.error = 'Error http: ' + data;
        }

        if (data?.accessToken) {
            setCookie('authToken', data?.accessToken);
            setCookie('user', data?.user?.email);
        }

        if (!data.accessToken) {
            response.error = data;
        }

        response.data = data;

        if (data?.accessToken) {
            navigate('/');
        }
    } catch (e) {
        response.error = `Cannot fetch the data, error: ${e}`;
    } finally {
        response.loading = false;
    }
    return response;
};

export default registerOrLogin;

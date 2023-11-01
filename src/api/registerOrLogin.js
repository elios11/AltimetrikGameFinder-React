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
const registerOrLogin = async (authFormData, route, navigate) => {
    const result = { loading: false, data: {}, error: null };

    try {
        // Start loading
        result.loading = true;

        const responseFromServer = await fetch(import.meta.env.VITE_REACT_APP_API_URL + route, {
            method: 'POST',
            body: JSON.stringify(authFormData),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await responseFromServer.json();

        if (!responseFromServer.ok) {
            result.error = 'Error http: ' + data;
        }

        if (data?.accessToken) {
            if (authFormData?.remember_me) {
                setCookie('authToken', data?.accessToken, 7);
                setCookie('user', data?.user?.email, 7);
            } else {
                setCookie('authToken', data?.accessToken, null);
                setCookie('user', data?.user?.email);
            }
        }

        if (!data.accessToken) {
            result.error = data;
        }

        result.data = data;

        if (data?.accessToken) {
            navigate('/');
        }
    } catch (e) {
        result.error = `Cannot fetch the data, error: ${e}`;
    } finally {
        result.loading = false;
    }
    return result;
};

export default registerOrLogin;

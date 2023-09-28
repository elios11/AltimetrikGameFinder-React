import { setCookie } from '@hooks/useCookie';

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
const registerOrLogin = async (email, password, route, setResponse, navigate) => {
    try {
        // Start loading
        setResponse((prevResp) => ({
            ...prevResp,
            loading: true,
        }));

        const responseFromServer = await fetch(import.meta.env.VITE_REACT_APP_API_URL + route, {
            method: 'POST',
            body: JSON.stringify({ email: email, password: password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await responseFromServer.json();

        let error = null;
        if (!responseFromServer.ok) {
            error = 'Error http: ' + data;
        }

        if (data?.accessToken) {
            setCookie('authToken', data?.accessToken);
            setCookie('user', data?.user?.email);
        }

        if (!data.accessToken) {
            error = data;
        }

        setResponse((prevResp) => ({
            ...prevResp,
            data: data,
            error: error,
        }));

        if (data?.accessToken) {
            navigate('/');
        }
    } catch (e) {
        setResponse((prevResp) => ({
            ...prevResp,
            error: `Cannot fetch the data, error: ${e}`,
        }));
    } finally {
        setResponse((prevResp) => ({
            ...prevResp,
            loading: false,
        }));
    }
    return;
};

export default registerOrLogin;

const registerOrLogin = async (email, password, route, setResponse) => {
    try {
        // Start loading
        setResponse((prevResponse) => ({
            ...prevResponse,
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
            error = 'Error http: ' + data.status;
        }

        setResponse((prevResponse) => ({
            ...prevResponse,
            data: data,
            error: error,
        }));
    } catch (e) {
        setResponse((prevResponse) => ({
            ...prevResponse,
            error: `Cannot fetch the data, error: ${e}`,
        }));
    } finally {
        setResponse((prevResponse) => ({
            ...prevResponse,
            loading: false,
        }));
    }
    return;
};

export default registerOrLogin;

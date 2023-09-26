import registerOrLogin from '@api/registerOrLogin';

export const handleLogin = (setResponse) => {
    const route = '/login';
    const email = 'wewe@wewe.com';
    const password = 'Hola123$';
    registerOrLogin(email, password, route, setResponse);
};

export const handleRegister = (setResponse) => {
    const route = '/register';
    const email = 'wewe@wewe.com';
    const password = 'Hola123$';
    registerOrLogin(email, password, route, setResponse);
};

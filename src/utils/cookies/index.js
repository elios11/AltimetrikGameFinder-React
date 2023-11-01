import Cookies from 'js-cookie';

export const setCookie = (name, value, expiration) => {
    Cookies.set(name, value, {
        expires: expiration,
        secure: true,
        sameSite: 'strict',
        path: '/',
    });
};

export const getCookie = (name) => {
    return Cookies.get(name);
};

export const removeCookie = (name) => {
    Cookies.remove(name);
};

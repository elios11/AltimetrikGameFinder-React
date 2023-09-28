import Cookies from 'js-cookie';

export const setCookie = (name, value) => {
    Cookies.set(name, value, {
        expires: 1,
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

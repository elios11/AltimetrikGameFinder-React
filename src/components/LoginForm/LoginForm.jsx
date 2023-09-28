import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { handleRegisterAndLogin } from '@/utils/loginHandlers';

import styles from './LoginForm.module.css';

export default function LoginForm() {
    // Disabled next line till const response is used
    /* eslint-disable-next-line */
    const [response, setResponse] = useState({
        data: {},
        loading: false,
        error: null,
    });
    const [loginOrRegisterData, setLoginOrRegisterData] = useState({ email: '', password: '' });

    const navigate = useNavigate();

    // const email = 'wewe@wewe.com';
    // const password = 'Hola123$';

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = loginOrRegisterData;
        handleRegisterAndLogin(setResponse, '/login', email, password, navigate);

        // handleRegisterAndLogin(setResponse, '/register', email, password, navigate)
    };

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                    id="email"
                    className={styles['form__input']}
                    onChange={(e) =>
                        setLoginOrRegisterData((prevResp) => ({
                            ...prevResp,
                            email: e.target.value,
                        }))
                    }
                />
                <span className={styles['form__feedback']} id="emailFeedback">
                    Invalid email
                </span>
                <div className={styles['form__password-container']}>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        id="password"
                        className={styles['form__input']}
                        onChange={(e) =>
                            setLoginOrRegisterData((prevResp) => ({
                                ...prevResp,
                                password: e.target.value,
                            }))
                        }
                    />
                    {/* prettier-ignore */}
                    <svg className={styles['form__password-icon']} aria-label="show password eye icon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="showPwdIconPath" fillRule="evenodd" clipRule="evenodd" d="M6.30081 15.577C4.77781 14.268 3.69081 12.773 3.17981 12C3.68981 11.227 4.77781 9.732 6.30081 8.423C7.87381 7.072 9.81581 6 11.9998 6C14.1838 6 16.1258 7.072 17.6988 8.423C19.2218 9.732 20.3088 11.227 20.8198 12C20.3098 12.773 19.2218 14.268 17.6988 15.577C16.1258 16.928 14.1838 18 11.9998 18C9.81581 18 7.87381 16.928 6.30081 15.577ZM11.9998 4C9.14781 4 6.75681 5.395 4.99781 6.906C3.23281 8.423 2.00781 10.138 1.46381 10.97C1.26284 11.2759 1.15576 11.634 1.15576 12C1.15576 12.366 1.26284 12.7241 1.46381 13.03C2.00781 13.862 3.23281 15.577 4.99781 17.094C6.75781 18.605 9.14781 20 11.9998 20C14.8518 20 17.2428 18.605 19.0018 17.094C20.7668 15.577 21.9918 13.862 22.5358 13.03C22.9468 12.402 22.9468 11.599 22.5358 10.97C21.9918 10.138 20.7668 8.423 19.0018 6.906C17.2418 5.395 14.8518 4 11.9998 4ZM9.99981 12C9.99981 11.4696 10.2105 10.9609 10.5856 10.5858C10.9607 10.2107 11.4694 10 11.9998 10C12.5302 10 13.0389 10.2107 13.414 10.5858C13.7891 10.9609 13.9998 11.4696 13.9998 12C13.9998 12.5304 13.7891 13.0391 13.414 13.4142C13.0389 13.7893 12.5302 14 11.9998 14C11.4694 14 10.9607 13.7893 10.5856 13.4142C10.2105 13.0391 9.99981 12.5304 9.99981 12ZM11.9998 8C10.9389 8 9.92153 8.42143 9.17138 9.17157C8.42124 9.92172 7.99981 10.9391 7.99981 12C7.99981 13.0609 8.42124 14.0783 9.17138 14.8284C9.92153 15.5786 10.9389 16 11.9998 16C13.0607 16 14.0781 15.5786 14.8282 14.8284C15.5784 14.0783 15.9998 13.0609 15.9998 12C15.9998 10.9391 15.5784 9.92172 14.8282 9.17157C14.0781 8.42143 13.0607 8 11.9998 8Z"
                          fill="#BF5FE1" />
                </svg>
                </div>
                <span className={styles['form__feedback']} id="pwdFeedback">
                    Invalid email or password
                </span>
                <div className={styles['form__password-details-container']}>
                    <input className={styles['form__checkbox']} type="checkbox" name="rememberPwd" id="rememberPwd" />
                    <label className={styles['form__checkbox-label']} id="remember-info-label" htmlFor="rememberPwd">
                        {/* prettier-ignore */}
                        <svg className={styles['form__checkbox-icon']} width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.75" y="0.75" width="18.5" height="18.5" rx="3.25" stroke="white" strokeWidth="1.5" />
                    </svg>
                        {/* prettier-ignore */}
                        <svg className={`${styles['form__checkbox-icon']} ${styles['form__checkbox-icon--on']}`} width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width={20} height={20} rx={4} fill="#BF5FE1" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.7399 5.47146C15.8094 5.52484 15.8677 5.59139 15.9114 5.6673C15.9551 5.74321 15.9835 5.82699 15.9948 5.91386C16.0061 6.00073 16.0002 6.08898 15.9774 6.17357C15.9546 6.25816 15.9154 6.33742 15.8619 6.40684L9.19528 15.0739C9.13744 15.1491 9.06423 15.2111 8.98053 15.2557C8.89683 15.3003 8.80457 15.3266 8.70992 15.3327C8.61527 15.3388 8.5204 15.3247 8.43165 15.2912C8.3429 15.2577 8.26232 15.2057 8.19528 15.1386L4.86195 11.8051C4.74051 11.6794 4.67331 11.5109 4.67483 11.3361C4.67635 11.1613 4.74646 10.9941 4.87007 10.8705C4.99367 10.7469 5.16088 10.6768 5.33568 10.6753C5.51048 10.6737 5.67888 10.7409 5.80461 10.8624L8.60128 13.6592L14.8046 5.59346C14.858 5.524 14.9245 5.46574 15.0004 5.42201C15.0763 5.37828 15.1601 5.34994 15.247 5.33861C15.3339 5.32728 15.4221 5.33318 15.5067 5.35597C15.5913 5.37877 15.6705 5.41801 15.7399 5.47146Z" fill="white" />
                    </svg>
                        <span>Remember me</span>
                    </label>
                    <a className={styles['form__forgot-password-link']} href="/forgot-password">
                        Forgot password?
                    </a>
                </div>
                <button className="primary-button" type="submit" id="loginBtn">
                    Log in
                </button>
            </form>
            <h1>1{response.data.accessToken}</h1>
            <h1>2{response.error}</h1>
        </>
    );
}

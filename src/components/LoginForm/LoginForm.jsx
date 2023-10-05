import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { loginFormEmailValidation, loginFormPasswordValidation } from '@/utils/authFormValidations';
import { handleRegisterAndLogin } from '@/utils/loginHandlers';

import FormInput from '../FormInput/FormInput';
import styles from './LoginForm.module.css';

export default function LoginForm() {
    const navigate = useNavigate();

    /* State to manage the response data from an API request */
    const [response, setResponse] = useState({
        loading: false,
        data: {},
        error: null,
    });

    /* Destructure variables from the useForm hook for form management */
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

    /* Triggers a re-rendering for showing the invalid email or password feedback */
    useEffect(() => {
        if (response.error) {
            setError('password', { type: 'manual', message: 'Invalid email or password' });
            setError('email', { type: 'manual' });
        }
    }, [response]);

    /* Handles form submit and logs the user if the data is correct */
    async function logUser(loginFormData) {
        await handleRegisterAndLogin(setResponse, loginFormData, '/login', navigate);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit((registerFormData) => logUser(registerFormData))}>
            <FormInput
                register={register}
                validationName={'email'}
                validation={loginFormEmailValidation}
                type={'email'}
                name={'email'}
                placeholder={'Email'}
                autoComplete="on"
                error={errors.email}
            />

            <FormInput
                register={register}
                validationName={'password'}
                validation={loginFormPasswordValidation}
                type={'password'}
                name={'password'}
                placeholder={'Password'}
                autoComplete="on"
                error={errors.password}
            />

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
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.7399 5.47146C15.8094 5.52484 15.8677 5.59139 15.9114 5.6673C15.9551 5.74321 15.9835 5.82699 15.9948 5.91386C16.0061 6.00073 16.0002 6.08898 15.9774 6.17357C15.9546 6.25816 15.9154 6.33742 15.8619 6.40684L9.19528 15.0739C9.13744 15.1491 9.06423 15.2111 8.98053 15.2557C8.89683 15.3003 8.80457 15.3266 8.70992 15.3327C8.61527 15.3388 8.5204 15.3247 8.43165 15.2912C8.3429 15.2577 8.26232 15.2057 8.19528 15.1386L4.86195 11.8051C4.74051 11.6794 4.67331 11.5109 4.67483 11.3361C4.67635 11.1613 4.74646 10.9941 4.87007 10.8705C4.99367 10.7469 5.16088 10.6768 5.33568 10.6753C5.51048 10.6737 5.67888 10.7409 5.80461 10.8624L8.60128 13.6592L14.8046 5.59346C14.858 5.524 14.9245 5.46574 15.0004 5.42201C15.0763 5.37828 15.1601 5.34994 15.247 5.33861C15.3339 5.32728 15.4221 5.33318 15.5067 5.35597C15.5913 5.37877 15.6705 5.41801 15.7399 5.47146Z" 
                              fill="white" />
                    </svg>
                    <span>Remember me</span>
                </label>{' '}
                <a className={`text-primary ${styles['form__forgot-password-link']}`} href="/forgot-password">
                    Forgot password?
                </a>
            </div>
            <button className="primary-button" type="submit" formNoValidate>
                Log in
            </button>
        </form>
    );
}
